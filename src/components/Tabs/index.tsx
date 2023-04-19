import React from 'react'

const Tabs = () => {
  return (
    <ul className='flex border-b-sm border-b-neutral-100 mb-4 text-sm font-medium cursor-pointer leading-tight [&>li]:p-2'>
      <li className='tab-active'>Tudo</li>
      <li>Futebol</li>
      <li>Outros Esportes</li>
      <li>Especiais</li>
    </ul>
  )
}

export default Tabs