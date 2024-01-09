import Image from 'next/image';
import { getScore } from '../lib/data';

export default function Header() {
    const score = getScore();

    return (
        <header className='w-1/2 px-6 py-4 border-2 border-gray-400 rounded-2xl flex justify-between items-center'>
            <Image
            src="/images/logo-bonus.svg"
            width={110}
            height={110}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className='w-1/5 h-full bg-white rounded flex flex-col justify-center items-center'>
                <p className='text-blue-600 font-bold tracking-wider'>SCORE</p>
                <h1 className='text-6xl font-bold text-gray-600'>{score}</h1>
            </div>
        </header>
    )
}