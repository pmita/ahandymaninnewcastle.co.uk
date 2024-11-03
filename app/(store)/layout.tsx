// COMPONENTS
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};