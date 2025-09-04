"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] border relative flex items-center justify-center p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/yOTnTtV.png" width={200} height={200} className="w-[190px] h-[40px]" alt="logo" />
    </div>
  );
}
