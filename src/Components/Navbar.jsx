import { React , useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useStore from '../store/store';
import './CSS/navbar.css'
import { Link } from 'react-scroll'
import { AiOutlineHome } from "react-icons/ai";
import { BsFillSunFill , BsFillMoonStarsFill , BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { MdPersonOutline } from "react-icons/md";





const Navbar = () => {
    const theme = useStore(state => state.theme)
    const changetheme = useStore(state => state.changeTheme)
    const [hide,setHide] = useState('flex')

    const navsideVariants ={
        hidden: { y: -100 , opacity:0 },
        visible: {
            y:hide ? 0 : -100,
            opacity:hide ? 1 : 0,
            transition: { 
                duration: 1
            }
          }
    }

    let lastScroll = window.scrollY
    window.addEventListener("scroll",()=> {
      if(lastScroll < window.scrollY){
        setHide(false)
      }else{
        setHide(true)
      }
      lastScroll = window.scrollY
    });
    
    useEffect(()=>{
      const element = document.documentElement
      switch(theme) {
        case 'dark':
          element.classList.add('dark')
          break;
        case 'light':
          element.classList.remove('dark')
          break;
        default:
          break;
      }
    },[theme])
   
  return (
    <>
      <div className={`w-full h-[80px] fixed  z-50 flex flex-row justify-between transition-all bg-transparent`}>
    {/* ${ hide? '' : 'bg-trasparent'} font-[poppins]`} */}
              <div className={`flex flex-row justify-between items-center w-full h-full  `}>

                            <div className='lg:w-[200px] flex items-center justify-center p-2 bg-transparent'>
                                  <motion.svg width="50" height="50" viewBox="0 0 56 70" fill={theme === 'dark' ? '#F6F4EB': '#001C30'} xmlns="http://www.w3.org/2000/svg"
                                    variants={navsideVariants}
                                    initial='hidden'
                                    animate='visible'>
                                    <motion.path d="M15.984 42.832C12.9547 42.832 10.288 42.1493 7.984 40.784C5.72267 39.4187 3.97334 37.4773 2.736 34.96C1.49867 32.4427 0.880005 29.456 0.880005 26C0.880005 22.7147 1.41334 19.5573 2.48 16.528C3.54667 13.4987 5.08267 10.7893 7.08801 8.39999C9.09334 6.01066 11.504 4.11199 14.32 2.70399C17.136 1.296 20.3147 0.591995 23.856 0.591995C26.5013 0.591995 28.6773 0.997328 30.384 1.80799C32.0907 2.61866 32.944 3.81333 32.944 5.39199C32.944 6.15999 32.7307 6.928 32.304 7.696C31.92 8.42133 31.408 9.03999 30.768 9.55199C30.128 10.064 29.4667 10.32 28.784 10.32C28.3573 10.32 28.016 10.2133 27.76 10C26.608 9.232 25.4773 8.67733 24.368 8.33599C23.2587 7.95199 21.9787 7.75999 20.528 7.75999C17.4987 7.75999 14.9387 8.46399 12.848 9.87199C10.7573 11.2373 9.15734 13.0507 8.04801 15.312C6.98134 17.5733 6.448 20.0267 6.448 22.672C6.448 25.232 6.93867 27.4933 7.92 29.456C8.90134 31.4187 10.2667 32.9547 12.016 34.064C13.7653 35.1733 15.8133 35.728 18.16 35.728C20.0373 35.728 21.8507 35.3653 23.6 34.64C25.392 33.872 26.9707 32.8267 28.336 31.504C28.9333 30.9493 29.5307 30.672 30.128 30.672C30.64 30.672 31.0027 30.8853 31.216 31.312C31.4293 31.7387 31.536 32.1653 31.536 32.592C31.536 33.3173 31.3227 34.1493 30.896 35.088C30.4693 35.984 29.808 36.88 28.912 37.776C27.3333 39.3547 25.392 40.592 23.088 41.488C20.784 42.384 18.416 42.832 15.984 42.832Z" 
                                    />
                                    <motion.path d="M37.36 69.264C33.8187 69.264 31.28 68.432 29.744 66.768C28.208 65.0613 27.44 62.8213 27.44 60.048C27.44 59.3227 27.504 58.448 27.632 57.424C27.76 56.4 27.9307 55.1627 28.144 53.712C28.4853 51.6213 28.7413 49.7653 28.912 48.144C29.0827 46.48 29.168 44.6667 29.168 42.704C29.168 40.4427 29.104 38.608 28.976 37.2C28.2507 37.6267 27.7173 37.84 27.376 37.84C26.6933 37.84 26.352 37.072 26.352 35.536C26.352 34.3413 26.608 33.3387 27.12 32.528C27.6747 31.6747 28.5707 30.8853 29.808 30.16C31.0453 29.392 32.6027 28.7307 34.48 28.176C36.4 27.6213 38.448 27.344 40.624 27.344C44.1653 27.344 46.8533 28.1547 48.688 29.776C50.5227 31.3973 51.44 33.5307 51.44 36.176C51.44 37.8827 51.0773 39.4613 50.352 40.912C49.6267 42.3627 48.6027 43.6427 47.28 44.752C52.6133 45.6053 55.28 48.6773 55.28 53.968C55.28 56.8267 54.4693 59.4293 52.848 61.776C51.2267 64.1227 49.0293 65.9573 46.256 67.28C43.568 68.6027 40.6027 69.264 37.36 69.264ZM39.92 62.16C41.84 62.16 43.568 61.904 45.104 61.392C46.6827 60.8373 47.9413 60.048 48.88 59.024C49.8187 58 50.288 56.8053 50.288 55.44C50.288 53.6907 49.6693 52.4533 48.432 51.728C47.1947 51.0027 45.7653 50.64 44.144 50.64C43.4613 50.64 42.608 50.704 41.584 50.832C41.1573 50.9173 40.6667 50.96 40.112 50.96C39.1733 50.96 38.384 50.576 37.744 49.808C37.1467 49.04 36.848 48.08 36.848 46.928C36.848 46.1173 37.2107 45.6053 37.936 45.392C43.1413 44.0267 45.744 41.6587 45.744 38.288C45.744 35.6 43.888 34.256 40.176 34.256C38.8107 34.256 37.1253 34.4907 35.12 34.96C35.12 37.0507 35.0133 39.248 34.8 41.552C34.5867 43.8133 34.2667 46.1813 33.84 48.656C33.584 50.3627 33.3707 51.8133 33.2 53.008C33.072 54.16 33.008 55.0987 33.008 55.824C33.008 58.128 33.584 59.7707 34.736 60.752C35.888 61.6907 37.616 62.16 39.92 62.16Z" 
                                    />
                                  </motion.svg>
                            </div>

                            <div className='hidden md:flex flex-row justify-between h-full items-center '>
                              <motion.div className=' p-2 text-[#001C30] dark:text-[#F6F4EB] mx-6 '
                                variants={navsideVariants}
                                initial='hidden'
                                animate='visible'><Link className='cursor-pointer' activeClass="active" to="home" spy={true} smooth={true} duration={1000} >HOME</Link></motion.div>
                              <motion.div className='p-2 text-[#001C30] dark:text-[#F6F4EB] mx-6 '
                                variants={navsideVariants}
                                initial='hidden'
                                animate='visible'><Link className='cursor-pointer'  activeClass="active" to="about" spy={true} smooth={true} duration={1000}>ABOUT</Link></motion.div>
                              <motion.div className='p-2 text-[#001C30] dark:text-[#F6F4EB] mx-6 '
                                variants={navsideVariants}
                                initial='hidden'
                                animate='visible'><Link className='cursor-pointer'  activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>PROJECTS</Link></motion.div>
                              <motion.div className=' p-2 text-[#001C30] dark:text-[#F6F4EB] mx-6 '
                                variants={navsideVariants}
                                initial='hidden'
                                animate='visible'><Link className='cursor-pointer'  activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>CONTACT</Link></motion.div>

                                  {/* DARKMODE/LIGHTMODE */}
                              <div className='mx-4'>
                                  {theme === 'dark' &&
                                    <motion.div className='cursor-pointer'
                                      variants={navsideVariants}
                                      initial='hidden'
                                      animate='visible'>
                                        <BsFillSunFill className='text-[#F6F4EB] p-2' onClick={()=> changetheme('light')} size={40}/>
                                    </motion.div>}

                                  {theme === 'light' &&
                                    <motion.div className='cursor-pointer'
                                      variants={navsideVariants}
                                      initial='hidden'
                                      animate='visible'>
                                        <BsFillMoonStarsFill className='text-[#001C30] p-2' onClick={()=> changetheme('dark')} size={40}/>
                                    </motion.div>}
                              </div>

                            </div>   

                            <div className='flex md:hidden mx-2'>
                                  {theme === 'dark' &&
                                    <motion.div className='cursor-pointer'
                                      variants={navsideVariants}
                                      initial='hidden'
                                      animate='visible'>
                                        <BsFillSunFill className='text-[#F6F4EB] p-2' onClick={()=> changetheme('light')} size={40}/>
                                    </motion.div>}

                                  {theme === 'light' &&
                                    <motion.div className='cursor-pointer'
                                      variants={navsideVariants}
                                      initial='hidden'
                                      animate='visible'>
                                        <BsFillMoonStarsFill className='text-[#001C30] p-2' onClick={()=> changetheme('dark')} size={40}/>
                                    </motion.div>}
                            </div>

              </div>
      </div>

      <div className='flex md:hidden fixed bottom-0 w-full z-50' onClick={() => alert('awdaw')}>
        <div className='relative w-full h-full'>
          <div className='absolute bottom-0 w-full'>
              <div className='dark:bg-[#64CCC5]   bg-[#DAFFFB] w-full h-[50px] flex flex-row justify-around items-center rounded-t-[10px] navBelow'>
                  <div><Link className='cursor-pointer' activeClass="active" to="home" spy={true} smooth={true} duration={1000} ><AiOutlineHome size={21}/></Link></div>
                  <div><Link className='cursor-pointer'  activeClass="active" to="about" spy={true} smooth={true} duration={1000}><MdPersonOutline size={25}/></Link></div>
                  <div><Link className='cursor-pointer'  activeClass="active" to="projects" spy={true} smooth={true} duration={1000}><AiOutlineProject size={21}/></Link></div>
                  <div><Link className='cursor-pointer'  activeClass="active" to="contact" spy={true} smooth={true} duration={1000}><HiOutlineMail size={24}/></Link></div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar