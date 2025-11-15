import { useState } from 'react'
import '../styles/brand.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log('Form data', Object.fromEntries(form.entries()))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="rw-title text-3xl font-semibold mb-4">Thank you</h1>
        <p className="text-gray-700">We received your message and will reply soon.</p>
        <a href="/" className="inline-block mt-6 rw-button">Back to Home</a>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="rw-title text-3xl font-semibold mb-6">Contact Us</h1>
      <form onSubmit={onSubmit} className="rw-card p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input name="name" required className="mt-1 rw-input" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 rw-input" />
        </div>
        <div>
          <label className="block text-sm font-medium">Interest</label>
          <select name="interest" className="mt-1 rw-input">
            <option>Product Inquiry</option>
            <option>Warranty</option>
            <option>Corporate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows="4" className="mt-1 rw-input"></textarea>
        </div>
        <button className="rw-button">Send</button>
      </form>
    </div>
  )
}
