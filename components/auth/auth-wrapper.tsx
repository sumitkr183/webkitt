import React from "react";

import { IAuthWrapper } from "@/types/auth.type";
import Image from "next/image";
import Link from "next/link";

const AuthWrapper = ({
  children,
  type,
  title,
  description,
  image,
}: IAuthWrapper) => {
  return (
    <div className={`${type}-panel`}>
      <Image
        src={image}
        alt={title}
        fill
        className="relative svg-bg"
        priority={true}
      />

      <div className={`${type}-sidebar`}>
        <div className={`${type}-sidebar-body`}>
          <Link href="/" className="sidebar-logo mg-b-40">
            <span>WebKitt</span>
          </Link>
          <h4 className={`${type}-title`}>{title}</h4>
          <h5 className={`${type}-subtitle`}>{description}</h5>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
