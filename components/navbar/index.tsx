import Link from 'next/link';
import { Logo } from '../logo';
import { HTMLAttributes } from 'react';
import { NAVBAR_HEIGHT } from '@/config/global-ui-dims';

const NavLink = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href}>
      <p className={`text-md font-semibold ${className}`}>{label}</p>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div
      className="fixed top-0 right-0 left-0"
      style={{
        height: NAVBAR_HEIGHT,
      }}
    >
      <div className="md:container mx-auto sm:px-0 px-4 h-full w-full flex items-center">
        <Logo />
        <div className="flex-1 flex gap-4 justify-end items-center">
          <NavLink href="/learn/cpp" label="Cpp" />
          <NavLink href="/learn/html" label="HTML" />
          <NavLink href="/learn/css" label="CSS" />
          <NavLink href="/learn/js" label="JavaScript" />
          <NavLink href="/learn/react-js" label="ReactJS" />
          <NavLink href="/learn/node-js" label="NodeJS" />
        </div>
      </div>
    </div>
  );
};
