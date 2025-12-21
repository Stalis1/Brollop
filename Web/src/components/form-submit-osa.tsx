'use client';

import { useState } from 'react';
import { Line } from './board/board';

const nameId = 'entry.1451036258';
const emailId = 'entry.1624706029';
const feedbackId = 'entry.1927318134';
const allergyId = 'entry.1077835282';

const fieldName = 'name';
const fieldEmail = 'email';
const fieldFeedback = 'feedback';
const fieldAllergy = 'allergy';

const formUrl = 'https://docs.google.com/forms/u/0/d/1rQ5bDWwrt0YiBaKckmQegS-FFTi93xtcj_fRU95dylI/formResponse'

interface Application {
    name: string;
    email?: string;
    feedback: 'Ja' | 'Nej';
    allergy?: string;
}

const submit = async (applications: Application[]) => {
    const defaultEmail = applications[0].email;
    applications.forEach(async (element) => {
        const data = new URLSearchParams();
        data.append(nameId, element.name);
        data.append(emailId, element.email ?? defaultEmail);
        data.append(feedbackId, element.feedback);
        data.append(allergyId, element.allergy ?? '');
        await fetch(formUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data.toString()
        });
    });
};

const FormPerson = ({
    index,
    requiredEmail,
    onChange
}: {
    index: number;
    requiredEmail: boolean;
    onChange: (index: number, field: string, value?: string) => void;
}) => (
    <>
        <div className="flex flex-col">
            <label className="text-left font-bold">
                Namn
                <span className="text-red-500"> *</span>
            </label>
            <input
                className="bg-white p-3 rounded-sm"
                name={fieldName}
                placeholder="Namn"
                required
                onChange={(e) => onChange(index, fieldName, e.target.value)}
            />
        </div>
        <div className="flex flex-col">
            <label className="text-left font-bold">
                Epost
                {requiredEmail && <span className="text-red-500"> *</span>}
            </label>
            <input
                className="bg-white p-3 rounded-sm"
                name={fieldEmail}
                placeholder="Epost"
                type="email"
                required={requiredEmail}
                onChange={(e) => onChange(index, fieldEmail, e.target.value)}
            />
        </div>
        <div className="flex flex-col">
            <label className="text-left font-bold">Allergier/Specialkost</label>
            <input className="bg-white p-3 rounded-sm" name={fieldAllergy} onChange={(e) => onChange(index, fieldAllergy, e.target.value)} />
        </div>
        <div className="flex flex-col">
            <label className="text-left font-bold">Kommer du?</label>
            <select className="bg-white p-3 rounded-sm" name="feedback" required onChange={(e) => onChange(index, fieldFeedback, e.target.value)}>
                <option value="Ja">Ja, jag kommer!</option>
                <option value="Nej">Nej, jag kan tyvärr inte.</option>
            </select>
        </div>
    </>
);

export const FormSubmitOSA = () => {
    const [submitted, setSubmitted] = useState(false);
    const [applications, setApplications] = useState<Application[]>([{ name: '', email: '', feedback: 'Ja' }]);

    const handleAddApplication = () => {
        setApplications([...applications, { name: '', email: undefined, feedback: 'Ja' }]);
    };

    const handleInputChange = (index: number, field: string, value: string) => {
        const updated = [...applications];
        updated[index] = { ...updated[index], [field]: value };
        setApplications(updated);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await submit(applications);
        setSubmitted(true);
    };

    return submitted ? (
        <div>
            <p>Tack för ert svar!</p>
        </div>
    ) : (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
                {applications.map((x, index) => {
                    return (
                        <div key={index}>
                            {index > 0 && <Line />}
                            <FormPerson requiredEmail={index === 0} index={index} onChange={handleInputChange} />
                        </div>
                    );
                })}
                <div className="flex justify-between items-center mt-4">
                    <button className="bg-white p-2 rounded-sm cursor-pointer font-bold border" type="button" onClick={handleAddApplication}>
                        Lägg till en person
                    </button>
                    <button className="bg-white p-2 rounded-sm cursor-pointer font-bold border" type="submit">
                        Skicka
                    </button>
                </div>
            </div>
        </form>
    );
};
