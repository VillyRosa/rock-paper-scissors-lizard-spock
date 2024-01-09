import Image from 'next/image';

export default function RulesAlert() {
    return (
        <div className="absolute z-10 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className='p-4 bg-white rounded-md'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-blue-800 font-black'>RULES</h1>
                    <button>
                        <Image
                        src='/images/icon-close.svg'
                        width={20}
                        height={20}
                        alt='closeBtn'
                        />
                    </button>
                </div>
                <Image
                src='/images/image-rules-bonus.svg'
                width={400}
                height={400}
                alt='rules'
                />
            </div>
        </div>
    )
}