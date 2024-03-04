import { Metadata } from 'next';

import AuthWrapper from '@/components/auth/auth-wrapper'
import VerifyEmail from '@/components/auth/verify-form'

export const metadata: Metadata = {
  title: "Verify Email | Webkitt"
};

const authProps = {
  type: "signin",
  title: "Verify email",
  description: 'Please enter OTP to verify',
  image: './images/signin.svg'
}

const VerifyEmailPage = () => {

  return (
    <AuthWrapper {...authProps}>
      <VerifyEmail />
    </AuthWrapper>
  )
}

export default VerifyEmailPage