import { useState } from "react";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    console.log("AAA");

    setOpen(!open);
  };

  return (
    <>
      <nav
        className="hidden lg:flex items-center gap-7 aria-expanded:flex aria-expanded:flex-col aria-expanded:absolute aria-expanded:top-0 aria-expanded:left-0 aria-expanded:w-screen aria-expanded:h-screen aria-expanded:bg-black aria-expanded:items-start aria-expanded:px-12 aria-expanded:py-20 aria-expanded:gap-10"
        aria-expanded={open}
      >
        {LINKS.map((link) => (
          <a
            href={link.href}
            className="hover:text-blue-600"
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <svg
        width="24"
        height="24"
        fill="white"
        className="lg:hidden flex z-30"
        onClick={toggle}
      >
        {open ? (
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        ) : (
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        )}
      </svg>
    </>
  );
}
