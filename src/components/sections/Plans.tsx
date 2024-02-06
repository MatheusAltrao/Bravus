import PlanCard from '../cards/planCard/PlanCard';

const Plans = () => {
    return (
        <section id='plans'>
            <header>
                <h2 className='title text-left md:text-center '>
                    O Plano perfeito para Você
                </h2>
                <p className='description text-left md:text-center'>
                    Oferecemos três emocionantes planos para atender às diversas
                    necessidades e aspirações dos nossos alunos.
                </p>
            </header>

            <div className='flex items-center gap-8 justify-center flex-wrap'>
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>
        </section>
    );
};

export default Plans;
