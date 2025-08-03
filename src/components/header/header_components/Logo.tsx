import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <div className="relative h-[50px] w-[50px]">
        <Image
          src="/weather_logo.svg"
          alt="weather_logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
