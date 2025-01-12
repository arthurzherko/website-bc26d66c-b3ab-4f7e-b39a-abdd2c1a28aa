import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useToast } from './ui/use-toast'

interface BookingFormData {
  name: string
  phone: string
  date: string
  time: string
}

export function BookingForm() {
  const { register, handleSubmit, reset } = useForm<BookingFormData>()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: 'Бронирование отправлено!',
      description: 'Мы свяжемся с вами для подтверждения.',
    })
    
    reset()
    setIsSubmitting(false)
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="space-y-2">
        <Label htmlFor="name">Ваше имя</Label>
        <Input
          id="name"
          {...register('name', { required: true })}
          className="border-gamer-primary focus:border-gamer-neon"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Телефон</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { required: true })}
          className="border-gamer-primary focus:border-gamer-neon"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Дата</Label>
        <Input
          id="date"
          type="date"
          {...register('date', { required: true })}
          className="border-gamer-primary focus:border-gamer-neon"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Время</Label>
        <Input
          id="time"
          type="time"
          {...register('time', { required: true })}
          className="border-gamer-primary focus:border-gamer-neon"
        />
      </div>

      <Button 
        type="submit" 
        className="cyber-button w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Забронировать'}
      </Button>
    </motion.form>
  )
}