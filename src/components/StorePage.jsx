import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Filter, Search, X, Plus, Minus, CreditCard } from 'lucide-react'

// Product data with prices in AWG (1 USD = 1.80 AWG)
const products = [
  // Stop the Bleed Products
  {
    id: 1,
    name: "Flipper Zero",
    category: "Stop the Bleed Product Catalog",
    price: 27.00,
    salePrice: 27.00,
    awgPrice: 48.60,
    description: "Introduction of The Flipper Zero - Multi-tool device for security professionals",
    image: "/products/flipper-zero.webp",
    inStock: true
  },
  {
    id: 2,
    name: "Rip Away IFAK Pouch",
    category: "Stop the Bleed Product Catalog",
    price: 52.50,
    awgPrice: 94.50,
    description: "Tear Off Medical Pouch - Quick access medical kit pouch",
    image: "/products/ifak-pouch.webp",
    inStock: false
  },
  {
    id: 3,
    name: "Tactical Blow Out Kit Bag Medical",
    category: "Stop the Bleed Product Catalog",
    price: 37.92,
    awgPrice: 68.26,
    description: "Complete medical blow out kit for emergency response",
    image: "/products/tactical-blowout-kit.webp",
    inStock: true
  },
  {
    id: 4,
    name: "Tourniquet Holder - Gen 7 C-A-T",
    category: "Stop the Bleed Product Catalog",
    price: 18.00,
    awgPrice: 32.40,
    description: "Portable, lightweight tourniquet case - Easy to carry",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 5,
    name: "Emergency Compression Bandage",
    category: "Stop the Bleed Product Catalog",
    price: 11.60,
    awgPrice: 20.88,
    description: "Essential emergency compression bandage for bleeding control",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 6,
    name: "Chest Seal (vented)",
    category: "Stop the Bleed Product Catalog",
    price: 10.80,
    awgPrice: 19.44,
    description: "Vented chest seal for penetrating chest injuries",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 7,
    name: "North American Rescue CAT Tourniquet Gen 7 Black",
    category: "Stop the Bleed Product Catalog",
    price: 58.00,
    awgPrice: 104.40,
    description: "Official NAR Combat Application Tourniquet Generation 7",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  // AJAX Products
  {
    id: 8,
    name: "AJAX Relay",
    category: "AJAX Products",
    price: 84.00,
    awgPrice: 151.20,
    description: "AJAX smart relay for automation control",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 9,
    name: "AJAX MotionProtect Outdoor",
    category: "AJAX Products",
    price: 368.00,
    awgPrice: 662.40,
    description: "Wireless outdoor motion detector with advanced pet immunity",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 10,
    name: "Ajax LeaksProtect Water Detector",
    category: "AJAX Products",
    price: 98.00,
    awgPrice: 176.40,
    description: "Wireless water leak detector for flood prevention",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 11,
    name: "AJAX GlassProtect",
    category: "AJAX Products",
    price: 112.00,
    awgPrice: 201.60,
    description: "Wireless glass break detector with advanced algorithms",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 12,
    name: "AJAX Button",
    category: "AJAX Products",
    price: 56.00,
    awgPrice: 100.80,
    description: "Wireless panic button for emergency situations",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 13,
    name: "Ajax Dual Curtain Outdoor",
    category: "AJAX Products",
    price: 395.00,
    awgPrice: 711.00,
    description: "Outdoor dual curtain motion detector for perimeter protection",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 14,
    name: "Ajax SpaceControl White (black)",
    category: "AJAX Products",
    price: 55.00,
    awgPrice: 99.00,
    description: "Wireless key fob for system control - Black version",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 15,
    name: "Ajax SpaceControl White",
    category: "AJAX Products",
    price: 55.00,
    awgPrice: 99.00,
    description: "Wireless key fob for system control - White version",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 16,
    name: "KeyPad",
    category: "AJAX Products",
    price: 195.00,
    awgPrice: 351.00,
    description: "Touch keypad for AJAX security system management",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 17,
    name: "KeyPad Plus",
    category: "AJAX Products",
    price: 195.00,
    awgPrice: 351.00,
    description: "Advanced touch keypad with additional features",
    image: "/api/placeholder/300/300",
    inStock: true
  },
  {
    id: 18,
    name: "AJAX MotionCam Indoor",
    category: "AJAX Products",
    price: 238.00,
    awgPrice: 428.40,
    description: "Motion detector with photo verification capability",
    image: "/api/placeholder/300/300",
    inStock: true
  }
]

const categories = ["All", "Stop the Bleed Product Catalog", "AJAX Products", "ARX Home Products", "Service & Maintenance", "Amcrest Products"]

export function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    }).filter(item => item.quantity > 0))
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.awgPrice * item.quantity), 0)
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = () => {
    // This would integrate with Sentoo payment system
    console.log('Processing checkout with Sentoo...', cart)
    alert('Redirecting to Sentoo payment gateway...')
    // In production, this would call the Sentoo API
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">
                ARX Protection <span className="text-gold">Store</span>
              </h1>
              <p className="text-xl text-gray-300">
                Professional security equipment and medical supplies
              </p>
            </div>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">Cart</span>
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 text-white">
                  {cartItemCount}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 py-6 px-4 sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-gold text-black font-semibold'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
                    {product.image.includes('/products/') ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400 text-center p-8">
                        <ShoppingCart className="h-16 w-16 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">{product.name}</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-black">AWG {product.awgPrice.toFixed(2)}</span>
                    {product.salePrice && product.salePrice < product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        AWG {(product.price * 1.80).toFixed(2)}
                      </span>
                    )}
                  </div>

                  {product.inStock ? (
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full bg-gold text-black hover:bg-gold/90"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                      Sold Out
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
                <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <Card key={item.id}>
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0"></div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{item.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">AWG {item.awgPrice.toFixed(2)}</p>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-auto text-red-600 hover:text-red-700"
                                >
                                  <X className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">AWG {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-gold">AWG {cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gold text-black hover:bg-gold/90 text-lg py-6"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Checkout with Sentoo
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StorePage

