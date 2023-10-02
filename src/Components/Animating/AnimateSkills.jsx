import React,{ useRef , useEffect } from 'react'
import { motion , useInView , useAnimation} from "framer-motion"

export default function AnimateSkills({children,classN}) {

    const ref = useRef()
    const isInView = useInView(ref, {
      margin: "-150px 100px 0px 0px"
    })

    const animateTrue = useAnimation()

    const draw = {
        hidden:(custom) =>(
            {
                opacity:0,
                x:custom.x,
                y:custom.y
            }
        ),
        visible: {
            opacity:isInView ? 1:0,
            x:0,
            y:0,
            transition:{
                duration:1.5
            }
        },
        hide: (custom) =>(
            {
                opacity:0,
                x:custom.x,
                y:custom.y,
                transition:{
                    delay:1,
                    duration:.5
                }
            }
        )
    };
  
    useEffect(() => {
      if(isInView){
        animateTrue.start('visible')
      }else{
        animateTrue.start('hide')
      }
    }, [isInView])
 
  
  return (
        <div ref={ref} className={`${classN}`}>

                    {children.map((value,index)=>{
                        return( 
                                <motion.div key={index} 
                                    custom={{x:value.props.x,y:value.props.y}}
                                    initial={"hidden"}
                                    animate={animateTrue}
                                    variants={draw}>{value}
                                </motion.div>
                        )
                    })}
                    
        </div>
  )
}
