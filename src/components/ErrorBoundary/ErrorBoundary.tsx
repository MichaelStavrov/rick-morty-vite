import React, { PropsWithChildren } from 'react';

class ErrorBoundary<T extends PropsWithChildren> extends React.Component<T> {
  state: { hasError: boolean };

  constructor(props: T) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) return <span>Что-то пошло не так</span>;

    return this.props.children;
  }
}

export default ErrorBoundary;
