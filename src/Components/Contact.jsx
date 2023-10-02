import React,{ useRef , useEffect } from 'react'
import useStore from '../store/store';
import './CSS/contact.css'
import { LiaGlobeAmericasSolid }  from 'react-icons/lia';
import { LuMailPlus }  from 'react-icons/lu';
import Animating from './Animating/Animating';
import BGsvg from './svgs/svgbg'
 
const Contact = () => {


    return (
        <>
        <div name='contact' className='w-full min-h-[20vh] bg-[#F6F4EB] dark:bg-[#001C30] text-dark dark:text-light overflow-x-hidden font-[poppins]'>
            <section  className='w-full flex flex-col gap-10 items-center justify-center z-20 relative'>

                <div className='w-full lg:w-[60%] h-fit '>
                    <p className='text-[25px] text-center lg:text-start'>Message me </p>
                </div>

                <div className='w-[95%] md:w-[60%] flex-col flex lg:flex-row  justify-around gap-10'>   
                        <Animating name={'fRight'} classN={'card flex flex-row justify-around items-center w-[310px] h-[80px] border-[1px] dark:border-[#213555] mx-auto'}>
                            <LuMailPlus size={38} />
                            <a href='https://mail.google.com/mail/u/lee@example.org/#compose' target='_blank' >christianbbabsa@gmail.com</a>
                        </Animating>
                        <Animating name={'fLeft'} classN={'card flex flex-row justify-around items-center w-[310px] h-[80px] border-[1px] dark:border-[#213555] mx-auto'}>
                            <LiaGlobeAmericasSolid size={43} />
                            <p>Legazpi City, Philippines</p>
                        </Animating>
                </div>

                <div className='w-full text-[15px] h-[100px] p-4 flex justify-center items-start md:items-center bg-[#176B87] text-light'>
                    Built by : Babasa Christian B.
                </div>
                    
            </section>  
        </div>
        </>
    )
}


export default Contact