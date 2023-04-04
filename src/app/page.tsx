import CardMatch from "@/components/CardMatch"
import CardNews from "@/components/CardNews"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeMainBanner from "@/components/HomeMainBanner"
import HomeSecondaryBanner from "@/components/HomeSecondaryBanner"
import Tabs from "@/components/Tabs"

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <section className="top-0 left-0 flex flex-col gap-px bg-primary-500">
          <HomeMainBanner 
            title="Novo recorde quebrado" 
            description="Abel Ferreira se torna o técnico com mais vitórias comandando o Palmeiras" 
          />
          <div className="flex gap-px">
            <HomeSecondaryBanner 
              title="Mais Avantis, mais conquistas" 
              callToAction="Seja um também" 
            />
            <HomeSecondaryBanner 
              title="Palmeiras Pay, sua nova conta!" 
              callToAction="Conheça" 
            />
          </div>
          <div className="bg-secondary-500 h-16 flex justify-center items-center">
            <h5>Patrocinadores</h5>
          </div>
        </section>
        <div className="px-4 mt-8">
          <section>
            <h3 className="text-xl font-bold">Fique por dentro</h3>
            <Tabs />
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
            </div>
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-bold mb-3">Próximas Partidas</h3>
            <div className="flex flex-nowrap gap-4">
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