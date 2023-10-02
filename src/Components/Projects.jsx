import React,{ useRef , useEffect, useState } from 'react'
import useStore from '../store/store';
import './CSS/Project.css'
import ProjDetails from './Modal/ProjDetails';
import { AnimatePresence } from 'framer-motion'
import Animating from './Animating/Animating';
import projectList from './ProjectComponents/ProjectList';

const Projects = () => {
      const theme = useStore(state => state.theme)

      const [details,setDetails] = useState(false)

      useEffect(()=>{
        if(details){
          return document.body.classList.add('hidescroll');
        }
        document.body.classList.remove('hidescroll');
      },[details])

  return (
    <>
      <div name='projects' className='w-full h-fit min-h-[100vh] bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light overflow-x-hidden font-[poppins] overflow-hidden'>
                
          <div  className='w-full h-fit min-h-[50vh] flex flex-col gap-10 items-center justify-center z-20 py-20  overflow-hidden'>

                      <div className='w-full lg:w-[60%] h-fit '>

                          <p className='text-[25px] text-center lg:text-start'>My Recent Works</p>

                      </div>
        
                  {projectList.map((value,index)=> {

                    return (

                      <Animating delayS={index} key={index} name={value.name} classN={'w-full lg:w-[60%] h-fit bg-transparent text-light dark:text-dark relative border-[1px] border-[black] dark:border-[#213555]'}>
                            
                              <AnimatePresence>

                                {(details.number === value.number) &&  <ProjDetails value={value} close={setDetails}/>}  

                              </AnimatePresence>
                              
                            <div className='flex flex-col items-center w-full h-[300px] card '> 
                            
                                <div className=' h-[12%] flex justify-center items-center bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light z-40 '>

                                  <p className='py-2 text-[18px]'>{value.title}</p>

                                </div>

                                <div className='flex flex-row w-full h-[88%] relative'>

                                      <img src={value.img} className='object-cover w-full'></img>

                                      <div onClick={()=> setDetails(value)} className=' bottonAnimC cursor-pointer mx-1 w-fit absolute bottom-[-18px] left-5 border-[1px] dark:border-[#213555] bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light'>
                                        
                                        <div className=' btn animate-show-text'>

                                          <p className='font-bold' style={{'--color':theme === 'dark' ? 'rgb(23, 107, 135, 0.25)':'rgb(23, 107, 135, 0.15)' }}>More Details</p>

                                        </div>

                                      </div>

                                      <a href='https://www.facebook.com/' target='_blank' className='bottonAnimC cursor-pointer mx-1 w-fit absolute bottom-[-18px] right-5 border-[1px] dark:border-[#213555] bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light'>
                                    
                                          <div className=' btn animate-show-text'>

                                            <p className='font-bold  ' style={{'--color':theme === 'dark' ? 'rgb(23, 107, 135, 0.25)':'rgb(23, 107, 135, 0.15)' }}>Live Demo</p>

                                          </div>

                                      </a>
                                
                                </div>

                            </div>
                      
                      </Animating>
                    )
                  })}
                  
          </div> 

      </div>

    {details && <div className="opacity-25 fixed inset-0 z-40 bg-[black] "></div>}
  </>
  )
}

export default Projects