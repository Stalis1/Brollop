import { Board, BoardLink, BulletPoints, Line, Section } from './board';

export const InformationBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Information</h1>
            <Line />
            <Section title="Tid och plats">
                <BulletPoints points={['Adress: Fredriksrovägen 85, 244 91 Kävlinge', 'Datum: 1 juli 2026', 'Tid: TBD']} />
            </Section>
            <Line />
            <Section title="Klädkod">
                <p>
                    Kavaj -{' '}
                    <BoardLink
                        link={
                            'https://www.kladkoder.nu/kavaj/#:~:text=vad%20kl%C3%A4dkoden%20inneb%C3%A4r%3A-,Kavaj%C2%A0%20%E2%80%93%20Herrar,-f%C3%B6r%20damer'
                        }
                        title={'vad innebär det?'}
                    />
                </p>
                Vi tycker inte klädkoden behöver vara så strikt, men vi ser gärna att ni kommer uppklädda i era snyggaste plagg! Undvik i vanlig ordning vitt,
                rött och gärna även svart. Ju färggladare desto bättre!
            </Section>
            <Line />
            <Section title="Boende">
                Det är begränsade möjligheter till boende på gården så om ni inte väljer att tälta är det hotell/BB eller liknande som gäller. Det finns lite
                ställer runtomkring på landet, annars är Lund bara ca 20 min bil bort (eller 45 min cykel för den delen).
            </Section>
            <Line />
            <Section title="Transport">Vi anordnar ingen gemensam transport.</Section>
            <Line />
            <Section title="Schema">
                <BulletPoints points={['13:00: Vigsel', '15:00: Mingel', '17:00: Middag', 'etc etc']} />
            </Section>
        </Board>
    );
};
