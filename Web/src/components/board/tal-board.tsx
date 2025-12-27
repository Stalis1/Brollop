import { Board, Line } from "../../components/board/board"
import { FormSubmitSpeech } from "../form-submit-speech"

export const TalBoard = () => {
    return (
        <Board>
            <h1 className="text-4xl">Tal</h1>
            <p>Vad roligt att du hittat till detta formulär. 
                Här anmäler ni intresse för att hålla tal på Gabriella och Henriks bröllop. 
                Ungefär en månad innan bröllopet kommer toastmasters skicka ut ett uppföljningsformulär, där ni kan fylla i mer information om talet. 
                Anmälan är inte bindande och vi hör av oss i början av juni. 
                Skicka in din anmälan om tal senast den 14:e juni.</p>
                <p>Anmälan kommer ej synas för brudparet.</p>
            <Line />
            <div className="my-4 p-4 bg-peach">
                <FormSubmitSpeech />
            </div>
        </Board>
    )
}