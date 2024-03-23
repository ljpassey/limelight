import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50  ">
      <Container>
        <div className="flex w-full items-center justify-between py-2">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className=" text-sm" aria-label="quick links">
            <div className="  ">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex justify-center items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6  text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Limelight Prep. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
