import Link from "next/link";
import React, { Suspense } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { TableLoader } from "@/components/ui/skeleton";
import DeletedUsers from "@/components/user/deleted-users";

const UsersRestore = () => {
  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h5>Restore Users</h5>
        <div>
          <Link
            href="/users/create"
            className="btn btn-brand-01 btn-sm rounded-40"
          >
            <AiOutlinePlusCircle className="mr-1" />
            ADD USER
          </Link>
        </div>
      </div>
      <div className="card card-body">
        <Suspense fallback={<TableLoader />}>
          <DeletedUsers />
        </Suspense>
      </div>
    </>
  );
};

export default UsersRestore;
