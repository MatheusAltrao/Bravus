import { Mail, MapPin, Phone, Pin } from 'lucide-react';

const Contact = () => {
    return (
        <section
            id='contact'
            className='space-y-16 flex flex-col lg:flex-row  items-start lg:items-center justify-between max-w-[1000px] mr-auto '
        >
            <div className='flex items-start flex-col max-w-[400px] gap-4'>
                <h2 className='title text-left  '>
                    Entre em contato com a gente!
                </h2>
                <p className='description text-left '>
                    Se você está interessado em aprender Jiu Jitsu,
                    esclareceremos suas dúvidas, estamos prontos para ouvir
                    você.
                </p>

                <button className='btn-1 mt-auto'>COMEÇAR AGORA !</button>
            </div>

            <div className='flex items-start justify-center gap-8 '>
                <div className='flex items-start justify-start   gap-5 flex-col w-full'>
                    <div className='flex items-start gap-2'>
                        <MapPin size={26} />{' '}
                        <p className='text-lg text-primary opacity-80'>
                            Eloy chaves, 999
                        </p>
                    </div>
                    <div className='flex items-start justify-start gap-2'>
                        <Phone size={26} />{' '}
                        <p className='text-lg text-primary opacity-80'>
                            (67) 99999-9999
                        </p>
                    </div>
                    <div className='flex items-start justify-start gap-2'>
                        <Mail size={26} />{' '}
                        <p className='text-lg text-primary opacity-80'>
                            bravus@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
