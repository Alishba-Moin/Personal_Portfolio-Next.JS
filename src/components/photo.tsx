import Image from "next/image";
import React from 'react';

export default function Photo() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">

      {/* Image Container */}
      <div className="relative z-10 w-[298px] h-[298px] xl:w-[350px] xl:h-[350px] overflow-hidden rounded-full border-4 border-accent shadow-lg">
        <Image
          src="/image/profile-img.png"
          priority
          quality={100}
          fill
          alt="profile picture"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
