import { cn } from "@/lib/utils";
import Image from "next/image";

const CustomImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}) => {
  return (
    <div className={cn("relative", { "w-full h-full": fill })}>
      <Image
        src={src}
        alt={alt}
        className={cn("object-contain object-center", className)}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
};

export default CustomImage;
