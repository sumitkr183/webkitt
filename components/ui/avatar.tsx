"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

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
      />
    </div>
  );
};

export default Avatar;
