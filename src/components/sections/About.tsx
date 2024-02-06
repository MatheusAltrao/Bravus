import Image from 'next/image';
import Logo from '../../../public/logoCircle.png';

const About = () => {
    return (
        <section id='about'>
            <div className='flex items-center justify-between md:flex-row flex-col-reverse gap-8'>
                <div className=' space-y-4 lg:space-y-8'>
                    <h2 className='title'>Sobre nós</h2>
                    <p className='description max-w-[500px]'>
                        Na Academia <span className='font-black'>Bravus</span>,
                        localizados em Três lagoas, acreditamos que o Jiu-Jitsu
                        não é apenas um esporte, mas sim um estilo de vida.
                        Nossos instrutores experientes estão prontos para
                        guiá-lo através das técnicas mais avançadas, enquanto
                        você fortalece seu corpo e mente. Prepare-se para
                        superar desafios e conquistar vitórias dentro e fora do
                        tatame.
                    </p>
                </div>

                <Image
                    className='about-image  object-contain w-full max-w-[500px] h-[427px] '
                    width={400}
                    height={380}
                    alt=''
                    src={Logo}
                    objectFit='contain'
                />
            </div>
        </section>
    );
};

export default About;
