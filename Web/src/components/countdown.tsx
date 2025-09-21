'use client';
import { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string; // Format: "YYYY-MM-DD HH:mm:ss"
    textColor?: 'white' | 'dark';
    className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({ className, targetDate, textColor = 'white' }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return 'Done';
    };

    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft()); // Ensure the state is set only on the client

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]); // Dependency added to re-run effect if targetDate changes

    if (!timeLeft) return <></>;
    if (timeLeft === 'Done') return <p>Countdown finished!</p>;

    return (
        <div className={`flex flex-col items-center ${textColor === 'white' ? '' : 'text-dark'} ${className}`}>
            <h2 className="text-3xl font-bold">Dagar kvar</h2>
            <p>
                {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
            </p>
        </div>
    );
};
