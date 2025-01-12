import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import { Card } from './ui/card'

const features = [
  {
    title: 'Мощные PC',
    description: 'RTX 4090, Core i9, 32GB RAM',
    icon: '🖥️'
  },
  {
    title: 'PlayStation 5',
    description: 'Все хиты и новинки',
    icon: '🎮'
  },
  {
    title: 'VR Игры',
    description: 'Погружение в виртуальную реальность',
    icon: '🥽'
  },
  {
    title: 'Турниры',
    description: 'Регулярные соревнования',
    icon: '🏆'
  }
]

export function FeaturesGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 }
          }}
        >
          <Card className="p-6 text-center hover:border-gamer-neon transition-colors">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-gaming text-gamer-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}