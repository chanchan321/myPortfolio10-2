import React from 'react'
import './CSS/home.css'
import me from '../picture/portfolio.jpg'
import useStore from '../store/store'
import Animating from './Animating/Animating'
import BGsvg from './svgs/svgbg'
import Homebg from './svgs/homebg'
import { FaReact } from "react-icons/fa";

const Homepage = () => {
  const theme = useStore(state => state.theme)

  
  return (
    <>
      <div name='home' className='w-full h-fit min-h-[100vh] bg-[#F6F4EB] dark:bg-[#001C30] font-[poppins]  z-50'>
               
          <div className='w-full h-fit min-h-[100vh] flex flex-col lg:flex-row relative overflow-hidden'>
            
                  <div className='wrapper'>
                          <div className="box text-[#176b8785] dark:text-[#176b90]" >
                            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((value,index)=>{
                              return(
                                <div key={index} >  
                                  <FaReact size={50}/>
                                </div>
                              )
                            })}
                          </div>
                  </div>
                  
                    {/* <div className=" hidden lg:flex absolute top-0 right-0 z-30 ">
                              <Homebg color={theme === 'dark' ? '#176b90' : '#176b8785'}/>
                    </div>
                    <div className=" flex lg:hidden absolute bottom-[-50px] z-30 rotate-180">
                              <Homebg color={theme === 'dark' ? '#176b90' : '#176b8785'}/>
                    </div> */}

                <div className='w-full h-fit min-h-[100vh] absolute z-30 top-0 left-0 flex justify-center items-center '>

                         <Animating name={'fRight'} classN={'flex flex-col h-fit lg:flex-row items-center justify-center overflow-hidden'}>
                                        <div className='overflow-hidden '>
                                          <div className='animate-show-img2 lg:animate-show-img '>
                                            <div className=' w-fit h-fit rounded-full mx-10  overflow-hidden  imgInteraction '>
                                                      <img src={me} className='rounded-full h-[220px] lg:h-[400px] p-2'/>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <div className='w-[3px] h-[250px] hidden lg:flex lg:h-[420px] bg-dark dark:bg-light'></div>
                                        </div>

                                        <div className='mx-2  text-dark dark:text-light'>
                                              <div className='justify-around overflow-hidden inline-block'>
                                                <p className='textTyping text-[25px] lg:text-[40px] border-r-[2px] border-[#001C30] dark:border-[#F6F4EB] tracking-wider w-full whitespace-nowrap overflow-hidden'> Hi, Im Christian Babasa</p>
                                              </div>
                                              <div className='justify-around overflow-hidden'>
                                                <p className='text-[20px]  lg:text-[35px] '>Full-stack Web Developer</p>
                                              </div>
                                            
                                              <div className='bottonAnim m-2 w-fit bg-[#F6F4EB] dark:bg-[#001C30] text-dark border-[1px] dark:border-[#213555] dark:text-light'>
                                                <div className='btn w-[120px] lg:w-[155px] h-[40px] lg:h-[50px] text-[12px] lg:text-[17px]'>
                                                  <a href='Babasa-Christian-Resume.pdf' download={'Babasa-Christian-Resume.pdf'} className='font-bold ' style={{'--color':theme === 'dark' ? 'rgb(23, 107, 135, 0.1)':'rgb(23, 107, 135, 0.10)' }}><p>Download C.V</p></a>
                                                </div>
                                              </div>
                                        </div>
                        </Animating>
                        
                  </div>
                    
          </div>

      </div>
    </>
  )
}

export default Homepage