import Link from "next/link";

interface Props {
  path: string;
}

export default function BackHomeButton({ path }: Props) {
  return (
    <Link
      href={path}
      className="absolute top-4 left-4 z-50 rounded-md bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-white/30 md:top-6 md:left-30"
    >
      ← Назад
    </Link>
  );
}
