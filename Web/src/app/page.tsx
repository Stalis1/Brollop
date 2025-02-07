import Image from "next/image";
import { Countdown } from "../components/countdown";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <Image className="m-4" src={"/devImg.png"} alt={"alt"} width={500} height={300}/>
            <Countdown targetDate="2026-07-01 12:00:00"/>
        </div>
    );
}
