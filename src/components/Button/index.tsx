import { twMerge } from 'tailwind-merge'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  disabled?: boolean
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  asChild,
  ...props
}) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      disabled={disabled}
      className={twMerge(
        `
          text-gray-400 font-bold px-7 py-3 bg-transparent rounded-md flex 
          items-center justify-center gap-2
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
