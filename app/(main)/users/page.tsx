import React, { Suspense } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Table } from "@/components/ui/skeleton";
import ViewUsers from "@/components/user/view-users";

const UsersView = () => {
  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h5>View Users</h5>
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
        <Suspense fallback={<Table />}>
          <ViewUsers />
        </Suspense>
      </div>
    </>
  );
};

export default UsersView;
