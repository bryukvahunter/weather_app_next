import { formatCapitalLetter } from "@/utils/helpers";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function NowDate() {
  const date = formatCapitalLetter(
    format(new Date(), "EEEE, d MMMM", { locale: ru }),
  );
  const time = format(new Date(), "k:mm");

  return (
    <div className="flex items-end gap-2 text-xl tracking-wide text-white/80">
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
}
