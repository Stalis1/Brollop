import { Board, Line } from './board';

export const WishlistBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Önskelista</h1>
            <Line />
            <p>
                Er närvaro räcker som present för oss ❤️.
                Skulle ni vilja ge något utöver det önskar vi oss ett bidrag till bröllopsresan alt. en upplevelse tillsammans (middagar, utflykter, spa etc.) - mat, dryck, träning och avslappning uppskattas alltid.
            </p>
            <p>
                Bidrag till bröllopsresa görs lättast genom swish till Gabriella - 0708509069 - märkt med bröllopsresa eller ett trevligt meddelande.
            </p>
        </Board>
    );
};
