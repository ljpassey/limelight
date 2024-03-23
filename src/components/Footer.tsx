import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className=" ">
      <Container>
        <div className="flex flex-row  items-center justify-between py-2 ">
          <Logo className="px-10" />
          <nav className="  " aria-label="quick links">
            <div className="text-sm px-1">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex  items-center justify-center border-t border-slate-400/10 py-2  ">
          <p className="  text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Limelight Prep. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
