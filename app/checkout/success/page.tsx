import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>

        <h1 className="text-2xl md:text-3xl font-serif font-medium text-[#5c4f3c] mb-4">Order Confirmed!</h1>

        <p className="text-[#8c7851] mb-8">
          Thank you for your purchase. We've received your order and will begin processing it right away. You'll receive
          a confirmation email shortly with your order details.
        </p>

        <div className="bg-[#f8f5f0] p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium text-[#5c4f3c] mb-2">What's Next?</h2>
          <ul className="text-[#8c7851] text-left space-y-2">
            <li>• You'll receive an order confirmation email</li>
            <li>• We'll notify you when your order ships</li>
            <li>• Estimated delivery: 3-5 business days</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white">
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
