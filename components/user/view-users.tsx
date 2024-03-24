"use client";

import React from "react";
import Table from "@/components/ui/table";
import Badge from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
import { IUser } from "@/types/user.type";
import { TableLoader } from "@/components/ui/skeleton";
import { useFetchUser } from "@/hooks/user";
import { convertToDateString, getUserSearchParams } from "@/lib/utility";
import { DeleteAction, EditIcon, ViewAction } from "@/components/ui/svg-icons";
import Pagination from "../pagination";
import Avatar from "../ui/avatar";

const ViewUsers = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { page } = getUserSearchParams(Array.from(searchParams.entries()));

  const { data, isError, error, isLoading } = useFetchUser(page);

  if (isLoading) return <TableLoader />;
  if (isError) throw new Error(error?.message);

  const handleClick = (
    e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    console.log(target.dataset);
  };

  const handlePagination = (page: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page as string);

    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody onClick={handleClick}>
          {data.user.map((user: IUser) => (
            <tr key={user.id}>
              <td>
                <Avatar image={user.image} rounded />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Badge variant={user.status ? "success" : "danger"}>
                  {user.status ? "Enable" : "Disable"}
                </Badge>
              </td>
              <td>{convertToDateString(user.created)}</td>
              <td>
                <ViewAction type="view" id={user.id} />
                <EditIcon type="edit" id={user.id} />
                <DeleteAction type="delete" id={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination
        className="pagination-space"
        currentPage={+page}
        totalCount={data?.length || 0}
        pageSize={10}
        onPageChange={(page) => handlePagination(page)}
      />
    </>
  );
};

export default ViewUsers;
