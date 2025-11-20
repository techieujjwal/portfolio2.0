"use client";


import { motion, Variants } from "framer-motion";


interface WaveTextProps {
 text: string;
 className?: string;
 delay?: number;
 duration?: number;
}


export function WaveText({
 text,
 className = "",
 delay = 0,
 duration = 0.05
}: WaveTextProps) {
 const letters = text.split("");


 const container: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: duration,
       delayChildren: delay
     },
   },
 };


 const child: Variants = {
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       type: "spring" as const,
       damping: 12,
       stiffness: 100,
     },
   },
   hidden: {
     opacity: 0,
     y: 20,
   },
 };


 return (
   <motion.span
     className={className}
     variants={container}
     initial="hidden"
     animate="visible"
   >
     {letters.map((letter, index) => (
       <motion.span
         variants={child}
         key={index}
         className="inline-block"
       >
         {letter === " " ? "\u00A0" : letter}
       </motion.span>
     ))}
   </motion.span>
 );
}



