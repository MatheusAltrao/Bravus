interface TimelineWeekProps {
    day: string;
    typeFirst: string;
    timeFirst: string;
    typeSecond: string;
    timeSecond: string;
    typeThird: string;
    timeThird: string;
}

const TimelineWeek = ({
    day,
    typeFirst,
    timeFirst,
    typeSecond,
    timeSecond,
    typeThird,
    timeThird,
}: TimelineWeekProps) => {
    return (
        <div className='flex flex-col space-y-5 w-[180px] '>
            <h3 className='text-center font-medium text-4xl'>{day}</h3>
            <div className='flex flex-col space-y-4'>
                <div className='border border-zinc-400 rounded w-full h-[100px] flex items-center justify-center flex-col gap-1'>
                    <div>
                        <p className='text-sm'>{typeFirst}</p>
                    </div>
                    <div>
                        {' '}
                        <p className='font-bold text-base'>{timeFirst}</p>
                    </div>
                </div>
                <div className='border border-zinc-400 rounded w-full h-[100px] flex items-center justify-center flex-col gap-1'>
                    <div>
                        <p className='text-sm'>{typeSecond}</p>
                    </div>
                    <div>
                        <p className='font-bold text-base'>{timeSecond}</p>
                    </div>
                </div>
                <div className='border border-zinc-400 rounded w-full h-[100px] flex items-center justify-center flex-col gap-1'>
                    <div>
                        <p className='text-sm'>{typeThird}</p>
                    </div>
                    <div>
                        <p className='font-bold text-base'>{timeThird}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineWeek;
