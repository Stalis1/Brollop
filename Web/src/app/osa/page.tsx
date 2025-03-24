export default function Page(){
    return <div className="flex flex-col items-center ">
        <div className="">OSA Form!</div>
        <form action="https://docs.google.com/forms/d/e/XXXXXXX/formResponse" method="POST">
            <input type="text" name="entry.123456789" placeholder="Ditt namn" required />
            <input type="email" name="entry.987654321" placeholder="Din e-post" required />
            <select name="entry.567890123">
                <option value="Ja, jag kommer!">Ja, jag kommer!</option>
                <option value="Nej, jag kan tyvärr inte.">Nej, jag kan tyvärr inte.</option>
            </select>
            <button type="submit">Skicka OSA</button>
        </form>
    </div>
}