import { JSX } from 'react';
import { Board, BulletPoints, Line, Section } from './board';
import Image from 'next/image';

interface Person {
    title: string;
    img?: string;
}

const Person = ({person, children}: {person: Person; children: React.ReactNode }) => {
    return (
        <Section title={person.title}>
            <div className='flex flex-wrap justify-between min-w-0'>
                <div className='flex-1 min-w-0'>
                    {children}
                </div>
                {person.img && <Image 
                    src={person.img} 
                    alt='henrik' 
                    height={200} 
                    width={120} 
                    objectFit='cover' 
                    className='self-center flex-shrink-0' 
                />}
            </div>
        </Section>
    )
}

export const ContactBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Kontakt</h1>
            <Line />
            <Person person={{title: 'Henrik Stålbom', img: '/henrik-ski.jpg'}}>
                <BulletPoints points={['0722 04 14 46', 'henrik.stalbom@hotmail.com']} />
            </Person>
            <Line />
            <Person person={{title: 'Gabriella Andersson(Stålbom?)', img: '/gabriella-wetsuit.jpg'}}>
                <BulletPoints points={['0708 50 90 69', 'gabriellaandersson_@hotmail.com']} />
            </Person>
            <Line />
            <Section title="Toastmasters">
                <Person person={{title: 'Henrik Ramström', img: '/ramstrom-sausage.jpg'}}>
                    <BulletPoints points={['0707 36 60 11', 'henrik.ramstroom@gmail.com']} />
                </Person>
                <Person person={{title: 'Rebecca Svensson', img: '/rebecca-owl.jpg'}}>
                    <BulletPoints points={['0761 08 04 40', 'rebecca.svensson@kreol.se']} />
                </Person>
            </Section>
        </Board>
    );
};
