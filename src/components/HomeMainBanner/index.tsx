import React from 'react'

interface HomeMainBannerProps {
    title: string,
    description: string
}

const HomeMainBanner = ({title, description}:HomeMainBannerProps) => {
  return (
      <article className='w-full h-80 bg-primary-500 text-white flex flex-col bg-[url("https://f.i.uol.com.br/fotografia/2022/03/26/1648314268623f479c532c5_1648314268_3x2_rt.jpg")] bg-no-repeat bg-cover'>
        <div className='bg-gradient-to-t from-primary-800 p-4 h-80'>
          <div className='w-56 mt-12'>
            <h2 className='text-hg font-bold'>{title}</h2>
            <p className='mt-4'>{description}</p>
          </div>
          <div className='flex gap-2 mt-10 justify-center'>
            <span className='block h-0.5 bg-primary-500 w-[30%]'></span>
            <span className='block h-0.5 bg-white w-[30%]'></span>
            <span className='block h-0.5 bg-white w-[30%]'></span>
          </div>
        </div>
      </article>
  )
}

export default HomeMainBanner