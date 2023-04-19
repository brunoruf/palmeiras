import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    variant: string,
  }

  const buttonVariants = {
    primaryMedium: 'btn-primary btn-md tracking-tight font-medium hover:bg-primary-300',
    secondaryMedium: 'btn-primary zaz',
  }


const Button = ({text, variant}:ButtonProps) => {
  return (
    <button className={
      variant === 'primary-md' ? buttonVariants.primaryMedium : '' ||
      variant === 'secondary-md' ? buttonVariants.secondaryMedium : ''
      }>{text}</button>
  )
}

export default Button