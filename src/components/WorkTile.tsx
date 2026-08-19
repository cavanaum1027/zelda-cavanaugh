import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Work } from "@/data/works";
import { workImageAlt } from "@/lib/seo";

export function WorkTile({
  work,
  className = "",
  figureClassName = "aspect-[4/5]",
  priority,
}: {
  work: Work;
  className?: string;
  figureClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href={`/work/${work.slug}`} className={`group block text-fg hover:text-fg ${className}`}>
      <span className={`frame relative block ${figureClassName}`}>
        <Image
          src={work.image}
          alt={workImageAlt(work)}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </span>
      <span className="mt-3 flex items-baseline justify-between gap-3 text-[13px]">
        <span>{work.title}</span>
        <span className="text-fg/45">
          {work.print
            ? `${formatPrice(work.price)} print`
            : work.soldOut
              ? "sold"
              : formatPrice(work.price)}
        </span>
      </span>
    </Link>
  );
}
