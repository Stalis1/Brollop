import Link from 'next/link';
export const Board = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col bg-peach-light rounded-2xl gap-2 text-dark text-center max-w-lg min-w-md mx-auto px-4 break-words">{children}</div>
);

export const Line = () => <hr className="h-px bg-peach-dark/20 border-0" />;

export const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-1 text-center">
            <h2 className="text-2xl">{title}</h2>
            {children}
        </div>
    );
};

export const BulletPoints = ({ points }: { points: string[] }) => {
    return (
        <div className="p-2">
            <ul>
                {points.map((x, index) => {
                    return <BulletPoint key={`point-${index}`} text={x} />;
                })}
            </ul>
        </div>
    );
};

export const BulletPoint = ({ text }: { text: string }) => {
    return (
        <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-neutral-800"></span>
            <span>{text}</span>
        </li>
    );
};

export const BoardLink = ({ link, title }: { link: string; title: string }) => {
    return (
        <Link className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href={link}>
            {title}
        </Link>
    );
};
