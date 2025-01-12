import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export function ContactSection() {
  return (
    <motion.section 
      className="bg-card py-16"
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cyber text-gamer-primary mb-4">
            НАЙТИ НАС
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в центре города с удобной транспортной доступностью
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-gamer-neon text-2xl">📍</div>
              <div>
                <h3 className="font-gaming text-gamer-secondary mb-1">Адрес</h3>
                <p className="text-muted-foreground">ул. Геймеров, 42</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-gamer-neon text-2xl">📞</div>
              <div>
                <h3 className="font-gaming text-gamer-secondary mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-gamer-neon text-2xl">⏰</div>
              <div>
                <h3 className="font-gaming text-gamer-secondary mb-1">Режим работы</h3>
                <p className="text-muted-foreground">Ежедневно с 10:00 до 23:00</p>
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden neon-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d..." // Замените на реальные координаты
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}