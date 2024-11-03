// COMPONENTS
import { SignInForm } from "@/components/forms/signin-form";
import { redirect } from "next/navigation";
// DATA
import { validateUserSS } from "@/data/auth";

export default async function SignInPage() {
  const isUserValid = await validateUserSS();

  if (isUserValid) redirect("/dashboard");

  return (
    <div className="min-h-[100dvh] grid place-content-center">
      <section className="flex flex-col justify-center items-center gap-5">
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </div>
  );
}