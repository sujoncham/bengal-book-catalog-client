import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-gray-300 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 text-primary bg-gray-300 py-10">
            <div className="px-4">
              <h5 className="text-xl font-bold mb-6 text-green-800">
                Features
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:text-green-800"
                  >
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:text-green-800"
                  >
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:text-green-800"
                  >
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:text-green-800"
                  >
                    Stuff for developers
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h5 className="text-xl font-bold mb-6 text-green-800">
                Resources
              </h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h5 className="text-xl font-bold mb-6 text-green-800">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4">
              <h5 className="text-xl font-bold mb-6 text-green-800">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-green-800 hover:text-green-800"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:text-green-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 bg-gray-200 py-5">
            <div className="flex justify-start items-center px-5">
              <strong className="text-green-800 font-bold">
                Bengal Book Catalog
              </strong>
            </div>
            <div className="px-4">
              <h6 className="font-bold mb-2">Address</h6>
              <address className="not-italic mb-4 text-sm">
                123 6th St.
                <br />
                Melbourne, FL 32904
              </address>
            </div>
            <div className="px-4">
              <h6 className="font-bold mb-2">Free Resources</h6>
              <p className="mb-4 text-sm">
                Use our HTML blocks for <strong>FREE</strong>.<br />
                <em>All are MIT License</em>
              </p>
            </div>
            <div className="px-4">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>

              <div className="flex sm:justify-center xl:justify-start">
                <Link
                  to=""
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center p-1 text-green-800"
                >
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  to=""
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center p-2 text-green-800"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to=""
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center p-2 text-green-800"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
