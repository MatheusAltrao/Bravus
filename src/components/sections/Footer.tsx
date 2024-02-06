import { ArrowUp, Instagram, Phone } from 'lucide-react';
import Link from 'next/link';
import Whatsapp from '../../../public/whats.svg';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className='flex px-4 items-start lg:items-center flex-col lg:flex-row justify-between gap-4 w-full max-w-[1200px] mx-auto py-4'>
            <div className='flex items-center justify-between w-full '>
                <div className='space-y-1 text-xs md:text-sm'>
                    <p className='text-zinc-600'>
                        Desenvolvido e criado por{' '}
                        <Link target='_blank' href=''>
                            <span className='text-primary hover:underline underline-offset-4'>
                                Matheus Altrão
                            </span>
                        </Link>
                    </p>
                    <p className='text-zinc-600'>
                        ©️Todos os direitos reservados
                    </p>
                </div>

                <div className=' items-center md:hidden flex gap-4'>
                    <Link href=''>
                        <Phone size={18} />
                    </Link>
                    <Link
                        target='_blank'
                        href='https://www.instagram.com/bravus.academy/'
                    >
                        <Instagram size={18} />
                    </Link>
                </div>
            </div>

            <div className=' items-center  gap-4 hidden md:flex '>
                <div className='flex items-center  gap-2'>
                    <Link
                        className='block w-5 h-5'
                        target='_blank'
                        href=' https://wa.me//556792769576?text=Estou%20interessado%20em%20fazer%20Jiu%20Jitsu'
                    >
                        <Image src={Whatsapp} alt='' width={18} height={18} />
                    </Link>
                    <Link
                        target='_blank'
                        href='https://www.instagram.com/bravus.academy/'
                    >
                        <Instagram size={18} />
                    </Link>
                </div>

                <a
                    className='flex items-center hover:underline hover:underline-offset-4 gap-1 text-xs md:text-sm whitespace-nowrap'
                    href='#hero'
                >
                    Voltar para o topo <ArrowUp size={16} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
