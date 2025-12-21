import { Board, Line } from "../../components/board/board"
import { FormSubmitSpeech } from "../form-submit-speech"

export const TalBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Tal</h1>
            <Line />
            <div className="my-4 p-4 bg-peach">
                <FormSubmitSpeech />
            </div>
        </Board>
    )
}