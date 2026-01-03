import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <header className=" w-full bg-primary fixed top-0 left-0 z-10">
      <div className="w-full max-w-[1200px] mx-auto p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="" width={36} height={36} />
          <span className="font-black text-xl lg:text-2xl">Black Ops</span>
        </div>

        <div className=" items-center gap-4 lg:flex hidden">
          <Link className="header-link " href="#hero">
            Início
          </Link>
          <Link className="header-link " href="#about">
            Sobre
          </Link>
          <Link className="header-link " href="#services">
            Serviços
          </Link>
          <Link className="header-link " href="#timeline">
            Cronograma
          </Link>
          <Link className="header-link " href="#app">
            Aplicativo
          </Link>
          {/*     <Link className='header-link ' href='#plans'>
                        Planos
                    </Link> */}
          <Link className="header-link " href="#contact">
            Contato
          </Link>
        </div>

        <Link target="_blank" href=" https://wa.me//556792769576?text=Quero%20agendar%20a%20minha%20aula%20de%20Jiu%20Jitsu">
          <button className="btn-2">AGENDAR AULA</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
