import Link from 'next/link'
import { ReactNode, ComponentProps } from 'react'
import { tv, type VariantProps} from 'tailwind-variants'

const ButtonHomeVariants = tv({
  base: [ 
    'cursor-pointer',
    'px-6 py-1.5',
  ],
  variants: {
    position: {
      absolute: 'absolute top-4 left-6 z-10'
    }
  },
  defaultVariants: {
    position: 'absolute'
  }
})

interface IButtonHome extends ComponentProps<typeof Link>,
VariantProps<typeof ButtonHomeVariants> {
  children: ReactNode
}

export function ButtonHome({children, ...props}: IButtonHome) {
  return (
    <Link
      {...props}
      className={ButtonHomeVariants({ })}
    >
      {children}
    </Link>
  )
}