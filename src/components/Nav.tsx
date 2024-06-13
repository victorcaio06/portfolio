'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Serviços',
    path: '/services',
  },
  {
    name: 'Resumo',
    path: '/resume',
  },
  {
    name: 'Trabalho',
    path: '/work',
  },
  {
    name: 'Contato',
    path: '/contact',
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && 'text-accent border-b-2 border-accent'
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
