// STYLES
import '@/styles/contact-page.css';

interface IContactPage {
  children: React.ReactNode;
}

export default function ContactPageLayout({children}: IContactPage) {
  return (
    <main className="min-h-[90vh] grid place-content-center z-10">
      {children}
    </main>
  );
}