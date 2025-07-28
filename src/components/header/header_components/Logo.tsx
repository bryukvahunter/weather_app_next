import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/weather_logo.svg"
        alt="weather_logo"
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
