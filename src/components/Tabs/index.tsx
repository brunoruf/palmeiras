import React from 'react'

const Tabs = () => {
  return (
    <ul className='flex gap-4 border-b-sm border-b-neutral-100 mb-4 text-sm cursor-pointer [&>li]:p-2'>
      <li className='border-b-[2px] border-primary-500 font-medium'>Tudo</li>
      <li>Futebol</li>
      <li>Outros Esportes</li>
      <li>Especiais</li>
    </ul>
  )
}

export default Tabs