import SweetAlert from "react-bootstrap-sweetalert";
import { SweetAlertProps } from "react-bootstrap-sweetalert/dist/types";

export const ReactSweetAlert = (
  props: SweetAlertProps & { children: React.ReactNode }
) => <SweetAlert {...props}>{props.children}</SweetAlert>;
