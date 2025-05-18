"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"

// Sample products data (same as in products page)
const products = [
  {
    id: 1,
    name: "Vintage Table Lamp",
    price: 89.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Elegant brass table lamp with a green glass shade, inspired by 1920s design.",
    details: [
      "Height: 18 inches",
      "Base diameter: 6 inches",
      "Materials: Brass, glass",
      "Bulb type: E26/E27 (not included)",
      "Vintage-inspired design with modern wiring",
    ],
  },
  {
    id: 2,
    name: "Retro Radio Clock",
    price: 59.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Functional AM/FM radio with alarm clock in a nostalgic wooden case design.",
    details: [
      "Dimensions: 8 x 5 x 4 inches",
      "AM/FM radio functionality",
      "Analog clock with alarm",
      "Wooden case with vintage finish",
      "Requires 2 AA batteries (not included)",
    ],
  },
  {
    id: 3,
    name: "Vintage Leather Satchel",
    price: 129.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
    description: "Handcrafted genuine leather satchel with antique brass hardware.",
    details: [
      "Dimensions: 15 x 11 x 4 inches",
      "Genuine full-grain leather",
      "Antique brass hardware",
      "Adjustable shoulder strap",
      "Interior pockets and compartments",
    ],
  },
  {
    id: 4,
    name: "Typewriter Bookends",
    price: 45.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Cast iron bookends shaped like vintage typewriters, perfect for your bookshelf.",
    details: [
      "Set of 2 bookends",
      "Dimensions: 6 x 4 x 6 inches each",
      "Material: Cast iron with antique finish",
      "Non-slip base",
      "Weight: 3 lbs each",
    ],
  },
  {
    id: 5,
    name: "Antique Pocket Watch",
    price: 79.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative brass pocket watch with intricate engravings.",
    details: [
      "Diameter: 1.75 inches",
      "Material: Brass with antique finish",
      "Decorative piece (non-functional)",
      "Chain length: 12 inches",
      "Intricate Victorian-inspired engravings",
    ],
  },
  {
    id: 6,
    name: "Vintage Style Dress",
    price: 119.99,
    category: "clothing",
    image: "/placeholder.svg?height=400&width=400",
    description: "1950s inspired A-line dress with a classic polka dot pattern.",
    details: [
      "Available sizes: XS to XL",
      "Material: 95% Cotton, 5% Elastane",
      "A-line silhouette with fitted bodice",
      "Hidden side zipper",
      "Machine washable cold, line dry",
    ],
  },
  {
    id: 7,
    name: "Retro Telephone",
    price: 69.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative rotary dial telephone in a classic design.",
    details: [
      "Dimensions: 9 x 6 x 5 inches",
      "Material: Plastic with metallic finish",
      "Decorative piece (non-functional)",
      "Rotary dial and handset",
      "Available in black, red, and cream",
    ],
  },
  {
    id: 8,
    name: "Vintage Camera",
    price: 149.99,
    category: "collectibles",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative film camera inspired by classic designs from the 1960s.",
    details: [
      "Dimensions: 5.5 x 3.5 x 2.5 inches",
      "Material: Metal and plastic",
      "Decorative piece (non-functional)",
      "Movable parts including lens and film advance",
      "Comes with display stand",
    ],
  },
  {
    id: 9,
    name: "Antique Wall Clock",
    price: 99.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Wooden wall clock with Roman numerals and an antique finish.",
    details: [
      "Diameter: 12 inches",
      "Material: Wood with antique finish",
      "Roman numeral face",
      "Quartz movement",
      "Requires 1 AA battery (not included)",
    ],
  },
  {
    id: 10,
    name: "Vintage Fedora Hat",
    price: 49.99,
    category: "clothing",
    image: "/placeholder.svg?height=400&width=400",
    description: "Classic fedora hat made from premium wool felt.",
    details: [
      "Available sizes: S, M, L, XL",
      "Material: 100% wool felt",
      "Grosgrain ribbon band",
      "Pinched crown design",
      "Spot clean only",
    ],
  },
  {
    id: 11,
    name: "Antique Compass",
    price: 39.99,
    category: "collectibles",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative brass compass with a leather case.",
    details: [
      "Diameter: 2 inches",
      "Material: Brass with antique finish",
      "Functional compass",
      "Leather case with snap closure",
      "Engraved details on face",
    ],
  },
  {
    id: 12,
    name: "Vintage Record Player",
    price: 199.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Functional record player with a vintage-inspired wooden case.",
    details: [
      "Dimensions: 14 x 12 x 6 inches",
      "3-speed turntable (33, 45, 78 RPM)",
      "Built-in speakers",
      "Bluetooth connectivity",
      "Wooden case with vintage finish",
    ],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-serif font-medium text-[#5c4f3c] mb-4">Product Not Found</h1>
        <p className="text-[#8c7851] mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    })
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="text-[#8c7851] hover:text-[#5c4f3c] -ml-3">
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f8f5f0]">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="text-sm text-[#8c7851] mb-2 capitalize">{product.category.replace("-", " ")}</div>
          <h1 className="text-3xl font-serif font-medium text-[#5c4f3c] mb-4">{product.name}</h1>
          <div className="text-2xl font-medium mb-4">${product.price.toFixed(2)}</div>

          <p className="text-[#8c7851] mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-[#5c4f3c] mb-2">Details</h3>
            <ul className="list-disc list-inside space-y-1 text-[#8c7851]">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="w-12 text-center">{quantity}</div>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>

            <Button className="flex-1 bg-[#8c7851] hover:bg-[#6a5a3d] text-white" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          <div className="text-sm text-[#8c7851] border-t pt-6 mt-auto">
            <p>Free shipping on orders over $75</p>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-[#5c4f3c] mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-md bg-[#f8f5f0] mb-4">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-5" />
                </div>

                <div className="flex flex-col flex-1">
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    className="font-medium text-[#5c4f3c] hover:underline mb-1"
                  >
                    {relatedProduct.name}
                  </Link>
                  <div className="mt-auto font-medium">${relatedProduct.price.toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
