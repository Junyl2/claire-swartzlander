import { cn } from "@/lib/utils";

type MixedTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  accentClassName?: string;
};

function splitTitle(text: string) {
  const deliberateSplit = text.indexOf(" | ");

  if (deliberateSplit > -1) {
    return [text.slice(0, deliberateSplit), text.slice(deliberateSplit + 3)];
  }

  const commaSplit = text.indexOf(",");

  if (commaSplit > -1 && commaSplit < text.length - 8) {
    return [text.slice(0, commaSplit + 1), text.slice(commaSplit + 1).trim()];
  }

  const words = text.split(" ");
  const splitAt = Math.max(2, Math.ceil(words.length * 0.62));

  return [words.slice(0, splitAt).join(" "), words.slice(splitAt).join(" ")];
}

export function MixedTitle({ text, as: Tag = "h2", className, accentClassName }: MixedTitleProps) {
  const [base, accent] = splitTitle(text);

  return (
    <Tag className={className}>
      <span>{base}</span>
      {accent ? (
        <>
          {" "}
          <span className={cn("mixed-title-accent", accentClassName)}>{accent}</span>
        </>
      ) : null}
    </Tag>
  );
}
