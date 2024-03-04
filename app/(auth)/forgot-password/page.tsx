import { Metadata } from "next";
import AuthWrapper from "@/components/auth/auth-wrapper";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password | Webkitt"
};

const authProps = {
  type: "signin",
  title: "Forgot Password!",
  description: "Please enter email to continue.",
  image: "./images/signin.svg",
};

const ForgotPasswordPage = () => {
  return (
    <AuthWrapper {...authProps}>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
};

export default ForgotPasswordPage;
