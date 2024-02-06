import Divider from '@/components/divider/Divider';
import { Check } from 'lucide-react';

const PlanCard = () => {
    return (
        <div className='bg-white rounded p-8 w-full md:max-w-[300px] h-[458px] flex flex-col '>
            <div>
                <p>Plano 1</p>
                <h3 className='font-bold text-2xl'>R$ 149,90</h3>
            </div>
            <div className='my-4'>
                <Divider />
            </div>

            <div className='flex flex-col gap-3 flex-1'>
                <h3>Recompensas</h3>

                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <Check size={18} />{' '}
                        <p className='text-zinc-500'>Recompensa 1</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Check size={18} />{' '}
                        <p className='text-zinc-500'>Recompensa 1</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Check size={16} />{' '}
                        <p className='text-zinc-500'>Recompensa 1</p>
                    </div>
                </div>

                <button className='btn-1 mt-auto'>COMEÇAR AGORA !</button>
            </div>
        </div>
    );
};

export default PlanCard;
