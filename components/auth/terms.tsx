import Link from "next/link";

const Terms = () => {
  return (
    <p className="mg-t-auto mg-b-0 tx-sm tx-color-03 text-center">
      By signing in, you agree to our{" "}
      <Link
        href="https://webkitt.in/policy/terms-condition.html"
        target="_blank"
      >
        Terms of Use
      </Link>{" "}
      and{" "}
      <Link
        href="https://webkitt.in/policy/privacy-policy.html"
        target="_blank"
      >
        Privacy Policy
      </Link>
    </p>
  );
};

export default Terms;
