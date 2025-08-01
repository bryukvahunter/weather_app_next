import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center font-sans">
      <Image
        src="/not_found_city.webp"
        alt="pic"
        width={290}
        height={290}
        className="rounded-xl shadow-lg"
        priority
      />
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-[#3f3f46]">
        Такой страницы не существует
      </h1>
      <p className="mt-4 max-w-md text-lg font-light text-[#495b7e]">
        Вы попали на несуществующую страницу. Возможно, была опечатка в адресе
        или неправильная раскладка клавиатуры.
      </p>

      <Link
        href={"/"}
        type="button"
        className="mt-2 flex h-10 items-center rounded-xl bg-pink-200 px-6 font-medium text-black shadow-md transition hover:bg-pink-300"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
