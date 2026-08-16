type LoaderProps = {
  src: string;
  width: number;
};

export default function squarespaceLoader({ src, width }: LoaderProps) {
  if (src.startsWith("/")) return src;

  const format =
    width <= 300
      ? "300w"
      : width <= 500
        ? "500w"
        : width <= 750
          ? "750w"
          : width <= 1000
            ? "1000w"
            : width <= 1500
              ? "1500w"
              : "2500w";

  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}format=${format}`;
}
