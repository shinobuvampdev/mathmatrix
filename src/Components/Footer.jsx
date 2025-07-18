import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Telepathy IT Solutions
          </h2>
          <p className="mt-2 text-gray-400">
            Building cutting-edge Web and Mobile Applications for Businesses and
            Consumers alike.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>

          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5 text-blue-400" />
            <span>support@telepathystudios.icu</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-blue-400" />
            <span>+91 8902161213</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPinIcon className="h-5 w-5 text-blue-400 mt-1" />
            9B/1, Kenaram Ganguly Rd, Paschim Barisha
            <br />
            Kolkata, West Bengal 700008
            <br />
            India
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-white">
                Our Solutions
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Telepathy IT Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
