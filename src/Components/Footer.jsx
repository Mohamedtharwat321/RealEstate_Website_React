/* eslint-disable react/no-unescaped-entities */
import { assets } from "../assets/assets";

const Footer = () => {
  const x = new Date();
  return (
    <footer className="pt-10 pb-1 px-4 md:px-20 lg:px-32 bg-gray-900 w-full">
      <div className="container mx-auto text-white flex flex-col md:flex-row  justify-between items-start md:gap-5 mb-8">
        <div className="w-full md:max-w-[35%] mb-8 md:mb-0">
          <img className="mb-5" src={assets.logo_dark} alt="logo" />
          <p className="text-p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <p className="font-semibold mb-5 text-lg">Company</p>
          <ul className="text-p2 flex flex-col gap-1.5">
            <li>
              <a id="Header" className="hover:text-white font-semibold" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white font-semibold" href="#About">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white font-semibold" href="#Contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-white font-semibold" href="#">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <p className="mb-5 font-semibold text-lg">
            Subscribe to our newsletter
          </p>
          <p className="text-p2 font-medium mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center flex-wrap gap-3">
            <input
              placeholder="Enter Your Email"
              className="px-3 py-1.5 font-medium rounded  border-none outline-none bg-gray-800"
              type="email"
            />
            <button className="bg-s3 px-4 py-1.5 font-medium rounded hover:bg-s2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700 py-4 text-gray-500">
        <p>Copyright {x.getFullYear()} © Mohamed Tharwat. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
