"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Sample products data
const products = [
  {
    id: 1,
    name: "Vintage Table Lamp",
    price: 89.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Elegant brass table lamp with a green glass shade, inspired by 1920s design.",
  },
  {
    id: 2,
    name: "Retro Radio Clock",
    price: 59.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Functional AM/FM radio with alarm clock in a nostalgic wooden case design.",
  },
  {
    id: 3,
    name: "Vintage Leather Satchel",
    price: 129.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
    description: "Handcrafted genuine leather satchel with antique brass hardware.",
  },
  {
    id: 4,
    name: "Typewriter Bookends",
    price: 45.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Cast iron bookends shaped like vintage typewriters, perfect for your bookshelf.",
  },
  {
    id: 5,
    name: "Antique Pocket Watch",
    price: 79.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative brass pocket watch with intricate engravings.",
  },
  {
    id: 6,
    name: "Vintage Style Dress",
    price: 119.99,
    category: "clothing",
    image: "/placeholder.svg?height=400&width=400",
    description: "1950s inspired A-line dress with a classic polka dot pattern.",
  },
  {
    id: 7,
    name: "Retro Telephone",
    price: 69.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative rotary dial telephone in a classic design.",
  },
  {
    id: 8,
    name: "Vintage Camera",
    price: 149.99,
    category: "collectibles",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative film camera inspired by classic designs from the 1960s.",
  },
  {
    id: 9,
    name: "Antique Wall Clock",
    price: 99.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Wooden wall clock with Roman numerals and an antique finish.",
  },
  {
    id: 10,
    name: "Vintage Fedora Hat",
    price: 49.99,
    category: "clothing",
    image: "/placeholder.svg?height=400&width=400",
    description: "Classic fedora hat made from premium wool felt.",
  },
  {
    id: 11,
    name: "Antique Compass",
    price: 39.99,
    category: "collectibles",
    image: "/placeholder.svg?height=400&width=400",
    description: "Decorative brass compass with a leather case.",
  },
  {
    id: 12,
    name: "Vintage Record Player",
    price: 199.99,
    category: "home-decor",
    image: "/placeholder.svg?height=400&width=400",
    description: "Functional record player with a vintage-inspired wooden case.",
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const { addToCart } = useCart()
  const { toast } = useToast()

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // Search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low-high":
          return a.price - b.price
        case "price-high-low":
          return b.price - a.price
        case "name-a-z":
          return a.name.localeCompare(b.name)
        case "name-z-a":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

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

  const clearFilters = () => {
    setPriceRange([0, 200])
    setSelectedCategories([])
    setSearchQuery("")
    setSortOption("featured")
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-serif font-medium text-[#5c4f3c]">Products</h1>
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                {/* Mobile Filters */}
                <div className="space-y-6 flex-1 overflow-auto">
                  {/* Search */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Search</h3>
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      {["home-decor", "clothing", "accessories", "collectibles"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-mobile-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={`category-mobile-${category}`} className="capitalize">
                            {category.replace("-", " ")}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium">Price Range</h3>
                      <span className="text-sm text-muted-foreground">
                        ${priceRange[0]} - ${priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={200}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sort By</h3>
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                        <SelectItem value="name-z-a">Name: Z to A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4 border-t mt-6">
                  <Button
                    className="w-full bg-[#8c7851] hover:bg-[#6a5a3d] text-white"
                    onClick={() => setIsMobileFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-64 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-[#5c4f3c]">Filters</h2>
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
              Clear All
            </Button>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-[#5c4f3c]">Search</h3>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-[#5c4f3c]">Categories</h3>
            <div className="space-y-2">
              {["home-decor", "clothing", "accessories", "collectibles"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`category-${category}`} className="capitalize text-[#8c7851]">
                    {category.replace("-", " ")}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-[#5c4f3c]">Price Range</h3>
              <span className="text-sm text-[#8c7851]">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <Slider
              defaultValue={priceRange}
              min={0}
              max={200}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-6"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-serif font-medium text-[#5c4f3c] hidden md:block">Products</h1>

            {/* Sort Dropdown (Desktop) */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-[#8c7851]">Sort by:</span>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                  <SelectItem value="name-z-a">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 200) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-1 bg-[#e6dfd3] text-[#5c4f3c] px-3 py-1 rounded-full text-sm"
                >
                  <span className="capitalize">{category.replace("-", " ")}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0"
                    onClick={() => handleCategoryChange(category)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              ))}

              {searchQuery && (
                <div className="flex items-center gap-1 bg-[#e6dfd3] text-[#5c4f3c] px-3 py-1 rounded-full text-sm">
                  <span>"{searchQuery}"</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0" onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              )}

              {(priceRange[0] > 0 || priceRange[1] < 200) && (
                <div className="flex items-center gap-1 bg-[#e6dfd3] text-[#5c4f3c] px-3 py-1 rounded-full text-sm">
                  <span>
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0" onClick={() => setPriceRange([0, 200])}>
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              )}
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-[#8c7851] mb-4">
                <ShoppingBag className="h-12 w-12 mx-auto" />
              </div>
              <h2 className="text-xl font-medium text-[#5c4f3c] mb-2">No products found</h2>
              <p className="text-[#8c7851] mb-6 max-w-md">
                We couldn't find any products matching your current filters. Try adjusting your search or filters.
              </p>
              <Button onClick={clearFilters} className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                    <div className="text-xs text-[#8c7851] mb-1 capitalize">{product.category.replace("-", " ")}</div>
                    <Link href={`/products/${product.id}`} className="font-medium text-[#5c4f3c] hover:underline mb-1">
                      {product.name}
                    </Link>
                    <p className="text-sm text-[#8c7851] line-clamp-2 mb-2">{product.description}</p>
                    <div className="mt-auto font-medium">${product.price.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
