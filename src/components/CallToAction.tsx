import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/wave.svg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden  py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Unsure about next steps?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Schedule a free consultation call with one of our job preparation experts to see how Limelight Prep can help you land your dream job. We guarantee that we can get you prepared and placed at a role you will love!
          </p>
          <Button href="/register" color="white" className="mt-10">
            Schedule a Free Consultation Call
          </Button>
        </div>
      </Container>
    </section>
  )
}
