import { MdOutlineEmail } from "react-icons/md";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Connect with <span className="text-purple">me</span>!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {/* Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals. */}
        </p>
        

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-8">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={24} height={24} />
              </a>
            </div>
            
          ))}
          <div className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a href="mailto:stanley.chen021@gmail.com">
            <MdOutlineEmail size={40} className="text-white" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
