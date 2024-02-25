// STYLES
import '@/styles/contact-page.css';

interface IContactPage {
  children: React.ReactNode;
}

export default function ContactPage({children}: IContactPage) {
  return (
    <section className="min-h-[90dvh] w-full flex justify-center items-stretch">
      <div className="bg-black flex-1 backdrop-banner">
        {/* Image to go here */}
      </div>
      <div className="bg-red flex-1 grid place-content-center z-10">
          {children}
      </div>
    </section>
  );
}