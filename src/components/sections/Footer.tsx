import { ArrowUp, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='flex px-4 items-start lg:items-center flex-col lg:flex-row justify-between gap-4 w-full max-w-[1200px] mx-auto py-4'>
            <div className='flex items-center justify-between w-full '>
                <div className='space-y-1 text-xs md:text-sm'>
                    <p className='text-zinc-600'>
                        Desenvolvido e criado por{' '}
                        <span className='text-primary underline underline-offset-4'>
                            Matheus Altrão
                        </span>
                    </p>
                    <p className='text-zinc-600'>
                        ©️Todos os direitos reservados
                    </p>
                </div>

                <div className=' items-center md:hidden flex gap-4'>
                    <Phone size={16} />
                    <Instagram size={16} />
                </div>
            </div>

            <div className=' items-center  gap-4 hidden md:flex '>
                <div className='flex items-center  gap-2'>
                    <Phone size={16} />
                    <Instagram size={16} />
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
