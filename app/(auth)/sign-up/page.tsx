import { Metadata } from "next";
import AuthWrapper from "@/components/auth/auth-wrapper";
import SignUpForm from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Sign up | Webkitt"
};

const authProps = {
  type: "signup",
  title: "Create an account!",
  description: "It's free and only takes a minute.",
  image: "./images/signin.svg",
};

const SignUpPage = () => {
  return (
    <AuthWrapper {...authProps}>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUpPage;
