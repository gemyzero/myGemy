import React from 'react'
import yanffa from '../../public/img/yanffa.mp4'

export default function Experience() {
  return (
    <div id='experience' className='container p-3  '>  
            
            <h1 className='my-5'>Experience</h1>

           <video controls width='100%' src={yanffa}>

           </video>

    </div>
  )
}
