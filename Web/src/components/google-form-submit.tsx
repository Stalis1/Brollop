'use client';

import { useState } from 'react';

const nameField = 'entry.1451036258';
const emailField = 'entry.1624706029';
const feedbackField = 'entry.1927318134';

export const GoogleFormSubmit = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const feedback = formData.get('feedback')?.toString() || '';

        const data = new URLSearchParams();
        data.append(nameField, name);
        data.append(emailField, email);
        data.append(feedbackField, feedback);

        await fetch('https://docs.google.com/forms/u/0/d/1rQ5bDWwrt0YiBaKckmQegS-FFTi93xtcj_fRU95dylI/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data.toString()
        });

        setSubmitted(true);
    };
    return submitted ? (
        <p>Tack för ert svar!</p>
    ) : (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col">
                    <label className="text-left font-bold">Namn</label>
                    <input className="bg-white p-3 rounded-sm" name="name" placeholder="Namn" required />
                </div>
                <div className="flex flex-col">
                    <label className="text-left font-bold">Epost</label>
                    <input className="bg-white p-3 rounded-sm" name="email" placeholder="Epost" type="email" required />
                </div>
                <div className="flex flex-col">
                    <label className="text-left font-bold">Kommer du?</label>
                    <select className="bg-white p-3 rounded-sm" name="feedback" required>
                        <option value="Ja">Ja, jag kommer!</option>
                        <option value="Nej">Nej, jag kan tyvärr inte.</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="bg-white p-2 rounded-sm cursor-pointer font-bold" type="submit">
                        Skicka
                    </button>
                </div>
            </div>
        </form>
    );
};
