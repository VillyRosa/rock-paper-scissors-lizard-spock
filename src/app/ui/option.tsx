import Image from 'next/image';

export default function Option({ name }: any) {
    return (
        <button className={name + ' w-36 h-36 rounded-full flex justify-center items-center'}>
            <div className='w-28 h-28 bg-white rounded-full flex justify-center items-center'>
                <Image 
                src={`images/icon-${name}.svg`}
                width={55}
                height={55}
                alt={name}
                />
            </div>
        </button>
    )
}