import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <header className=' w-full bg-primary fixed top-0 left-0'>
            <div className='w-full max-w-[1200px] mx-auto p-4 text-white flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src={Logo} alt='' width={46} height={46} />
                    <span className='font-black text-2xl'>BRAVUS</span>
                </div>

                <div className=' items-center gap-4 md:flex hidden'>
                    <Link className='header-link ' href='#hero'>
                        Início
                    </Link>
                    <Link className='header-link ' href='#about'>
                        Sobre
                    </Link>
                    <Link className='header-link ' href='#services'>
                        Serviços
                    </Link>
                    <Link className='header-link ' href='#timeline'>
                        Cronograma
                    </Link>
                    <Link className='header-link ' href='#app'>
                        Aplicativo
                    </Link>
                    <Link className='header-link ' href='#plans'>
                        Planos
                    </Link>
                    <Link className='header-link ' href='#contact'>
                        Contato
                    </Link>
                </div>

                <button className='btn-2'>AGENDAR AULA</button>
            </div>
        </header>
    );
};

export default Header;
