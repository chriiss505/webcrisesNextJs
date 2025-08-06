"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ScrollOverlay({ children, speed = 0.5 }) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px es un breakpoint común para tablets
    };
    
    // Comprobar al montar el componente
    checkIfMobile();
    
    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 50}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Si es móvil, renderizar los children directamente sin efectos
  if (isMobile) {
    return (
      <div ref={ref}>
        {children}
      </div>
    );
  }

  // Si no es móvil, aplicar los efectos de scroll
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          y,
          scale,
          width: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}