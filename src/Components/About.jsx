import React,{ useRef , useEffect } from 'react'
import me from '../picture/resume.jpg'
import LanguageAndtools from './AboutComponents/LanguageAndtools'
import './CSS/about.css'
import languages from './AboutComponents/languageesTOOls'
import { Tooltip } from '@material-tailwind/react'
import Animating from './Animating/Animating'
import AnimateSkills from './Animating/AnimateSkills'
import BGsvg from './svgs/svgbg'
import useStore from '../store/store'

 const About = () => {
  const theme = useStore(state => state.theme)

  return (
  <div name='about' className='w-full h-fit min-h-[100vh] bg-[#176b8785] dark:bg-[#176b87] dark:text-light font-[poppins]'>

      <div  className='w-full h-fit min-h-[100vh] flex flex-col items-center justify-center gap-y-6 py-10 relative overflow-hidden'>

                  <div className='absolute w-[100%] top-[-11%] xl:top-[-6%] z-0'>
                        <div className='min-h-[30vh] w-full svgbgAboutUP'>
                              <BGsvg name={'aboutUP'} color={theme === 'dark' ? '#001C30' : '#F6F4EB'}/>
                        </div>
                  </div>
                  
                  <div className='absolute w-[100%] bottom-[-13%] z-0'>
                        <div className='min-h-[30vh] w-full svgbgAboutDown'> 
                                    {/*h-[322px] exampleSvg */}
                              <BGsvg name={'aboutDown'} color={theme === 'dark' ? '#001C30' : '#F6F4EB'}/>
                        </div>
                  </div>
               
                  <Animating name={'fLeft'} classN={'w-fit min-h-[600px] sm:min-h-[350px] flex flex-col lg:flex-row items-center justify-center relative '}>
                              <div className='overflow-hidden order-1 lg:order-2'>
                                    <div className=''>
                                    <div className=' w-fit h-fit rounded-full mx-10  overflow-hidden  '>
                                          <img src={me} className='rounded-full h-[250px] p-2'/>
                                    </div>
                                    </div>
                              </div>
                              <div className='p-2 overflow-hidden flex flex-col gap-4  order-2 lg:order-1'>
                              <div className='text-[20px] lg:text-[35px] w-fit px-4 '>Who am I ?</div>
                              <div className='w-fit sm:w-[500px] text-justify sm:p-2'>Hello, I am a fresh graduate with the degree of Bachelor of Science in Information Technology As a web developer I have an interest in building interactive and user-friendly web applications. My goal is to get hired by a company where I will use my current skills and at the same time help me grow and develop my skills in web development and work with an amazing team in the IT industry .</div>
                              </div>
                  </Animating>
                
                 <div className='w-full flex flex-col justify-center items-center gap-10 py-10 overflow-hidden'>

                    <LanguageAndtools />
                    
                      <AnimateSkills classN='mx-auto flex flex-row h-[fit] flex-wrap gap-x-12 gap-y-16 w-[300px] sm:w-[60%] p-4 sm:p-12 justify-center rounded-md relative'>
                          {languages.map((value,index)=> {
                            return(
                              <Tooltip key={index} x={value.x} y={value.y} content={value.name} placement="bottom" className='text-[#001C30] dark:text-[#F6F4EB] text-[10px]' animate={{mount: { scale: 1.5, y: 10,  x:1 }, unmount: { scale: 0, y: 0, x:0 }}}>     
                                      <div className='overflow-hidden rounded-md reflect cursor-pointer '>
                                            <img src={value.imgname} className='h-[50px] w-[50px] object-cover'/>
                                      </div>
                              </Tooltip> 
                            )
                          })}
                     </AnimateSkills> 
                
                </div>
               
      </div>  
      
  </div>
  )
}

export default About