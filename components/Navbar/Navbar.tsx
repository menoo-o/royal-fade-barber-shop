"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import Button from "../Button/Btn";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-contain">
        {/* Logo */}
        <Link href="/" className="navbar__logo">
            <Image
            src="/images/logo-final.png"
            alt="Royal Fade Barbers Logo"
            width={230}
            height={70}
            priority
            />
        </Link>

       {/* CTA */}
       <div className="nav-cta">
       
      <Button className="button">
        <span className="button__icon-wrapper">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon-svg"
            width="12"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            viewBox="0 0 14 15"
            fill="none"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon-svg button__icon-svg--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        Book Now
      </Button>

       </div>
        
      </div>
    </nav>
  );
}
