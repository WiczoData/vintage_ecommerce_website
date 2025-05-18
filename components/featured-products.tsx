"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { ShoppingBag } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Vintage Table Lamp",
    price: 89.99,
    category: "Home Decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Elegant brass table lamp with a green glass shade, inspired by 1920s design.",
  },
  {
    id: 2,
    name: "Retro Radio Clock",
    price: 59.99,
    category: "Home Decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Functional AM/FM radio with alarm clock in a nostalgic wooden case design.",
  },
  {
    id: 3,
    name: "Vintage Leather Satchel",
    price: 129.99,
    category: "Accessories",
    image: "/placeholder.svg?height=400&width=400",
    description: "Handcrafted genuine leather satchel with antique brass hardware.",
  },
  {
    id: 4,
    name: "Typewriter Bookends",
    price: 45.99,
    category: "Home Decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Cast iron bookends shaped like vintage typewriters, perfect for your bookshelf.",
  },
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-serif text-[#5c4f3c] mb-4">Featured Products</h2>
          <p className="text-[#8c7851] max-w-2xl">
            Discover our handpicked selection of vintage-inspired treasures that add character and charm to your space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-md bg-[#f8f5f0] mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-5" />
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 right-4 bg-white text-[#5c4f3c] hover:bg-[#e6dfd3] rounded-full p-2 opacity-0 transform translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  size="icon"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>

              <div className="flex flex-col flex-1">
                <div className="text-xs text-[#8c7851] mb-1">{product.category}</div>
                <Link href={`/products/${product.id}`} className="font-medium text-[#5c4f3c] hover:underline mb-1">
                  {product.name}
                </Link>
                <p className="text-sm text-[#8c7851] line-clamp-2 mb-2">{product.description}</p>
                <div className="mt-auto font-medium">${product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white rounded-md">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
