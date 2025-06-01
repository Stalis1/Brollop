import { GoogleFormSubmit } from '../../components/google-form-submit';

export default function Page() {
    return (
        <div className="flex flex-col items-center pt-4">
            <h1 className="text-4xl pb-4">OSA</h1>
            <GoogleFormSubmit />
        </div>
    );
}
