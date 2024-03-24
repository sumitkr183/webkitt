interface IconsProps {
  type: string;
  id: number | string;
}

export const EditIcon = ({ type, id }: IconsProps) => {
  const actionType = type.toLowerCase();
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-action-type={actionType}
      data-action-id={id}
      data-tooltip-id="edit"
      data-tooltip-content="Edit"
      className="mr-2"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      ></path>
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      ></path>
    </svg>
  );
};

export const ViewAction = ({ type, id }: IconsProps) => {
  const actionType = type.toLowerCase();
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      data-action-type={actionType}
      data-action-id={id}
      data-tooltip-id="view"
      data-tooltip-content="View"
      className="mr-2"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
      ></path>
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
      ></path>
    </svg>
  );
};

export const DeleteAction = ({ type, id }: IconsProps) => {
  const actionType = type.toLowerCase();
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      data-action-type={actionType}
      data-action-id={id}
      data-tooltip-id={"delete"}
      data-tooltip-content={"Delete"}
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
      ></path>
      <path
        data-action-type={actionType}
        data-action-id={id}
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
      ></path>
    </svg>
  );
};
