import Image from "next/image";

/**
 * Duennes Wrapper um next/image. SVGs laufen bewusst am Optimizer vorbei:
 * sie sind bereits winzig, und der Optimizer lehnt SVG ohne
 * dangerouslyAllowSVG ohnehin ab.
 */
export default function Bild({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      unoptimized={src.endsWith(".svg")}
      className={className ?? "object-cover"}
    />
  );
}
