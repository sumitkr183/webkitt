"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Table from "@/components/ui/table";
import Avatar from "@/components/ui/avatar";
import Badge from "@/components/ui/badge";
import Pagination from "@/components/pagination";
import { useDeletedUsers } from "@/hooks/user";
import { convertToDateString, getUserSearchParams } from "@/lib/utility";
import { TableLoader } from "@/components/ui/skeleton";
import { RestoreAction } from "@/components/ui/svg-icons";
import { ReactSweetAlert } from "../sweet-alert";
import { deleteUser } from "@/lib/api-client";
import { FETCH_DELETED_USERS } from "@/lib/endpoints";
import { IUser } from "@/types/user.type";

const DeletedUsers = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient()
  const { page } = getUserSearchParams(Array.from(searchParams.entries()));

  const [popup, setPopup] = useState({ id: "", status: false });
  const { data, isError, error, isLoading } = useDeletedUsers(page);

  if (isLoading) return <TableLoader />;
  if (isError) throw new Error(error.message);

  const handleClick = (
    e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;

    if (target.dataset.actionType === "restore") {
      const id: string = target.dataset.actionId || "";
      setPopup({ id, status: true });
    }
  };

  const handleRestore = async () => {
    if (!popup.id) return;

    const response: { status: boolean } = await deleteUser({ id: popup.id });    
    if (response.status) {
      queryClient.invalidateQueries({ queryKey: [FETCH_DELETED_USERS] })
      toast.success("User restored successfully!");
    }
    setPopup({ id: "", status: false });
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
                <Badge variant="danger">Deleted</Badge>
              </td>
              <td>{convertToDateString(user.created)}</td>
              <td>
                <RestoreAction type="restore" id={user.id} />
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

      <ReactSweetAlert
        show={popup.status}
        warning
        showCancel
        confirmBtnText="Restore"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={handleRestore}
        onCancel={() => setPopup({ id: "", status: false })}
        focusCancelBtn
      >
        You want to restore this user
      </ReactSweetAlert>
    </>
  );
};

export default DeletedUsers;
