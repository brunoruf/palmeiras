import React from 'react'

interface HomeMainBannerProps {
    title: string,
    description: string
}

const HomeMainBanner = ({title, description}:HomeMainBannerProps) => {
  return (
    <article>
        <h2>{title}</h2>
        <p>{description}</p>
    </article>
  )
}

export default HomeMainBanner