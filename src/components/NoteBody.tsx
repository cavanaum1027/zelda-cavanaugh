import type { NoteBlock } from "@/data/notes";

export function NoteBody({ blocks }: { blocks: NoteBlock[] }) {
  return (
    <div className="max-w-xl text-[16px] leading-8 text-fg/80">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="mt-12 text-2xl font-bold tracking-tight text-fg"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="mt-10 text-xl font-semibold tracking-tight text-fg"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="mt-8 font-serif text-[1.35rem] leading-[1.35] text-fg"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="mt-6 overflow-x-auto text-sm leading-7 text-fg/70"
            >
              {block.text}
            </pre>
          );
        }
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List
              key={index}
              className={`mt-6 max-w-xl space-y-2 pl-5 text-[16px] leading-8 text-fg/80 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </List>
          );
        }
        return (
          <p key={index} className="mt-6">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
