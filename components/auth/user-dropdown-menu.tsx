import { MouseEventHandler, useState } from "react";
import Link from "next/link";
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { RiLoader4Fill } from "react-icons/ri";
import Avatar from "../ui/avatar";
import { logoutUser } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DropDownMenu = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const handleSignOut: MouseEventHandler<HTMLParagraphElement> = async (e) => {
    e.stopPropagation();
    setLoader(true);

    await logoutUser();
    setLoader(false);
    router.refresh();
    toast.success("Logout Successfully!");
  };

  return (
    <>
      <div className="dropdown-menu-header">
        <div className="media align-items-center">
          <Avatar />
          <div className="media-body mg-l-10">
            <h6>Jon</h6>
            <span>jon@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="dropdown-menu-body">
        <Link href="/profile" className="dropdown-item">
          <AiOutlineUser /> View Profile
        </Link>
        <Link href="/profile/settings" className="dropdown-item">
          <AiOutlineSetting /> Privacy Settings
        </Link>
        <Link href="/profile/payment-history" className="dropdown-item">
          <CiCreditCard1 /> Payment History
        </Link>
        <p onClick={handleSignOut} className="dropdown-item m-0 cursor-pointer">
          {loader ? (
            <RiLoader4Fill className="loader-icon" />
          ) : (
            <AiOutlineLogout />
          )}{" "}
          Sign Out
        </p>
      </div>
    </>
  );
};

export default DropDownMenu;
