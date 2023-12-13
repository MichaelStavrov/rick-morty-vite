interface MakeCardDataReturnType {
  id: string;
  title: string;
  text: string;
}

const makeCardData = (
  data: Record<string, string>
): MakeCardDataReturnType[] => {
  return Object.entries(data).map(([key, value], index) => ({
    id: `${index + 1}`,
    title: key,
    text: value,
  }));
};

export default makeCardData;
