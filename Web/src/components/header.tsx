import Link from 'next/link';

export const Header = () => {
    return (
        <div className={`justify-center text-center p-2 bg-[#f1e9de] text-black`}>
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                <MenuItem link="/" title="Välkommen" />
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
