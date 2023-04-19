import Link from 'next/link'
import React from 'react'
import { BiNews } from 'react-icons/bi'

interface CardNewsProps {
    title: string,
    category: string,
    icon: string,
    date: string,
    image?: string,
    link: string
}

const CardNews = ({title, category, icon, date, image, link}:CardNewsProps) => {
  return (
    <article className='bg-secondary-500 rounded-md min-w-[300px] w-[300px] h-[170px] shadow-lg bg-[url("https://www.verdazzo.com.br/wp-content/uploads/2022/05/20220523_treino.jpg")] bg-no-repeat bg-cover hover:brightness-125 cursor-pointer'>
        <div className='bg-gradient-to-t from-primary-800 h-full rounded-md p-4 items-end flex'>
            <Link href={link} className='text-white'>
                <h4 className='font-bold leading-5 mb-1'>{title}</h4>
                <div className='flex gap-2 text-sm'>
                    <div className='flex items-center gap-1'>
                        <BiNews className='text-primary-300' />
                        <span className='uppercase'>{category}</span>
                    </div>
                    <span>-</span>
                    <span>{date.toString()}</span>
                </div>
            </Link>
        </div>
    </article>
  )
}

export default CardNews