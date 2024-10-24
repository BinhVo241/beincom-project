import FooterAuthContent from "@/containers/Auth/FooterAuthContent";
import HeaderAuthContent from "@/containers/Auth/HeaderAuthContent";
import RegisterForm from "@/containers/Auth/RegisterForm";

export default function Register() {
  return (
    <div className="relative flex size-full shrink flex-col rounded-2xl bg-white shadow-card-auth h-fit xs:min-h-login-form-md xs:w-login-form max-w-login-form">
      <HeaderAuthContent
        title="Sign up for Beincom"
        des="The future of community engagement"
      />
      <RegisterForm />;
      <FooterAuthContent
        title={`Already have an account? `}
        linkName="Log in"
        path="/login"
      />
    </div>
  );
}
