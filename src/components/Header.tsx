'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Caio<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* </div>
      <div className="flex gap-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost">Resume</Button>
        <Button variant="ghost">Work</Button>
        <Button className="color-primary">Hire me</Button> */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={'/contato'}>
            <Button>Me contrate</Button>
          </Link>
        </div>

        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
}
