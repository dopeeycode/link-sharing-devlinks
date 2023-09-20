import { twMerge } from 'tailwind-merge'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  disabled?: boolean
  asChild?: boolean
  alt?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  asChild,
  alt,
  ...props
}) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      disabled={disabled}
      className={twMerge(
        `
          text-gray-400 font-bold px-7 py-3 bg-transparent rounded-md flex 
          items-center justify-center gap-2 transition-all duration-200
        `,
        alt &&
          `border py-3 hover:bg-indigo-500 hover:bg-opacity-40 
        text-indigo-600 border-indigo-600 transition-colors duration-300`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
