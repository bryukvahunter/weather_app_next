"use client";
import { formatCapitalLetter } from "@/utils/helpers";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useEffect, useState } from "react";

const min = 60000;

export default function NowDate() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, min);

    return () => clearInterval(interval);
  }, []);

  const date = formatCapitalLetter(format(now, "EEEE, d MMMM", { locale: ru }));
  const time = format(new Date(), "k:mm");

  return (
    <div className="flex items-end gap-2 text-xl tracking-wide text-white/80">
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
}
