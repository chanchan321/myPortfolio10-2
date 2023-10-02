import React from 'react'
import { motion } from 'framer-motion'
import AnimateSkills from '../Animating/AnimateSkills'
import languages from '../AboutComponents/languageesTOOls'

export default function ProjDetails({value,close}) {
  
    const container = {
        hidden: { opacity: 0, scale: 0, },
        show: {
          scale:1,
          opacity: 1,
          transition: {
            duration:1
          }
        },
        exit: {
            scale:0,
            opacity: 0,
            transition: {
              duration:1
            }
          },
      }

      const draw = {
        hidden: {
                opacity:0,
                y:500
        },
        visible: {
            opacity: 1,
            y:0,
            transition:{
                duration:1.5
            }
        },exit:{
          opacity:0,
          y:500,
          transition:{
              duration:1.5
          }
        }
    };

  return (
    <>
                                {/*content*/}
                                            <motion.div className="m-auto flex flex-col items-center justify-between w-[101%] h-[110%] border-[1px] border-[black] dark:border-[#213555]  bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light outline-none focus:outline-none absolute left-[-6px] z-50"
                                              variants={container}
                                              initial="hidden"
                                              animate="show"
                                              exit="exit"> 
                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-2">
                                                        <h3  className=" w-full m-auto flex flex-col items-center">
                                                              <div className='text-[25px] break-words'>{value.title}</div>
                                                        </h3>
                                                    </div>
                                    {/*body*/} 
                                                <div className='h-full w-[90%] flex fex-row'> 

                                                    <div className='w-[55%] h-full flex justify-center items-center overflow-hidden'>
                                                          <motion.div className='text-justify h-fit max-h-[205px] overflow-auto px-2'
                                                          variants={draw}
                                                          initial="hidden"
                                                          animate="visible"
                                                          exit="exit">
                                                            <p>{value.description}</p>
                                                          </motion.div>
                                                    </div>

                                                    <div className='w-[45%] px-6 py-2 flex flex-col justify-center'>
                                                          <p>STACK</p>
                                                          
                                                          <AnimateSkills classN={'w-[240px] flex flex-row justify-around gap-10 flex-wrap self-center'} >
                                                            {value && (languages.filter((langsT)=> value.languages.includes(langsT.name))).map((img,index)=> {
                                                                  return(
                                                                      <div key={index} x={img.x} y={img.y} content={img.name} className='w-fit h-fit overflow-hidden rounded-md cursor-pointer refstack'>
                                                                            <img src={img.imgname} className='h-[30px] w-[30px] object-cover'/>
                                                                      </div>
                                                                  )})}
                                                          </AnimateSkills>
                                                    </div>

                                                </div>
                                      {/*footer*/}
                                                <div className="flex  self-start justify-between p-2 ">
                                                        <button
                                                            className=" uppercase px-4 py-2 border-[1px] border-[black] dark:border-[#213555] "
                                                            type="button"
                                                            onClick={()=>close(false)}
                                                        >
                                                            close
                                                        </button>
                                                </div>
                                          </motion.div>
                      
    </>
  )
}
