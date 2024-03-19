"use client";

import React from "react";
import Table from "@/components/ui/table";
import Badge from "@/components/ui/badge";
import { BsEye, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IUser } from "@/types/user.type";
import { TableLoader } from "@/components/ui/skeleton";
import { useFetchUser } from "@/hooks/user";
import { convertToDateString } from "@/lib/utility";

const ViewUsers = () => {
  const { data, isError, error, isLoading } = useFetchUser();

  if (isLoading) return <TableLoader />;
  if (isError) throw new Error(error?.message);

  const handleClick = (
    e: React.MouseEvent<HTMLTableSectionElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    console.log(target.dataset);
    console.log(target.nodeName);
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
              <td></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Badge variant={user.status ? "success" : "danger"}>
                  {user.status ? "Enable" : "Disable"}
                </Badge>
              </td>
              <td>{convertToDateString(user.created)}</td>
              <td>
                <BsEye
                  onClick={() => alert("view")}
                  data-action-type="view"
                  size={20}
                  className="mr-2"
                />
                {/* <FiEdit onClick={()=>alert('edit')} data-action-type="edit" fill="#ff5050" size={20} className="mr-2" /> */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-action-type="edit"
                  className="mr-2"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path data-action-type="edit" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path data-action-type="edit" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <BsTrash data-action-type="delete" size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ViewUsers;
