"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function CartDrawer({ onClose }: { onClose: () => void }) {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-4 py-4">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Your Cart
        </h2>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-sm text-muted-foreground">
          Clear All
        </Button>
      </div>
      <Separator />

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
          <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-sm text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white" onClick={onClose}>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-4 py-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md bg-muted">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <Link href={`/products/${item.id}`} className="font-medium hover:underline" onClick={onClose}>
                          {item.name}
                        </Link>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t bg-background p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-base font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</div>
              <div className="flex flex-col gap-2">
                <Button asChild className="bg-[#8c7851] hover:bg-[#6a5a3d] text-white" onClick={onClose}>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
