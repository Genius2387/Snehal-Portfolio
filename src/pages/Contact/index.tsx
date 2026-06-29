import React, { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Input, TextArea } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { SOCIAL_LINKS } from '@/data/mockData'
import { Send, CheckCircle2 } from 'lucide-react'
import { BrandIcon } from '@/components/common/BrandIcon'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({ name: '', email: '' })

  const getIcon = (platform: string) => {
    return <BrandIcon name={platform} size={20} />
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic Validation
    let hasErrors = false
    const newErrors = { name: '', email: '' }

    if (!formData.name) {
      newErrors.name = 'Name is required'
      hasErrors = true
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
      hasErrors = true
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return
    }

    setErrors({ name: '', email: '' })
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                badge="Get In Touch"
                title="Let's build something great."
                subtitle="Have a project in mind, want to discuss a partnership, or just say hello? Fill out the form or reach out directly."
                className="mb-0"
              />

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-light/50">Direct Email</h4>
                  <a
                    href="mailto:alex.rivers@design.com"
                    className="text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    data-hover
                  >
                    alex.rivers@design.com
                  </a>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-light/50 mb-3">Connect on Socials</h4>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-light hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all duration-300"
                        data-hover
                        title={link.platform}
                      >
                        {getIcon(link.platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <Card hoverable={false} className="relative overflow-hidden">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400 mb-2">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="max-w-xs text-sm text-neutral-light leading-relaxed">
                      Thank you for reaching out. I'll review your inquiry and respond within 24 hours.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-6">Send Message</h3>

                    <Input
                      label="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                    />

                    <Input
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                    />

                    <TextArea
                      label="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                        magnetic
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message <Send className="ml-2" size={14} />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  )
}
export default Contact
