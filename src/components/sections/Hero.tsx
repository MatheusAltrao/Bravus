import Link from 'next/link';

const Hero = () => {
    return (
        <section
            className='h-[92vh]   flex flex-col items-center justify-center '
            id='hero'
        >
            <header className='space-y-8'>
                <h2 className=' text-center md:leading-[60px] font-semibold  text-3xl lg:text-[48px] '>
                    Bem-vindo à Academia <br />{' '}
                    <span className='font-black'>BRAVUS</span> !
                </h2>
                <p className='description text-center'>
                    Junte-se a nós e faça parte da nossa comunidade de atletas
                    dedicados. Desperte o lutador dentro de você!
                </p>
            </header>

            <Link
                target='_blank'
                href=' https://wa.me//556792769576?text=Quero%20agendar%20a%20minha%20aula%20de%20Jiu%20Jitsu'
            >
                <button className='btn-1'>COMEÇAR AGORA!</button>
            </Link>
        </section>
    );
};

export default Hero;
