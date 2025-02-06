"use client"

import { useState, useEffect } from "react"
import { PopoverForm, PopoverFormButton, PopoverFormSuccess } from "./popover-form"

export function NetlifyPopoverForm() {
  const [open, setOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 1000) // Show after 2 seconds to allow paragraphs to be read
    return () => clearTimeout(timer)
  }, [])

  return (
    <PopoverForm
      open={open}
      setOpen={setOpen}
      showSuccess={showSuccess}
      title="Lead Your Industry with AI"
      className="w-[400px]"
      show={show}
      successChild={
        <PopoverFormSuccess
          title="Success!"
          description="Thank you for your interest. We'll be in touch."
        />
      }
      openChild={
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          id="form"
          className="needs-validation h-full"
          noValidate
          action="/success"
          onSubmit={(e) => {
            e.preventDefault()
            
            // Get form data
            const formData = new FormData(e.currentTarget)
            const email = formData.get('email') as string

            // Validate email
            if (!email || email.trim() === '') {
              setError(true)
              return
            }
            setError(false)
            
            setLoading(true)
            
            // Submit to Netlify
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(formData as any).toString(),
            })
              .then(() => {
                setShowSuccess(true)
                setLoading(false)
              })
              .catch((error) => {
                console.error("Error:", error)
                setLoading(false)
              })
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="relative p-2">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              onChange={() => setError(false)}
              className="w-full px-2 py-1 border-2 placeholder:text-gray-800 outline-none focus:ring-4 border-gray-300 focus:border-gray-500 ring-gray-100 bg-white/80 backdrop-blur-sm"
            />
            {error && (
              <div className="text-red-500 text-sm mt-1">
                Please provide a valid email address
              </div>
            )}
            <div className="mt-2 flex justify-end">
              <PopoverFormButton loading={loading} text="Submit" />
            </div>
          </div>
        </form>
      }
    />
  )
}
