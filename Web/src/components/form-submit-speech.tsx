'use client';

import { useState } from 'react';

const nameId = 'entry.767727627';
const emailId = 'entry.403355830';
const phoneNumberId = 'entry.382199556'

const formUrl = 'https://docs.google.com/forms/u/0/d/1O0rrYuxnjeqYudBQYsKbbtRTxxLANRFbSqY2eTK_HyU/formResponse'

interface Application {
    name: string;
    email?: string;
    phoneNumber?: string
}

const submit = async (application: Application) => {
    const data = new URLSearchParams();
    data.append(nameId, application.name);
    data.append(emailId, application.email);
    data.append(phoneNumberId, application.phoneNumber);
    await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString()
    });
};

export const FormSubmitSpeech = () => {
    const [submitted, setSubmitted] = useState(false);
    const [application, setApplication] = useState<Application>({ name: '', email: '', phoneNumber: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await submit(application);
        setSubmitted(true);
    };

    return submitted ? (
        <div>
            <p>Tack för ert svar!</p>
        </div>
    ) : (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col">
                    <label className="text-left font-bold">
                        Namn
                        <span className="text-red-500"> *</span>
                    </label>
                    <input
                        className="bg-white p-3 rounded-sm"
                        placeholder="Namn"
                        required
                        onChange={(e) => setApplication({...application, name : e.target.value})}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-left font-bold">
                        Epost
                        <span className="text-red-500"> *</span>
                    </label>
                    <input
                        className="bg-white p-3 rounded-sm"
                        placeholder="Epost"
                        type="email"
                        required
                        onChange={(e) => setApplication({...application, email : e.target.value})}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className="text-left font-bold">
                        Telefonnummer
                        <span className="text-red-500"> *</span>
                    </label>
                    <input
                        className="bg-white p-3 rounded-sm"
                        placeholder="Telefonnummer"
                        type="tel"
                        pattern="^[0-9+\s()-]{6,20}$"
                        required
                        onChange={(e) => setApplication({...application, phoneNumber : e.target.value})}
                    />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-white p-2 rounded-sm cursor-pointer font-bold border" type="submit">
                        Skicka
                    </button>
                </div>
            </div>
        </form>
    );
};
