"use client";


import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";


interface StaggerContainerProps {
 children: ReactNode;
 staggerDelay?: number;
 className?: string;
}


const containerVariants: Variants = {
 hidden: { opacity: 0 },
 visible: {
   opacity: 1,
   transition: {
     staggerChildren: 0.1,
     delayChildren: 0.2,
   },
 },
};


const itemVariants: Variants = {
 hidden: {
   opacity: 0,
   y: 20,
   scale: 0.95,
 },
 visible: {
   opacity: 1,
   y: 0,
   scale: 1,
   transition: {
     type: "spring" as const,
     stiffness: 100,
     damping: 15,
   },
 },
};


export function StaggerContainer({
 children,
 className = ""
}: StaggerContainerProps) {
 return (
   <motion.div
     variants={containerVariants}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.3 }}
     className={className}
   >
     {children}
   </motion.div>
 );
}


export function StaggerItem({
 children,
 className = ""
}: {
 children: ReactNode;
 className?: string;
}) {
 return (
   <motion.div
     variants={itemVariants}
     className={className}
   >
     {children}
   </motion.div>
 );
}



