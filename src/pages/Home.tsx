import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { GamingCard } from "@/components/gaming-card";
import { BookingForm } from "@/components/booking-form";
import { ContactSection } from "@/components/contact-section";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

const pricingOptions = [
  {
    title: "PC GAMING PRO",
    price: "150",
    specs: [
      "RTX 4090 24GB",
      "Intel Core i9-13900K",
      "32GB DDR5 RAM",
      "27&quot; 360Hz ASUS ROG"
    ],
    image: "/pc-setup.jpg"
  },
  {
    title: "PLAYSTATION 5",
    price: "100",
    specs: [
      "DualSense контроллер",
      "65&quot; 4K OLED TV",
      "Все новинки",
      "Комфортный диван"
    ],
    image: "/ps5-setup.jpg"
  },
  {
    title: "VR EXPERIENCE",
    price: "200",
    specs: [
      "Meta Quest 3",
      "Большая игровая зона",
      "Полное погружение",
      "Популярные VR игры"
    ],
    image: "/vr-setup.jpg"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />

      <section className="py-20 container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-gamer-primary mb-4">
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Создаем идеальные условия для твоего игрового опыта
          </p>
        </motion.div>

        <FeaturesGrid />
      </section>

      <section id="price" className="py-20 bg-card">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-cyber text-gamer-primary mb-4">
              ТАРИФЫ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выбери своё игровое место
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingOptions.map((option, index) => (
              <GamingCard key={index} {...option} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-cyber text-gamer-primary mb-4">
            ЗАБРОНИРОВАТЬ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оставь заявку, и мы свяжемся с тобой для подтверждения
          </p>
        </motion.div>

        <BookingForm />
      </section>

      <ContactSection />
    </div>
  );
};

export default Home;