import Image from "next/image";
import Link from "next/link";

export default function OpenFavoriteButton() {
  return (
    <Link href={"/favorites"}>
      <Image src="/favorites.svg" alt="favorites" width={40} height={40} />
    </Link>
  );
}
