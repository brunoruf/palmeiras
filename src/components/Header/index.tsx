import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'



const Header = () => {

  return (
    <>
    <header className='bg-secondary-500 h-14 left-0 top-0 w-full flex justify-between items-center z-2 relative border-b-sm border-primary-500'>
      <Image src="/images/palmeiras_logo.svg" alt='Escudo Palmeiras' width={0} height={0} className='mt-10 ml-4 z-10 w-[80px] h-[80px] md:w-[100px] md:h-[100px] md:mt-16 md:ml-8'/>
      <div className='flex items-center'>
        <Button text='Seja Avanti' variant='primary-md'/>
        <RxHamburgerMenu style={{color:"white", fontSize: "1.8em", margin: "0 1rem"}}/>
      </div>
    </header>
    </>
  )
}

export default Header