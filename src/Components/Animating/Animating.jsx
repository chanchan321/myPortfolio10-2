import React,{ useRef , useEffect } from 'react'
import { motion , useInView , useAnimation} from "framer-motion"

export default function Animating({delayS,children,name,classN}) {

    const ref = useRef()
    const isInView = useInView(ref, {
      margin: "-150px 50px -150px 0px"
    })

    const animateTrue = useAnimation()

    const FromtLeft = {
        hidden: { x:200 ,opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay:delayS + .2,
              duration: 1.5
            }
        },
        hide: { x:200 , opacity: 0,
            transition: {
                delay:.5,
                duration: .1
              }}
      };

      const FromtRight = {
        hidden: { x:-200 ,opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay:delayS + .2,
              duration: 1.5
            }
        },
        hide: { x:-200 , opacity: 0,
            transition: {
                delay:.5,
                duration: .1
              }}
      };
  
    useEffect(() => {
      if(isInView){
        animateTrue.start('visible')
      }else{
        animateTrue.start('hide')
      }
    }, [isInView])
 
  
  return (
    <motion.div ref={ref} className={`${classN}`}
        variants={name === 'fLeft'? FromtLeft: FromtRight}
        initial={"hidden"}
        animate={animateTrue}>
        {children}
    </motion.div>
  )
}
