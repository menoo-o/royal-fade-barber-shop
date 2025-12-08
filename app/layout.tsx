import type { Metadata } from "next";

// import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import PillNav from "@/components/Pill/PillNav";
import logo from "@/public/logo.png";


export const metadata: Metadata = {
  title: "Royal Fade Barbers",
  description: "The best barber shop in Leicester.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* <Marquee /> */}
        {/* <Navbar />  */}
        <PillNav
          // logo={logo}
          // logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '#services' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'FAQs', href: '#faqs' },
            { label: 'Contact Us', href: '#contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
        {children}
      </body>
    </html>
  );
}
