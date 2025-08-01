import FavoriteList from "@/components/favorite_list/FavoriteList";
import Link from "next/link";

export default function Favorites() {
  return (
    <div className="relative w-full">
      <Link href={"/"} className="absolute">
        back home
      </Link>
      <FavoriteList />
    </div>
  );
}
