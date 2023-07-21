import Image from "next/image";

interface ItemRootProps {
  srcImage: string;
  title: string;
  description: string;
}

export function ItemRoot({srcImage, title, description}: ItemRootProps) {
  return (
    <li
              className="
                flex gap-2 items-center
                w-72
              "
            >
              <Image
                src={srcImage}
                alt={title}
                width={72}
                height={72}
              />
              <div
                
              >
                <h3
                  className="font-black text-xl uppercase"
                >
                  {title}
                </h3>
                <span
                  className="font-light text-sm "
                >
                  {description}
                </span>
              </div>
            </li>
  )
}