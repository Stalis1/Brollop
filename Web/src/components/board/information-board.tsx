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
                    <BoardLink link={'https://www.kladkoder.nu/kavaj/#:~:text=kl%C3%A4%20dig%20i!-,Kavaj,-Kavaj%20%C3%A4r%20en'} title={'vad innebär det?'} />
                </p>
                Vi tycker inte klädkoden behöver vara så strikt, men vi ser gärna att ni kommer uppklädda i snygga plagg! Undvik i vanlig ordning vitt, rött och
                gärna även svart. Det får gärna vara färgglatt, så det är ett utmärkt tillfälle att ta fram den där orangea kostymen!
            </Section>
            <Line />
            <Section title="Boende">
                <div className="text-red-600">Kolla boenden och lägg in länkar</div>
                Det är begränsade möjligheter till boende på gården. Det hotell/BB eller liknande som gäller. Det finns lite ställen runtomkring på landet,
                annars är Lund bara ca 20 min bil bort (eller 45 min cykel).
            </Section>
            <Line />
            <Section title="Transport">Vigsel och fest är på samma plats. Transport annordnas själv.</Section>
            <Line />
            <Section title="Tal">Om du vill hålla tal behöver du kontakta toastmasters i förväg.</Section>
            <Line />
            <Section title="Schema">
                <BulletPoints
                    points={[
                        'TBD'
                        //'13:00: Vigsel', '15:00: Mingel', '17:00: Middag', 'etc etc'
                    ]}
                />
            </Section>
        </Board>
    );
};
