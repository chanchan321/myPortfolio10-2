import React from 'react'

export default function LanguageAndtools() {

  const string = 'Programming languages / Tools'
  const aarray = string.split('')

  return (
    <>
      <div className='text-[10px] lg:text-[15px]'>
        <div className='wavy'>
          {aarray.map((value,index)=>{
            return(
                <span key={index} style={{'--i':index+1}}>{value}</span>
            )
          })}
          </div>
      </div>
    </>
  )
}
