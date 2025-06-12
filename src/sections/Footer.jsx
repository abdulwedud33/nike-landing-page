import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <footer className="w-full bg-black padding-x padding-t pb-8 text-white py-12">
      <div className="mx-auto px-6 grid text-center sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Brand Info */}
        <div className="flex flex-col justify-center items-center">
          <img src={footerLogo} alt="Nikee Logo" className="text-center w-20" />
          <p className="text-gray-400 mt-4">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          {/* Social Media */}
          <div className="text-center mt-8">
            <h3 className="text-lg mt-4 font-semibold">Follow Us On</h3>
            <div className="flex space-x-4 mt-4 justify-center">
              {socialMedia.map((social) => (
                <div
                  key={social.alt}
                  className="text-xl w-10 h-10 flex items-center bg-white-400 justify-center rounded-full hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out"
                >
                  <img src={social.src} alt={social.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <ul className="mt-4 space-y-2">
              {category.links.map((link) => (
                <li
                  key={link.name}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Copyright */}
      <div className="flex justify-between text-gray-500 mt-10 text-sm ">
        <p>©2025 Nikee. All Rights Reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
