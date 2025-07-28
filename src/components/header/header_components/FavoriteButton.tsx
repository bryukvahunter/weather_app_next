import Image from "next/image";
import Link from "next/link";

export default function FavoriteButton() {
  return (
    <Link href={"/favorites"}>
      <Image src="/globe.svg" alt="favorites" width={20} height={20} />
    </Link>
  );
}
