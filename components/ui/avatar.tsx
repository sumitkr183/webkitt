"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { shimmer, toBase64 } from "@/lib/utility";

interface IAvatar {
  size?: "sm" | "xl";
  rounded?: boolean;
  fallbackUrl?: string;
  image: string
}

const Avatar = ({
  size = "sm",
  rounded,
  fallbackUrl = "/images/profile-user.png",
  image
}: IAvatar) => {
  const [profile, setProfile] = useState(image);

  return (
    <div
      className={clsx("avatar", {
        "avatar-sm": size === "sm",
        "avatar-xxl": size === "xl",
      })}
    >
      <Image
        src={profile || fallbackUrl}
        width={50}
        height={50}
        className={clsx(rounded && "rounded-circle")}
        onError={() => setProfile(fallbackUrl)}
        alt="avatar"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(50, 50))}`}
      />
    </div>
  );
};

export default Avatar;
