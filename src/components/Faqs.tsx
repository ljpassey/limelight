import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Non velit irure tempor dolor esse cillum occaecat magna incididunt quis cupidatat.',
      answer:
        'Proident dolor aliqua nostrud id eiusmod ea elit do laborum.',
    },
    {
      question: 'In amet anim voluptate adipisicing excepteur culpa est adipisicing.?',
      answer: 'Voluptate esse laboris ut laboris esse aliqua consectetur eu pariatur ea.',
    },
    {
      question: 'Duis pariatur voluptate veniam fugiat magna elit.?',
      answer:
        'Tempor adipisicing et minim Lorem exercitation sint irure magna commodo ullamco laboris pariatur voluptate dolore.',
    },
  ],
  [
    {
      question: 'Id esse do ullamco mollit minim.?',
      answer:
        'Quis cupidatat non adipisicing ut ullamco qui minim ipsum aliquip amet ut elit Lorem.',
    },
    {
      question:
        'Mollit anim ex qui eiusmod ut nisi ex adipisicing tempor magna et sint cillum aliquip.?',
      answer:
        'Occaecat quis sit quis anim anim cupidatat laboris dolor quis proident tempor ad ut..',
    },
    {
      question:
        'Fugiat labore voluptate dolor aute proident sunt veniam laboris proident ea laboris.?',
      answer:
        'Reprehenderit adipisicing irure in qui voluptate quis irure..',
    },
  ],
  [
    {
      question: 'Mollit ad laboris adipisicing anim exercitation non reprehenderit pariatur dolore qui veniam ullamco.?',
      answer:
        'Cillum laboris sint ad velit consequat dolore consectetur voluptate ipsum adipisicing exercitation.',
    },
    {
      question: 'Aliqua elit sunt do velit dolore.?',
      answer: 'Anim aliqua mollit est aute ut eiusmod adipisicing consequat in id culpa mollit..',
    },
    {
      question: 'Nulla reprehenderit officia id eu veniam tempor reprehenderit irure amet.?',
      answer:
        'In elit qui ad dolor amet ut pariatur do duis.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto text-center flex flex-col w-100% justify-center items-center max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Sit duis cillum sunt sunt enim aliqua ad cupidatat magna voluptate deserunt.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
