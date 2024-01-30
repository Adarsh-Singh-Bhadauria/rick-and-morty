import React from 'react'

const Character = ({name, origin, image, species, location}) => {
  return (
    <div className="p-2 mx-3 my-5 border-2 border-[#60795f] rounded-md bg-[#a2cc9f] hover:scale-105 duration-300 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
      <div className='mx-2'>
        <img src={image} alt={name} className="rounded-md" />
        <hr className='mt-2 opacity-50'/> 
        <h3 className='text-xl font-semibold text-center my-2'>{name}</h3>
        <p className=''>{`Origin: ${origin.name}`}</p>
        <p className=''>{`Species: ${species}`}</p>
        <p className=''>{`Location: ${location}`}</p>
      </div>
    </div>
  )
}

export default Character