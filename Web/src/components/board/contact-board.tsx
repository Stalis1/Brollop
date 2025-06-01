import { Board, BoardLink, BulletPoints, Line, Section } from './board';

export const ContactBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Kontakt</h1>
            <Line />
            <Section title="Henrik">
                <BulletPoints points={['Telefonnummer: 0722 04 14 46', 'Epost: henrik.stalbom@hotmail.com']} />
            </Section>
            <Line />
            <Section title="Gabriella">
                <BulletPoints points={['Telefonnummer: 0708 50 90 69', 'Epost: gabriellaandersson_@hotmail.com']} />
            </Section>
            <Line />
            <Section title="Lillegårds (Bröllopslokal)">
                <BoardLink link={'https://www.lillegards.se'} title={'https://www.lillegards.se'} />
                <BulletPoints points={['Telefonnummer: 0704 48 77 06', 'Epost: hej@lillegards.se']} />
            </Section>
            <Line />
            <div className="text-red-700 flex flex-col">Blomsterpågen, Segers mat, bestman, brudtärna, toastmasters, brudföräldrar, brudgumföräldrar</div>
        </Board>
    );
};
