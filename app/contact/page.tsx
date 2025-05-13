import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFDF0]">
      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our initiatives or want to get involved? Send
              us a message and we'll get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your full name" />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-[#2f4858] hover:bg-[#1e2f38] text-white"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Reach out using any of the contact
                methods below or visit our office.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#CCD5AE] p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-[#2F4858]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 mt-1">
                      3393 NY-6, South New Berlin, NY 13843
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#CCD5AE] p-3 rounded-full">
                    <Mail className="w-5 h-5 text-[#2F4858]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mt-1">info@pledge4peace.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#CCD5AE] p-3 rounded-full">
                    <Phone className="w-5 h-5 text-[#2F4858]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600 mt-1">+1 862-666-1636</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Statement Box */}
            <div className="mt-12 bg-[#CCD5AE] p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#2F4858]">
                Our Mission
              </h3>
              <p className="text-[#2F4858]">
                Pledge4Peace.org advocates for peace, democracy, and equal
                rights for all, regardless of religion, color, ethnicity, gender
                etc. Our mission is to strengthen global democracy by inspiring
                the peace-loving silent majority. Operated entirely by peace
                volunteers, we do not accept donations for ourselves but
                encourage pledges and contributions to political parties ranked
                high on the Peace and Democracy Index.
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-lg overflow-hidden h-[400px] relative bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Map will be integrated here</p>
        </div>
      </div>
    </main>
  );
}
