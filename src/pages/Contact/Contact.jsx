import { useState } from 'react'
import './Contact.css'

const SERVICES = [
  'Will & Trust - Estate Planning',
  'Term Life Insurance',
  'Retirement Planning',
  'Fixed Indexed Annuities',
  'Health Insurance',
  'Mortgage Loans',
  'Accelerated Tax Depreciation',
  'Alternate Investments & Tax Write-Offs',
  'Tax-Filing & Compliance',
  'Other / General Inquiry',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6vc9hzvppWpxjNxLHSvmFMmgBIrNVRUl8ayIStRpNKJPni1qJMiXR3ju4W6PzwL-P/exec",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for reaching out! A Value Services expert will contact you within 24 hours.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setStatus({
          type: 'error',
          message: `Failed to send message: ${data.error || 'Please try again.'}`,
        })
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <span className="contact-header__tag">Connect With Us</span>
        <h1 className="contact-header__title">Schedule a Consultation</h1>
        <p className="contact-header__desc">
          Ready to optimize your taxes, secure your estate, or grow your retirement? Write to us and an advisor will get back to you promptly.
        </p>
      </header>

      {/* Main Grid */}
      <div className="contact-grid">
        {/* Contact Form */}
        <section className="contact-card" aria-labelledby="form-heading">
          <h2 id="form-heading" className="contact-card__title">Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Status alerts */}
            {status.message && (
              <div
                className={`form-status form-status--${status.type}`}
                role="alert"
              >
                <span className="material-symbols-outlined">
                  {status.type === 'success' ? 'check_circle' : 'error'}
                </span>
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Select Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Choose a service...</option>
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message / Brief Details *</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can our advisory team assist you?"
                className="form-textarea"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <span className="material-symbols-outlined">send</span>
                </>
              )}
            </button>
          </form>
        </section>

        {/* Contact Info Sidebar */}
        <aside className="contact-info" aria-label="Contact Information">
          <div className="info-block">
            <h3 className="info-block__title">Operating Locations</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-item__icon-wrap">
                  <span className="material-symbols-outlined info-item__icon">pin_drop</span>
                </div>
                <div className="info-item__content">
                  <span className="info-item__label">Operating From</span>
                  <span className="info-item__value">
                    Plano, Allen &amp; Irving, TX
                  </span>
                  <span className="info-item__subtext" style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', marginTop: '4px' }}>
                    Serving Clients Across the Dallas–Fort Worth Area
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item__icon-wrap">
                  <span className="material-symbols-outlined info-item__icon">calendar_month</span>
                </div>
                <div className="info-item__content">
                  <span className="info-item__label">Appointments</span>
                  <span className="info-item__value">
                    Visits strictly by appointment.
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item__icon-wrap">
                  <span className="material-symbols-outlined info-item__icon">call</span>
                </div>
                <div className="info-item__content">
                  <span className="info-item__label">Direct Contact</span>
                  <a href="tel:+14697088009" className="info-item__value">
                    Office: 469-708-8009
                  </a>
                  <a href="tel:+13167301808" className="info-item__value" style={{ marginTop: '4px' }}>
                    Mobile: 316-730-1808
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-item__icon-wrap">
                  <span className="material-symbols-outlined info-item__icon">mail</span>
                </div>
                <div className="info-item__content">
                  <span className="info-item__label">Email</span>
                  <a href="mailto:info@valueservices.us" className="info-item__value">
                    info@valueservices.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
