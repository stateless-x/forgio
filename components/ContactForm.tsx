'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('cta.form')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Show success message
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', company: '', phone: '', message: '' })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      // You could add error state here to show user an error message
      alert('Failed to send message. Please try again or contact us directly via email.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="py-12 text-center bg-gold-500/10 border border-gold-500/30 rounded-lg">
        <p className="text-gold-500 text-lg font-semibold">{t('success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 hover:border-neutral-600"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
          {t('company')}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 hover:border-neutral-600"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 hover:border-neutral-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300 hover:border-neutral-600 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 hover:scale-105 active:scale-95 text-neutral-900 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/30"
      >
        {t('submit')}
      </button>
    </form>
  )
}
