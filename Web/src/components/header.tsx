import Link from 'next/link';

const elegantContrast = {
    bg: '#3B3B3B',
    text: '#FFFFFF'
};

const softMonochrome = {
    bg: '#E89C8C',
    text: '#FFFFFF'
};

const lightAndAiry = {
    bg: '#FFFFFF',
    text: '#B35C4C'
};

const mutedEarth = {
    bg: '#A67C74',
    text: '#FFFFFF'
};

const goldAccent = {
    bg: '#D4AF37',
    text: '#3B3B3B'
};

const color = softMonochrome;

export const Header = () => {
    return (
        <div className={`flex flex-col justify-center text-center p-1 bg-[#3B3B3B] text-[#FFFFFF]`}>
            <div className="flex flex-row gap-4 items-center justify-center">
                <MenuItem link="/" title="Välkommen" />
                <MenuItem link="/2" title="Välkommen2" remove />
                <MenuItem link="/info" title="Info" />
                <MenuItem link="/osa" title="O.S.A" />
                <MenuItem link="/kontakt" title="Kontakt" />
                <MenuItem link="/onskelista" title="Önskelista" />
            </div>
        </div>
    );
};

const MenuItem = ({ title, link, remove }: { title: string; link: string; remove?: boolean }) => {
    return (
        <div>
            <Link className={remove ? 'text-red-600' : ''} href={link}>
                {title}
            </Link>
        </div>
    );
};
