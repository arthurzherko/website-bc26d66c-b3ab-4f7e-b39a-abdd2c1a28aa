import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/gaming-bg.jpg')] bg-cover bg-center opacity-30" />
      
      <div className="container relative z-10 text-center space-y-8">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-cyber text-gamer-primary drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          GAME ZONE
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gamer-neon max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Погрузись в мир игр на самом современном оборудовании
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="cyber-button"
            onClick={() => document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' })}
          >
            НАЧАТЬ ИГРУ
          </Button>
        </motion.div>
      </div>
    </section>
  )
}