import TimelineWeek from '../cards/timelineWeek/TimelineWeek';

const Timeline = () => {
    return (
        <section id='timeline' className='space-y-16'>
            <header>
                <h2 className='title text-left  md:text-center '>
                    Explore Nosso Cronograma de treinos na{' '}
                    <span className='font-bold'>BRAVUS</span>
                </h2>
                <p className='description text-left  md:text-center'>
                    Um cronograma bem planejado é essencial para garantir que
                    nossos alunos obtenham o máximo de sua experiência de
                    treinamento. Temos uma variedade de opções de aulas para
                    atende-los.
                </p>
            </header>
            <div className='flex items-end justify-center flex-wrap gap-4'>
                <TimelineWeek
                    day='Seg'
                    typeFirst=''
                    timeFirst=''
                    typeSecond='Kimono'
                    timeSecond='17:30 às 19:00'
                    typeThird=''
                    timeThird=''
                />
                <TimelineWeek
                    day='Ter'
                    typeFirst='Kids'
                    timeFirst='16:00 às 17:00'
                    typeSecond='Kimono'
                    timeSecond='17:30 às 19:00'
                    typeThird='Kimono'
                    timeThird='19:30 às 20:30'
                />
                <TimelineWeek
                    day='Qua'
                    typeFirst=''
                    timeFirst=''
                    typeSecond='Kimono'
                    timeSecond='17:30 às 19:00'
                    typeThird=''
                    timeThird=''
                />
                <TimelineWeek
                    day='Qui'
                    typeFirst='Kids'
                    timeFirst='16:00 às 17:00'
                    typeSecond='Kimono'
                    timeSecond='17:30 às 19:00'
                    typeThird='Kimono'
                    timeThird='19:30 às 20:30'
                />
                <TimelineWeek
                    day='Sex'
                    typeFirst=''
                    timeFirst=''
                    typeSecond='Nogi'
                    timeSecond='18:00 às 19:00'
                    typeThird=''
                    timeThird=''
                />
                <TimelineWeek
                    day='Sáb'
                    typeFirst='Livre'
                    timeFirst='16:00 às 17:00'
                    typeSecond=''
                    timeSecond=''
                    typeThird=''
                    timeThird=''
                />
            </div>
        </section>
    );
};

export default Timeline;
