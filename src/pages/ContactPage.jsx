import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your security? Get in touch for a personalized consultation
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Full Name" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" className="w-full" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="w-full" />
                  </div>
                  <div>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Service Interest</option>
                      <option>Protection Services</option>
                      <option>Security Technology</option>
                      <option>Specialized Services</option>
                      <option>Aerial & Counter-Drone</option>
                      <option>Training Courses</option>
                    </select>
                  </div>
                  <div>
                    <Textarea placeholder="Tell us about your security needs..." className="w-full min-h-32" />
                  </div>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">+297 560 2299</p>
                      <p className="text-sm text-gray-500 mt-1">24/7 Emergency Response Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-gray-600">info@arxglobalprotection.com</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Office Location</h4>
                      <p className="text-gray-600">Cumana 78R, Unit 2</p>
                      <p className="text-gray-600">Oranjestad, Aruba</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 5:00 PM AST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <a href="https://wa.me/2975602299?text=Hello%20ARX%20Protection%2C%20I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-green-900">WhatsApp</h4>
                      <p className="text-green-700 font-medium">+297 560 2299</p>
                      <p className="text-sm text-green-600 mt-1">Click to chat instantly</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

