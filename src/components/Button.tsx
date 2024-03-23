import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'transition group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'transition group inline-flex ring-2 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-lime-500  text-white hover:bg-lime-600 hover:text-slate-50 active:bg-slate-800 active:text-slate-100 focus-visible:outline-slate-900',
    blue: 'bg-lime-600 text-white hover:text-white focus-visible:outline-lime-600',
    white:
      'bg-white text-slate-900 hover:bg-green-50 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-lime-500 text-slate-700 hover:text-slate-900 hover:ring-lime-400 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-lime-500 text-white hover:ring-lime-400 hover:bg-lime-600/50 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
