import React, { useState } from 'react'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const LeadForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const validatePhone = (phone) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t.form.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.form.phoneRequired
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t.form.phoneInvalid
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        preferredTime: formData.preferredTime,
        message: formData.message,
        source: 'Website Ignite',
      }

      // Check if webhook URL is configured
      if (!config.FORM_WEBHOOK_URL || config.FORM_WEBHOOK_URL.startsWith('{{')) {
        // Simulate success for demo
        setTimeout(() => {
          setSubmitStatus('success')
          setIsSubmitting(false)
          setFormData({ name: '', phone: '', preferredTime: '', message: '' })
        }, 1000)
        return
      }

      const response = await fetch(config.FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', preferredTime: '', message: '' })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="appointment-form" className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 max-w-sm mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{t.form.getFreeQuote}</h2>
      
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-800 mb-2">{t.form.successTitle}</h3>
          <p className="text-sm text-gray-600">{t.form.successMessage}</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-4 text-primary hover:underline"
          >
            {t.form.submitAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
              {t.form.fullName}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-2.5 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
              {t.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-2.5 py-1.5 text-xs border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-red-600" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs font-medium text-gray-700 mb-1">
              {t.form.preferredTime}
            </label>
            <input
              type="datetime-local"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
              {t.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" role="alert">
              {t.form.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.form.submitting : t.form.submit}
          </button>
        </form>
      )}
    </div>
  )
}

export default LeadForm

