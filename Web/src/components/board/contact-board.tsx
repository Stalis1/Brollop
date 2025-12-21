import { Board, BulletPoints, Line, Section } from './board';
import Image from 'next/image';

export const ContactBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Kontakt</h1>
            <Line />
            <Section title="Henrik Stålbom">
                <div className='flex flex-row justify-between'>
                    <BulletPoints points={['Telefonnummer: 0722 04 14 46', 'Epost: henrik.stalbom@hotmail.com']} />
                    <Image src={'/henrik-ski.jpg'} alt='henrik' height={200} width={120} objectFit='cover' className='self-center' />
                </div>
            </Section>
            <Line />
            <Section title="Gabriella Andersson(Stålbom?)">
                <div className='flex flex-row justify-between'>
                    <BulletPoints points={['Telefonnummer: 0708 50 90 69', 'Epost: gabriellaandersson_@hotmail.com']} />
                    <Image src={'/gabriella-wetsuit.jpg'} alt='henrik' height={200} width={120} objectFit='cover' className='self-center' />
                </div>
            </Section>
            <Line />
            <Section title="Toastmasters">
                <Section title="Henrik Ramström">
                    <BulletPoints points={['Telefonnummer: 0707 36 60 11', 'Epost: henrik.ramstroom@gmail.com']} />
                </Section>
                <Section title="Rebecca Svensson">
                    <BulletPoints points={['Telefonnummer: 0761 08 04 40', 'Epost: rebecca.svensson@kreol.se']} />
                </Section>
            </Section>
        </Board>
    );
};
