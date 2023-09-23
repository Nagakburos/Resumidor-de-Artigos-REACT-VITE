import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <a
          href="https://github.com/Nagakburos"
          target="_blank"
          rel="noopener noreferrer"
          className="black_btn"
        >
          GitHub
        </a>
      </nav>
      <h1 className="head_text">
        Resuma <br /> Artigos com <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifique sua vida com RESUM, um resumidor de artigos que transforma
        textos longos em resumos claros e concisos!
      </h2>
    </header>
  );
};

export default Hero;
