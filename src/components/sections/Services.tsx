import ServiceCard from '../cards/serviceCard/ServiceCard';

const Services = () => {
    return (
        <section id='services'>
            <header>
                <h2 className='title text-left md:text-center'>
                    Descubra a variedade de treinamentos{' '}
                </h2>
                <p className='description text-left md:text-center'>
                    Na academia <span className='font-black'>Bravus</span>,
                    oferecemos uma ampla gama de serviços de treinamento de Jiu
                    Jitsu para atender a todas as idades e níveis de habilidade.{' '}
                </p>
            </header>

            <div className='flex items-start justify-center md:flex-row md:justify-between gap-8 flex-col'>
                <ServiceCard
                    title='Kimono'
                    subtitle='Jiu Jitsu Tradicional'
                    description='Nossas aulas com kimono são a escolha perfeita. Aprenda técnicas clássicas, aprimore sua precisão e mergulhe na rica história dessa arte marcial. '
                />

                <ServiceCard
                    title='Nogi'
                    subtitle='Desafie a Si Mesmo Sem o Kimono'
                    description='Treinando sem o uso do kimono, você se concentrará em técnicas que se aplicam a situações do mundo real. Explore um estilo de luta dinâmico e aprimore sua resistência física e mental.'
                />

                <ServiceCard
                    title='Kids'
                    subtitle='Crescendo com Confiança e Disciplina'
                    description='Aulas de Jiu Jitsu para crianças são projetadas para  a vida, incluindo respeito, trabalho em equipe e autoconfiança.'
                />
            </div>
        </section>
    );
};

export default Services;
