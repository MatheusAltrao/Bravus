import TimelineWeek from '../cards/timelineWeek/TimelineWeek';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion';

const Timeline = () => {
    return (
        <section id='timeline'>
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
            <div className=' hidden lg:flex items-end justify-center flex-wrap gap-4'>
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

            <div className='flex items-start  lg:hidden justify-center w-full flex-col gap-4'>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Segunda-Feira</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Kimono 17:30 às 19:00
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Terça-Feira</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary  rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Kids 16:00 às 17:00
                                </p>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    Kimono 17:30 às 19:00
                                </p>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    Kimono 19:30 às 20:30
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Quarta-Feira</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Kimono 17:30 às 19:00
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Quinta-Feira</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary  rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Kids 16:00 às 17:00
                                </p>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    Kimono 17:30 às 19:00
                                </p>
                            </div>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    Nogi 19:30 às 20:30
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Sexta-Feira</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Nogi 18:00 às 19:00
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className='w-full' type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>Sábado</AccordionTrigger>
                        <AccordionContent className='flex items-start flex-col gap-3'>
                            <div className='flex items-center  gap-2'>
                                <div className='w-2 h-2 bg-primary rounded-full' />
                                <p className='opacity-80'>
                                    {' '}
                                    Livre 16:00 às 17:00
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Timeline;
