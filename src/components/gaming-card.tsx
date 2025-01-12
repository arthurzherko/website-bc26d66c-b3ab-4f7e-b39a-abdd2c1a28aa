import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'

interface GamingCardProps {
  title: string
  price: string
  specs: string[]
  image: string
  className?: string
}

export function GamingCard({ title, price, specs, image, className }: GamingCardProps) {
  return (
    <motion.div
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Card className={cn('game-card group overflow-hidden', className)}>
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-gaming text-gamer-primary animate-neon-pulse">
            {title}
          </h3>
          
          <ul className="space-y-2 text-muted-foreground">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-gamer-neon">▶</span>
                {spec}
              </li>
            ))}
          </ul>
          
          <div className="pt-4 border-t border-border">
            <p className="text-xl font-cyber text-gamer-secondary">
              {price} ₽/час
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}