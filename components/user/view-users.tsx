import React from "react";
import Table from "@/components/ui/table";

const ViewUsers = () => {
  return (
    <>
      <Table>
        <Table.Head>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Action</th>
          </tr>
        </Table.Head>
        <Table.Body>
          <tr></tr>
        </Table.Body>
      </Table>
    </>
  );
};

export default ViewUsers;
