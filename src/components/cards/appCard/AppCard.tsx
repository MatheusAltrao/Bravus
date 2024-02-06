interface AppCardprops {
    title: string;
    description: string;
}

const AppCard = ({ title, description }: AppCardprops) => {
    return (
        <div className='w-full  space-y-3   p-4 border-zinc-300 border  max-w-[450px] transition-colors rounded'>
            <h3 className='text-2xl font-medium max-w-[300px]'>{title}</h3>
            <p className='text-base text-zinc-500'>{description}</p>
        </div>
    );
};

export default AppCard;
