import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialSection = () => {
  return (
    <div id="section5Social" className="flex" style={{ height: '33vh' }}>
      {/* Instagram Block */}
      <a 
        href="https://www.instagram.com/PROMPTLYMOVE/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-1/3 bg-ig flex flex-col items-center justify-center transition duration-300 hover:bg-ig-hover"
      >
        <FaInstagram className="text-white text-6xl" />
        <p className="text-white text-xl sm:text-2xl md:text-3xl mt-2">Instagram</p>
      </a>

      {/* WhatsApp Block */}
      <a 
        href="http://wa.me/85254635464" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-1/3 bg-ws flex flex-col items-center justify-center transition duration-300 hover:bg-ws-hover"
      >
        <FaWhatsapp className="text-white text-6xl" />
        <p className="text-white text-xl sm:text-2xl md:text-3xl mt-2">WhatsApp</p>
      </a>

      {/* Facebook Block */}
      <a 
        href="https://www.facebook.com/promptlymovemove/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-1/3 bg-fb flex flex-col items-center justify-center transition duration-300 hover:bg-fb-hover"
      >
        <FaFacebook className="text-white text-6xl" />
        <p className="text-white text-xl sm:text-2xl md:text-3xl mt-2">Facebook</p>
      </a>
    </div>
  );
};

export default SocialSection;