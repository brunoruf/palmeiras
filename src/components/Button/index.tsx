import React from 'react'

interface ButtonProps {
    text: string;
  }

const primary = 'bg-primary-500'
const m = 'text-white p-1'

const Button = ({text}:ButtonProps) => {
  return (
    <button className={`bg-primary-500 text-white px-4 rounded-sm h-8`}>{text}</button>
  )
}

export default Button