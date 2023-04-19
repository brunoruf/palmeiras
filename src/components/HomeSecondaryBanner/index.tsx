import React from 'react'

interface HomeSecondaryBannerProps {
    title: string,
    callToAction: string,
}

const HomeSecondaryBanner = ({title, callToAction}:HomeSecondaryBannerProps) => {
  return (
    <article className='bg-secondary-500 text-white h-full w-full flex bg-[url("https://jogada10.com.br/wp-content/uploads/2023/01/Screenshot_1-24.jpg")] bg-no-repeat bg-cover cursor-pointer hover:brightness-150'>
      <div className='w-full h-full text-center p-4 bg-gradient-to-t from-primary-800 to-primary-500/20'>
        <div className='flex flex-col gap-1 mt-16 font-semibold leading-5 lg:mt-32 lg:text-lg'>
          <h3>{title}</h3>
          <a href='#' className='text-sm text-primary-300'>{callToAction}</a>
        </div>
      </div>
    </article>
  )
}

export default HomeSecondaryBanner