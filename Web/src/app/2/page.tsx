import { Countdown } from "../../components/countdown";
import BackgroundImage from "../../components/image-with-text";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <BackgroundImage imageSrc="devImg.png" height={600} text="sadin dsdsa jnsda nj">
                <div className="">
                    <div className="text-3xl">01 juli 2026</div>
                    <Countdown targetDate="2026-07-01 12:00:00"/>
                </div>
            </BackgroundImage>
        </div>
    );
}
