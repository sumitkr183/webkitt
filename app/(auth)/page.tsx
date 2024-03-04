import { Metadata } from 'next';
import AuthWrapper from '@/components/auth/auth-wrapper'
import SignInForm from '@/components/auth/signin-form'

const authProps = {
  type: "signin",
  title: "Welcome back!",
  description: 'Please signin to continue.',
  image: './images/signin.svg'
}

export const metadata: Metadata = {
  title: "Sign in | Webkitt"
};

const SignInPage = () => {
  return (
    <AuthWrapper {...authProps}>
      <SignInForm />
    </AuthWrapper>
  )
}

export default SignInPage