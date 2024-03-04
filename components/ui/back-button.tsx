"use client"

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  const router = useRouter();
  return (
    <p>
      <span className="cursor-pointer" onClick={() => router.back()}>
        <IoIosArrowBack /> Back
      </span>
    </p>
  );
};

export default Back;
