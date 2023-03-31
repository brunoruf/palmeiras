import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const CardMatch = () => {
  return (
    <article>
        <header>
            <p>Domingo 14/03 - 16h</p>
            <p>Libertadores</p>
        </header>
        <div>
            <div>
                <span>Icone</span>
                <span>Palmeiras</span>
            </div>
            <div>
                <span>Icone</span>
                <span>Universidad Catolica de Chile</span>
            </div>
        </div>
        <footer>
            <Button text="Ingressos" />
            <Link href="#">Mais Informações</Link>
        </footer>
    </article>
  )
}

export default CardMatch