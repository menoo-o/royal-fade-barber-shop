"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-contain">
        {/* Logo */}
        <Link href="/" className="navbar__logo">
            <Image
            src="/logo.png"
            alt="Royal Fade Barbers Logo"
            width={220}
            height={70}
            priority
            />
        </Link>

       {/* CTA */}
        <Link href="/#booking" className="navbar__cta">
            Book Now
        </Link>
      </div>
    </nav>
  );
}
