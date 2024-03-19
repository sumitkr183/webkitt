import Image from "next/image";
import Button from "./button";
import { IError } from "@/types";

const Fallback = ({ error, reset }: IError) => {
  console.error(error.message);
  return (
    <div className="card card-body">
      <div className="wd-100p ht-350 relative">
        <Image src="/images/500.svg" alt="500" fill />
      </div>

      <div className="d-flex justify-content-center">
        <Button onClick={reset} className="flex-grow-0">Troubleshooting</Button>
      </div>
    </div>
  );
};

export default Fallback;
