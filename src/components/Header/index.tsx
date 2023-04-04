import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const Header = () => {
  return (
    <>
    <header className='bg-secondary-500 h-14 left-0 top-0 w-full flex justify-between items-center z-2 relative border-b-sm border-primary-500'>
      <Image src="/images/palmeiras_logo.svg" alt='Escudo Palmeiras' width={60} height={60} className='mt-4 ml-4'/>
        <Button text='Seja Avanti' />
    </header>
    </>
  )
}

export default Header