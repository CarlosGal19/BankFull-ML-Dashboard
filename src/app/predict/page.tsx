import Form from "@/components/Form";
import { IFormOptions } from "@/types/form";

async function fetchFormData() {
    const res = await fetch('http://89.116.191.188:5000/form_options', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'force-cache',
    });

    return res.json();
}

export default async function Page() {

    const formData: IFormOptions = await fetchFormData();

    return (
        <main className="w-full flex flex-col justify-center items-center">
            <Form formOptions={formData} />
        </main>
    )
}
