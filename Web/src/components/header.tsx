import Link from "next/link";

export const Header = ({ title, subTitle }: { title?: string; subTitle?: string }) => {
    return (
        <div className="flex flex-col justify-center text-center p-4 bg-neutral-400">
            <h1 className="text-5xl">{title}</h1>
            <h2 className="text-3xl">{subTitle}</h2>
            <div className="flex flex-row gap-4 items-center justify-center pt-4">
                <MenuItem link="/" title="Home"/>
                <MenuItem link="/info" title="Information"/>
            </div>
        </div>
    );
};

const MenuItem = ({title, link}: {title: string, link: string}) => {
    return (
      <Link href={link}>
        {title}
      </Link>
    );
  };