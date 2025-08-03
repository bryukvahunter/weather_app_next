import BackHomeButton from "@/components/common/BackHomeButton";
import FavoriteList from "@/components/favorite_list/FavoriteList";

export default function Favorites() {
  return (
    <div className="relative w-full">
      <BackHomeButton path="/" />
      <FavoriteList />
    </div>
  );
}
