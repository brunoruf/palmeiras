import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'

const CardMatch = () => {
  return (
    <article className='border-sm rounded-md border-neutral-100 min-w-[300px] w-[300px] shadow-lg'>
        <header className='bg-white border-b-sm border-neutral-100 w-full border-b rounded-t-md'>
            <div className='flex px-4 text-sm uppercase justify-between items-center h-10'>
                <p className='font-semibold'>Domingo 14/03 - 16h</p>
                <p>Libertadores</p>
            </div>
        </header>
        <div className='px-4 pt-4 pb-2 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <span><Image src='/images/palmeiras_logo.svg' alt='Palmeiras' width={40} height={0} /></span>
                <span className='font-bold'>Palmeiras</span>
            </div>
            <div className='flex items-center gap-2'>
                <span><Image src='/images/flamengo_logo.svg' alt='Universidad de Chile' width={40} height={0} /></span>
                <span className='font-bold'>Flamengo</span>
            </div>
        </div>
        <footer className='p-4 items-center flex gap-4'>
            <Button text="Ingressos" />
            <Link href="#" className='text-sm'>Mais Informações</Link>
        </footer>
    </article>
  )
}

export default CardMatch