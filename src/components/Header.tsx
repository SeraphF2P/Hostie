import { AnimatePresence, Variants, motion as m, useMotionTemplate, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/cva"
import Menu from "./Menu"
import { Btn, Icon, LoginBtn } from "./ui"
export const Header = () => {
  const { scrollY ,scrollYProgress} = useScroll()
  const [isAnimating, setisAnimating] = useState(false);
  useMotionValueEvent(scrollY,"change", (val) => {
    if (val >= 120) {
      setisAnimating(true)
    } else {
      setisAnimating(false)
    }
  })
  const animationVariant :Variants ={
    animate: {
      translateY: ["0%", "-100%", "0%"],
      top: ["0px", "0px", "-48px"],
      opacity: [1, 0, 1],
    }
  }
  const strokeDasharray = useMotionTemplate`calc(${scrollYProgress} * 307.919), 307.919`;
  return (
    <>
    <m.header variants={animationVariant} animate={isAnimating ? "animate" : ""} className={cn("sticky top-0  z-40  w-full left-0 text-primary-text", {
      "bg-neutral shadow ":isAnimating,
      "bg-primary":!isAnimating,
    })}>
      <div className={cn("bg-white/10 ")}>
          <div className=" flex  justify-center  sm:justify-between items-center container p-3 ">
        <div className="  flex   justify-center items-center gap-8">
          <LoginBtn  />
            
          <Link className=" flex gap-1 items-center capitalize" to={"/livechat"}>live chat
            <img src="/svgs/svgexport-3.svg" /></Link>
      
        </div>
            <span className=" hidden sm:flex gap-1" ><p>Hosting Flash Sale: Starting at</p><span className="text-secondery"> $2.59/mo </span><p>for a limited time</p><img src="/svgs/svgexport-2.svg" /></span>
              <Link className="hidden sm:flex  gap-1 items-center capitalize" to={"/contact@hostie.com"}>contact@hostie.com
            <img src="/svgs/svgexport-1.svg" /></Link>
          </div>  
        </div>
        <div className=" flex p-2 py-4 container justify-between items-center">
          <div className=" flex lg:flex-row-reverse justify-center gap-4 lg:flex-1">
          <Menu className={cn(" rounded-sm   aspect-square", {
            "bg-neutral !text-neutral-revert ring-neutral-revert":isAnimating
          })} />
          <Btn variant="outline" className={cn(" !text-nowrap hidden mn:flex", {
            "bg-neutral text-neutral-revert ring-neutral-revert":isAnimating
          })}>
            client area
          </Btn>
         </div>
          {isAnimating ?<img  src="/svgs/Hostie-1.svg"/>:
          <img  src="/svgs/Hostie.svg"/>}
        </div>
      
      </m.header>
        <m.button key="scrollToTopBtn" onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }} className={cn("fixed overflow-hidden will-change-[opacity,transform]  transition-[transform,opacity] left-4 bottom-8 flex justify-center items-center bg-neutral shadow-sm size-[46px]  z-40 rounded-full", {
        "translate-y-0 opacity-100":isAnimating,
        "translate-y-[100px] opacity-0":!isAnimating,
      })}>
      <svg  className=" absolute " width="46" height="46" viewBox="-1 -1 102 102">
        <m.path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{strokeDasharray,strokeDashoffset: 0.119356 ,strokeWidth:"34px"}} stroke="#0774FF" fill="none" ></m.path>
        </svg>
        <Icon.arrowleft className="    size-6  rotate-90 fill-primary"/>
      </m.button>
   
</>
  )
}

 