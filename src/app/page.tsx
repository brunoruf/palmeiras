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
        <section>
          <HomeMainBanner title="Novo recorde quebrado" description="Abel Ferreira se torna o técnico com mais vitórias comandando o Palmeiras" />
          <HomeSecondaryBanner title="Mais Avantis, mais conquistas" callToAction="Seja um também" />
          <HomeSecondaryBanner title="Palmeiras Pay, seu novo banco" callToAction="Conheça" />
          <div>
            <h5>Patrocinadores</h5>
          </div>
        </section>
        <section>
          <h3>Fique por dentro</h3>
          <Tabs />
          <div>
          <CardNews
            title="A reapresentação após classificação no Paulista"
            category="Noticia"
            icon="Icone"
            date="Hoje"
            link="#"
           />
          </div>
        </section>
        <section>
          <h3>Próximas Partidas</h3>
          <CardMatch />
        </section>
      </main>
      <Footer />
    </>
  )
}