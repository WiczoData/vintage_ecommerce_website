"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our vintage-inspired newsletter soon.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-16 bg-[#e6dfd3]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <h2 className="text-2xl font-serif text-[#5c4f3c] mb-4">Join Our Vintage Community</h2>
          <p className="text-[#8c7851] mb-6">
            Subscribe to our newsletter for exclusive offers, vintage inspiration, and first access to new arrivals.
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white border-[#d1c7b8] focus-visible:ring-[#8c7851]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-[#8c7851] mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
