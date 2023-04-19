import React from 'react'

interface HomeMainBannerProps {
    title: string,
    description: string
}

const HomeMainBanner = ({title, description}:HomeMainBannerProps) => {
  return (
      <article className='w-full h-full bg-primary-500 text-white flex flex-col bg-[url("https://f.i.uol.com.br/fotografia/2022/03/26/1648314268623f479c532c5_1648314268_3x2_rt.jpg")] bg-no-repeat bg-cover cursor-pointer hover:brightness-125'>
        <div className='bg-gradient-to-t from-primary-800 p-4 h-80 lg:h-full flex flex-col justify-between md:p-8'>
          <div className='w-56 mt-12 md:w-80 md:mt-24 lg:w-96 lg:mt-32'>
            <h2 className='text-hg font-bold font-telegraf md:text-[42px] lg:text-[60px] lg:leading-[46px]'>{title}</h2>
            <p className='mt-4 text-lg lg:text-[22px] lg:leading-6 lg:mt-8'>{description}</p>
          </div>
          <div className='flex gap-2 mt-10 justify-center md:mb-14 lg:pt-10'>
            <span className='block h-0.5 bg-primary-300 w-[32%]'></span>
            <span className='block h-0.5 bg-white w-[32%]'></span>
            <span className='block h-0.5 bg-white w-[32%]'></span>
          </div>
        </div>
      </article>
  )
}

export default HomeMainBanner