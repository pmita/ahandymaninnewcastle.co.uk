// COMPONENTS
import { SignInForm } from "@/components/forms/signin-form";

export default function SignInPage() {
  return (
    <div className="min-h-[100dvh] grid place-content-center">
      <section className="flex flex-col justify-center items-center gap-5">
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </div>
  );
}