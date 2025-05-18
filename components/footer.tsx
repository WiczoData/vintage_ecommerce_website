import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f8f5f0] border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-[#5c4f3c]">Vintage Treasures</h3>
            <p className="text-sm text-[#8c7851]">
              Curated collections of timeless pieces that bring nostalgic charm to your everyday life.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#8c7851] hover:text-[#5c4f3c]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#8c7851] hover:text-[#5c4f3c]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#8c7851] hover:text-[#5c4f3c]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-[#5c4f3c]">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=home-decor" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=collectibles" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Collectibles
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-[#5c4f3c]">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#8c7851] hover:text-[#5c4f3c]">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-medium text-[#5c4f3c]">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#8c7851] shrink-0" />
                <span className="text-[#8c7851]">123 Vintage Lane, Antique City, AC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#8c7851]" />
                <span className="text-[#8c7851]">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#8c7851]" />
                <span className="text-[#8c7851]">hello@vintagetreasures.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e6dfd3]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#8c7851]">
              © {new Date().getFullYear()} Vintage Treasures. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/privacy" className="text-[#8c7851] hover:text-[#5c4f3c]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#8c7851] hover:text-[#5c4f3c]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
