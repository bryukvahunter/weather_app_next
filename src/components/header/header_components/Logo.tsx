import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        src="/weather_logo.svg"
        alt="weather_logo"
        width={50}
        height={50}
        priority
      />
    </Link>
  );
}
