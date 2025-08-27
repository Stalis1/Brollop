import Image from 'next/image';
import { Countdown } from '../components/countdown';
import BackgroundImage from '../components/image-with-text';

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            {/* <BackgroundImage imageSrc="Smile.jpg" height={800} text="sadin dsdsa jnsda nj">
                <div className="grid grid-cols-2">
                    <div />
                    <div>
                        <div className="text-3xl text-dark">01 juli 2026</div>
                        <Countdown targetDate="2026-07-01 12:00:00" textColor="dark" />
                    </div>
                </div>
            </BackgroundImage> */}
            <Image className="m-4" src={'/SmileCropped.jpg'} alt={'alt'} width={700} height={450} />
            <div className="text-3xl">01 juli 2026</div>
            <Countdown targetDate="2026-07-01 12:00:00" />
        </div>
    );
}
