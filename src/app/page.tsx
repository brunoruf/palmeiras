import CardMatch from "@/components/CardMatch"
import CardNews from "@/components/CardNews"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeMainBanner from "@/components/HomeMainBanner"
import HomeSecondaryBanner from "@/components/HomeSecondaryBanner"
import Tabs from "@/components/Tabs"
import Image from "next/image"
import { BiArrowToRight, BiRightArrowCircle } from "react-icons/bi"
import { RxArrowRight } from "react-icons/rx"

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="w-full top-0 left-0 flex flex-col gap-px bg-primary-500 md:flex-row lg:h-[480px]">
          <HomeMainBanner 
            title="Novo recorde quebrado" 
            description="Abel Ferreira se torna o técnico com mais vitórias comandando o Palmeiras" 
          />
          <div className="w-full flex gap-px md:flex-col md:w-[30%]">
            <HomeSecondaryBanner 
              title="Mais Avantis, mais conquistas" 
              callToAction="Seja um também" 
            />
            <HomeSecondaryBanner 
              title="Palmeiras Pay, sua nova conta!" 
              callToAction="Conheça" 
            />            
          </div>          
          <div className="w-full gap-px md:flex-col md:w-[30%] hidden xl:flex">
            <HomeSecondaryBanner 
              title="Mais Avantis, mais conquistas" 
              callToAction="Seja um também" 
            />
            <HomeSecondaryBanner 
              title="Palmeiras Pay, sua nova conta!" 
              callToAction="Conheça" 
            />            
          </div>
        </section>
          <div className="bg-secondary-500 h-16 flex justify-center items-center gap-8 border-t-[1px] border-primary-500">
            <Image src='/images/crefisa_logo.svg' alt='Crefisa' width={80} height={40} className='fill-white' />
            <Image src='/images/puma_logo.svg' alt='Crefisa' width={60} height={40} className='fill-white' />
            <Image src='/images/fam_logo.svg' alt='Crefisa' width={80} height={40} className='fill-white' />
          </div>
        <div className="px-4 mt-8 lg:px-8">
          <section className="">
            <h3 className="text-xl font-bold">Fique por dentro</h3>
            <Tabs />
            <div className="flex items-center">
              <div className="absolute flex items-center justify-center right-2 w-8 h-8 rounded-md bg-white invisible lg:visible">
                 <RxArrowRight />
              </div>
              <div className="flex flex-nowrap gap-4">
                <CardNews
                  title="A reapresentação após classificação no Paulista"
                  category="Noticia"
                  icon="Icone"
                  date="Hoje"
                  link="#"
                />
                <CardNews
                  title="A reapresentação após classificação no Paulista"
                  category="Noticia"
                  icon="Icone"
                  date="Hoje"
                  link="#"
                />
                <CardNews
                  title="A reapresentação após classificação no Paulista"
                  category="Noticia"
                  icon="Icone"
                  date="Hoje"
                  link="#"
                />
                <CardNews
                  title="A reapresentação após classificação no Paulista"
                  category="Noticia"
                  icon="Icone"
                  date="Hoje"
                  link="#"
                />
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-bold">Próximas Partidas</h3>
            <Tabs />
            <div className="flex flex-nowrap gap-4">
              <CardMatch />
              <CardMatch />
              <CardMatch />
              <CardMatch />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}