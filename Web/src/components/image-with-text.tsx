import Image from "next/image";

interface ImageWithTextProps {
  imageSrc: string;
  text: string;
  height: number;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<ImageWithTextProps> = ({ imageSrc, height, children }) => {
  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      <Image 
        src={`/${imageSrc}`}  // Reference the public folder here
        alt={"Background image"} 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-xl font-bold p-4">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
