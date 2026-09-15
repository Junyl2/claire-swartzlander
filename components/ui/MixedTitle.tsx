type MixedTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export function MixedTitle({ text, as: Tag = "h2", className }: MixedTitleProps) {
  return <Tag className={className}>{text}</Tag>;
}
