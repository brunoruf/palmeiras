import Link from 'next/link'
import React from 'react'

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
    <article className='bg-secondary-500 rounded-md min-w-[300px] w-[300px] h-[170px] shadow-lg bg-[url("https://www.verdazzo.com.br/wp-content/uploads/2022/05/20220523_treino.jpg")] bg-no-repeat bg-cover'>
        <div className='bg-gradient-to-t from-primary-800 h-full rounded-md p-4 items-end flex'>
            <Link href="#" className='text-white'>
                <h4 className='font-bold leading-5 mb-1'>{title}</h4>
                <div className='flex gap-2 text-sm'>
                    <div>
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