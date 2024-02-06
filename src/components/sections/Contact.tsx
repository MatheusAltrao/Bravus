import { Mail, MapPin, Phone, Pin } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
    return (
        <section
            id='contact'
            className='flex flex-col lg:flex-row  items-start lg:items-center justify-between max-w-[1000px] mr-auto '
        >
            <div className='flex items-start flex-col max-w-[400px] gap-8'>
                <div className='space-y-1'>
                    <h2 className='title text-left  '>
                        Entre em contato com a gente!
                    </h2>
                    <p className='description text-left '>
                        Se você está interessado em aprender Jiu Jitsu,
                        esclareceremos suas dúvidas, estamos localizados em Três
                        Lagoas, prontos para ouvir você.
                    </p>
                </div>
                <div>
                    <Link
                        target='_blank'
                        href=' https://wa.me//556792769576?text=Quero%20agendar%20a%20minha%20aula%20de%20Jiu%20Jitsu'
                    >
                        <button className='btn-1 mt-auto'>AGENDAR AULA!</button>
                    </Link>
                </div>
            </div>

            <div className='flex items-start justify-center gap-8 '>
                <div className='flex items-start justify-start   gap-5 flex-col w-full'>
                    <div className='flex items-center gap-2'>
                        <MapPin size={22} />{' '}
                        <p className=' text-base lg:text-lg text-primary opacity-80'>
                            Eloy chaves, 999
                        </p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <Phone size={22} />{' '}
                        <p className=' text-base lg:text-lg text-primary opacity-80'>
                            (67) 99999-9999
                        </p>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <Mail size={22} />{' '}
                        <p className=' text-base lg:text-lg text-primary opacity-80'>
                            bravus@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
