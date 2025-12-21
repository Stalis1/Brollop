import { FormSubmitOSA } from '../form-submit-osa';
import { Board, Line } from './board';

export const OsaBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">OSA</h1>
            <Line />
            <div className="my-4 p-4 bg-peach">
                <FormSubmitOSA />
            </div>
        </Board>
    );
};
