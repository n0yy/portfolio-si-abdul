import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  const sosmedList = [
    { id: 1, iconURL: "/assets/icons/ig.png", w: 37 },
    { id: 2, iconURL: "/assets/icons/wa.png", w: 32 },
    { id: 3, iconURL: "/assets/icons/fb.png", w: 32 },
    { id: 4, iconURL: "/assets/icons/twitter.png", w: 35 },
    { id: 5, iconURL: "/assets/icons/gmail.png", w: 32 },
  ];
  return (
    <ul className="flex space-x-5 justify-center items-center mt-3">
      {sosmedList.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>
              <Image
                src={item.iconURL}
                width={item.w}
                height={item.w}
                alt={item.id}
                quality={100}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
