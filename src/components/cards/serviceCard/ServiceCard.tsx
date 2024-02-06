interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
}

const ServiceCard = ({ title, subtitle, description }: ServiceCardProps) => {
    return (
        <div className='w-full md:max-w-[350px]  space-y-5 p-4 border-zinc-300 border transition-colors rounded'>
            <h3 className='text-base lg:text-2xl font-bold'>{title}</h3>
            <h4 className='text-base'>{subtitle}</h4>
            <p className=' text-sm md:text-base text-zinc-500'>{description}</p>
        </div>
    );
};

export default ServiceCard;
