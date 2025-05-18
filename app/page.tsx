import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#f8f5f0] py-20">
          <div className="absolute inset-0 bg-[url('/images/vintage-pattern.png')] opacity-5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#e6dfd3] text-[#8c7851] text-xs font-medium uppercase tracking-wider mb-2">
                Timeless Treasures
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#5c4f3c] max-w-3xl">
                Discover Vintage Elegance for Modern Living
              </h1>
              <p className="text-[#8c7851] max-w-2xl text-lg md:text-xl">
                Curated collections of timeless pieces that bring nostalgic charm to your everyday life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white rounded-md">
                  <Link href="/products">
                    Shop Collection <ShoppingBag className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8c7851] text-[#8c7851] hover:bg-[#f0ebe0] rounded-md"
                >
                  <Link href="/about">
                    Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-serif text-center text-[#5c4f3c] mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Home Decor", "Clothing", "Accessories", "Collectibles"].map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${category.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg aspect-square"
                >
                  <div className="absolute inset-0 bg-[#5c4f3c] opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/placeholder.svg?height=400&width=400')` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#f8f5f0] bg-opacity-90 px-4 py-2 text-[#5c4f3c] font-medium font-serif">
                      {category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts />

        {/* About Section Preview */}
        <section className="py-16 bg-[#f8f5f0]">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-[#5c4f3c] mb-4">
                  Crafting Digital Experiences with a Vintage Touch
                </h2>
                <p className="text-[#8c7851] mb-6">
                  With 2 years of experience in web design and development, I specialize in creating interactive and
                  engaging digital experiences that blend vintage aesthetics with modern functionality.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#8c7851] text-[#8c7851] hover:bg-[#f0ebe0] rounded-md"
                >
                  <Link href="/about">Read More About Us</Link>
                </Button>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/placeholder.svg?height=400&width=400')` }}
                />
                <div className="absolute inset-0 bg-[#5c4f3c] opacity-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
    </div>
  )
}
