import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { CreditCard, Shield, CheckCircle } from 'lucide-react'

/**
 * Sentoo Payment Integration Component
 * 
 * This component integrates with Sentoo payment API
 * API Token: KlXw6TvrPc0C6aR0WOqJFg
 * Documentation: https://developer.sentoo.io/
 */

const SENTOO_API_URL = 'https://api.sentoo.io' // Replace with actual API endpoint
const SENTOO_TOKEN = 'KlXw6TvrPc0C6aR0WOqJFg'

export function SentooPayment({ serviceType, amount, description }) {
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handlePayment = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Step 1: Create transaction via Sentoo API
      const response = await fetch(`${SENTOO_API_URL}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SENTOO_TOKEN}`
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'AWG', // Aruban Florin
          description: description,
          customer: {
            name: customerInfo.name,
            email: customerInfo.email,
            phone: customerInfo.phone
          },
          metadata: {
            service_type: serviceType,
            company: 'ARX Protection'
          }
        })
      })

      const data = await response.json()

      if (response.ok) {
        // Step 2: Redirect to Sentoo payment page or show QR code
        if (data.payment_url) {
          window.location.href = data.payment_url
        } else if (data.qr_code) {
          setPaymentStatus({ type: 'qr_code', data: data.qr_code })
        }
      } else {
        setPaymentStatus({ type: 'error', message: data.message || 'Payment failed' })
      }
    } catch (error) {
      console.error('Payment error:', error)
      setPaymentStatus({ type: 'error', message: 'Unable to process payment. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="h-6 w-6 text-gold" />
          <CreditCard className="h-6 w-6 text-gold" />
        </div>
        <CardTitle className="text-2xl">Secure Payment</CardTitle>
        <CardDescription>
          Complete your {serviceType} payment securely with Sentoo
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!paymentStatus ? (
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Service</label>
              <Input value={description} disabled className="bg-gray-50" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Amount</label>
              <Input 
                value={`AWG ${amount.toFixed(2)}`} 
                disabled 
                className="bg-gray-50 text-lg font-semibold" 
              />
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-3">Customer Information</h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+297 XXX XXXX"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gold text-black hover:bg-gold/90 text-lg py-6"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `Pay AWG ${amount.toFixed(2)}`
              )}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              <Shield className="h-3 w-3 inline mr-1" />
              Secured by Sentoo - PCI Compliant Payment Processing
            </p>
          </form>
        ) : paymentStatus.type === 'error' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">❌</span>
            </div>
            <h3 className="text-lg font-semibold text-red-600 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-4">{paymentStatus.message}</p>
            <Button onClick={() => setPaymentStatus(null)} variant="outline">
              Try Again
            </Button>
          </div>
        ) : paymentStatus.type === 'success' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-600 mb-2">Payment Successful!</h3>
            <p className="text-gray-600">Thank you for choosing ARX Protection</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

// Example usage components for different services

export function ConsultationPayment() {
  return (
    <SentooPayment
      serviceType="Security Consultation"
      amount={250.00}
      description="Professional Security Assessment & Consultation"
    />
  )
}

export function AlarmSystemPayment() {
  return (
    <SentooPayment
      serviceType="Ajax Alarm System"
      amount={1500.00}
      description="Ajax Alarm System Installation & Setup"
    />
  )
}

export function TrainingPayment() {
  return (
    <SentooPayment
      serviceType="Security Training"
      amount={500.00}
      description="Professional Security Training Program"
    />
  )
}

