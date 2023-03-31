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
    <article>
        <Link href="#">
            <h4>{title}</h4>
            <div>
                <div>
                    <span>{category}</span>
                </div>
                <span>.</span>
                <span>{date.toString()}</span>
            </div>
        </Link>
    </article>
  )
}

export default CardNews