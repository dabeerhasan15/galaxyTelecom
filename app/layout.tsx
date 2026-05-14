import { Footer, Header } from "@/component";
import { ContactModal } from "@/component/contactModel/ContactModal";
import { ContactModalProvider } from "@/context/ContactModalContext";
import "@/sass/index.scss";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ContactModalProvider>
        <Header />
        <main className="layout-main">{children}</main>
        <ContactModal />
        <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
