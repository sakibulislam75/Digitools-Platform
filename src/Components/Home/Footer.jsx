import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 py-16">
      <div className="w-10/12 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start text-center md:text-left">

  <div className="space-y-4 flex flex-col items-center md:items-start">
    <h2 className="text-white text-2xl font-bold">DigiTools</h2>
    <p className="text-sm leading-6 max-w-xs">
      Premium digital tools for creators, professionals, and businesses.
      Work smarter with our suite of powerful tools.
    </p>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-white font-semibold mb-4">Product</h3>
    <ul className="space-y-2 text-sm">
      <li>Features</li>
      <li>Pricing</li>
      <li>Templates</li>
      <li>Integrations</li>
    </ul>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-white font-semibold mb-4">Company</h3>
    <ul className="space-y-2 text-sm">
      <li>About</li>
      <li>Blog</li>
      <li>Careers</li>
      <li>Press</li>
    </ul>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-white font-semibold mb-4">Resources</h3>
    <ul className="space-y-2 text-sm">
      <li>Documentation</li>
      <li>Help Center</li>
      <li>Community</li>
      <li>Contact</li>
    </ul>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-white font-semibold mb-3">Social Links</h3>
    <div className="flex gap-3">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
        <FaYoutube />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
        <FaFacebookF />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
        <FaTwitter />
      </div>
    </div>
  </div>

</div>


        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
