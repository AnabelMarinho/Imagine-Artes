import { Instagram, Music2, PhoneCall } from 'lucide-react';
import React from 'react';

const Contato = () => {
  return (
    <div className="bg-preto flex w-[800px] h-[450px] sm:h-[300px] flex-col sm:flex-row  shadow-lg relative z-10">
      <div className="absolute inset-0 w-full h-[50%] bg-custom-gradient  clip-triangle -z-10"></div>
      <div className="h-full sm:w-[40%] flex flex-col justify-start sm:justify-center sm:items-center text-branco py-4 sm:py-0">
        <img src='/img/logo.jpeg' className='w-[60px] sm:w-[150px] ml-4 sm:ml-0 rounded-full border border-branco mt-2' />
         <p className='sm:hidden text-5xl ml-4 mt-10  text-shadow'>Imagine<br /> Artes</p>
      </div>

      <div className="h-full sm:w-[60%] flex sm:justify-center ml-4 sm:ml-0 items-center py-4 sm:py-0">
        <div className="flex flex-col space-y-2 text-preto">
          <p className="flex items-center space-x-2  bg-amarelo hover:bg-custom-gradient p-2 rounded-sm">
            <a
              href="https://wa.me/8481680840"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 "
            >
              <PhoneCall className='w-5 h-5'/>
              <span>(84) 8168-0840</span>
            </a>
          </p>
          <p className="flex items-center space-x-2 bg-amarelo hover:bg-custom-gradient p-2 rounded-sm">
            <a
              href="https://instagram.com/imagineartess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Instagram className='w-5 h-5'/>
              <span>Instagram</span>
            </a>
          </p>
          <p className="flex items-center space-x-2 bg-amarelo hover:bg-custom-gradient p-2 rounded-sm">
            <a
              href="https://www.tiktok.com/@imagineaartes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Music2 className='w-5 h-5'/>
              <span>TikTok</span>
            </a>
          </p>
        </div>
        
      </div>
      <div className="absolute bottom-0 h-[2px] w-full bg-custom-gradient"></div>
    </div>
  );
};

export default Contato;
