const Hero = () => {
    return (
        <section
            className='h-[92vh]   flex flex-col items-center justify-center space-y-16'
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

            <button className='btn-1'>COMEÇAR AGORA!</button>
        </section>
    );
};

export default Hero;
