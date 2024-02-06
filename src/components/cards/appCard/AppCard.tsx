interface AppCardprops {
    title: string;
    description: string;
}

const AppCard = ({ title, description }: AppCardprops) => {
    return (
        <div className='w-full  space-y-3   p-4 border-zinc-300 border  lg:max-w-[420px] transition-colors rounded'>
            <h3 className=' text-base lg:text-2xl font-medium max-w-[260px]'>
                {title}
            </h3>
            <p className=' text-sm lg:text-base text-zinc-500'>{description}</p>
        </div>
    );
};

export default AppCard;
