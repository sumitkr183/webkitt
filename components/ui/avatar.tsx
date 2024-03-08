"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuthUser } from "@/store/user";

const Avatar = () => {
  const { image } = useAuthUser();
  const [profile, setProfile] = useState("");

  useEffect(() => setProfile(image), [image]);

  return (
    <div className={`avatar avatar-sm`}>
      <Image
        src={profile || "/images/profile-user.png"}
        width={50}
        height={50}
        className="rounded-circle"
        onError={() => setProfile("/images/profile-user.png")}
        alt="user profile"
      />
    </div>
  );
};

export default Avatar;
