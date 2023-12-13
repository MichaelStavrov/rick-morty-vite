import { useRef, useCallback } from 'react';

export interface UseInfinityScrollProps {
  loading: boolean;
  hasMore: boolean;
  onLoad: () => void;
  isError: boolean;
}

const useInfinityScroll = ({
  loading,
  hasMore,
  onLoad,
  isError,
}: UseInfinityScrollProps) => {
  const observer = useRef<IntersectionObserver>();

  const lastElemRef = useCallback(
    (node: HTMLLIElement) => {
      if (loading || isError) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoad?.();
        }
      });

      if (node && observer.current) {
        observer.current.observe(node);
      }
    },
    [hasMore, isError, loading, onLoad]
  );

  return { lastElemRef, isError };
};

export default useInfinityScroll;
