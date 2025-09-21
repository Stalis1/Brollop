import { GoogleFormSubmit } from '../google-form-submit';
import { Board, Line } from './board';

export const OsaBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Osa</h1>
            OBS: lägg till allergier
            <Line />
            <div className="my-4 p-4 bg-peach">
                <GoogleFormSubmit />
            </div>
        </Board>
    );
};
