
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <Image className=' animate-spin' src='/images/poke-ball-color.svg' alt='loading ball' height={150} width={150} />
      <p>Loading...</p>
    </div>
  )
}

export default loading