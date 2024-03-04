import { Metadata } from "next";
import Back from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Users | Webkitt",
};

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Back />
      {children}
    </>
  );
};

export default UsersLayout;
