import Image from 'next/image';

interface ImageWithTextProps {
    imageSrc: string;
    text: string;
    height: number;
    className?: string;
    children?: React.ReactNode;
    aspectRatio?: number; // t.ex. 16/9
    minHeight?: number;
}

const BackgroundImage: React.FC<ImageWithTextProps> = ({ imageSrc, height, className, children, aspectRatio = 16 / 9 }) => {
    return (
        <div className={`relative w-full ${className ?? ''}`} style={{ paddingTop: `${100 / aspectRatio}%` }}>
            <Image src={`/${imageSrc}`} alt={'Background image'} layout="fill" objectFit="cover" className="absolute inset-0 transform scale-100" />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-xl font-bold p-4">{children ?? children}</div>
        </div>
    );
};

export default BackgroundImage;

//style={{ height: `${height}px` }}
