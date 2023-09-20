import { logo } from '../assets';

const Hero = () => {
  return (
  <header className="w-full flex justify-center intems-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => Window.open('https://github.com/Nagakburos')}
          className="black_btn"
          >          
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Resuma <br /> Artigos com <br
        className="max-md:hidden" />
        <span
        className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">Simplifique sua vida com RESUM, um resumidor de artigos que transforma textos longos em resumos claros e concisos!
      </h2>
    </header>  
  )
}

export default Hero