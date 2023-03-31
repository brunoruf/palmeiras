import React from 'react'

interface HomeSecondaryBannerProps {
    title: string,
    callToAction: string
}

const HomeSecondaryBanner = ({title, callToAction}:HomeSecondaryBannerProps) => {
  return (
    <article>
        <h3>{title}</h3>
        <a href='#'>{callToAction}</a>
    </article>
  )
}

export default HomeSecondaryBanner