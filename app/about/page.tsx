import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-[#5c4f3c] mb-6 text-center">About Me</h1>

        <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-[#f8f5f0] mb-8">
          <Image
            src="/placeholder.svg?height=600&width=900"
            alt="Designer working on vintage-inspired designs"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif text-[#5c4f3c] mb-4">Crafting Digital Experiences with a Vintage Touch</h2>

          <p className="text-[#8c7851] mb-6">
            With 2 years of experience in web design and development, I specialize in creating interactive and engaging
            digital experiences that blend vintage aesthetics with modern functionality.
          </p>

          <p className="text-[#8c7851] mb-6">
            My approach combines minimalistic design principles with high-end, trendy elements to create sophisticated
            and professional websites that stand out. I believe in the power of thoughtful design to communicate brand
            stories and connect with audiences.
          </p>

          <h2 className="text-2xl font-serif text-[#5c4f3c] mt-10 mb-4">My Design Philosophy</h2>

          <p className="text-[#8c7851] mb-6">
            I draw inspiration from the elegance and craftsmanship of bygone eras, infusing modern digital experiences
            with the warmth and character of vintage design. Every project I undertake is guided by a commitment to
            creating interfaces that are not only visually appealing but also intuitive and accessible.
          </p>

          <p className="text-[#8c7851] mb-6">
            My work is characterized by attention to detail, from typography choices that evoke nostalgia to color
            palettes that balance vintage charm with contemporary clarity. I believe that the most effective designs
            tell a story and create an emotional connection with users.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-[#f8f5f0] p-6 rounded-lg">
              <h3 className="text-xl font-serif text-[#5c4f3c] mb-3">Skills</h3>
              <ul className="space-y-2 text-[#8c7851]">
                <li>Responsive Web Design</li>
                <li>UI/UX Design</li>
                <li>Front-end Development</li>
                <li>E-commerce Solutions</li>
                <li>Brand Identity</li>
              </ul>
            </div>

            <div className="bg-[#f8f5f0] p-6 rounded-lg">
              <h3 className="text-xl font-serif text-[#5c4f3c] mb-3">Tools & Technologies</h3>
              <ul className="space-y-2 text-[#8c7851]">
                <li>HTML, CSS, JavaScript</li>
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Figma & Adobe Creative Suite</li>
                <li>Shopify & WooCommerce</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-[#5c4f3c] mt-10 mb-4">The Vintage Treasures Story</h2>

          <p className="text-[#8c7851] mb-6">
            Vintage Treasures began as a passion project, born from my love of antique aesthetics and the stories they
            tell. What started as a personal collection of vintage-inspired designs has grown into a curated online
            marketplace where the charm of the past meets the convenience of modern e-commerce.
          </p>

          <p className="text-[#8c7851] mb-6">
            Each product in our collection is carefully selected to bring a touch of nostalgia and timeless elegance to
            everyday life. We believe that surrounding ourselves with objects that have character and history enriches
            our living spaces and creates a more meaningful connection to our environment.
          </p>

          <div className="flex justify-center mt-10">
            <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
