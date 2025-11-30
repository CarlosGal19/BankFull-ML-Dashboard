"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { predictSchema } from "@/schemas/predict.schema";
import { IFormOptions, IPredictForm } from "@/types/form";
import axiosInstance from "@/config/axios";
import { useState } from "react";
import ModalResult from "./ModalResult";

export default function PredictForm({ formOptions }: { formOptions: IFormOptions }) {

    const [loading, setLoading] = useState<boolean>(false);
    const [predictionResult, setPredictionResult] = useState<number>(-1);
    const [booleanPrediction, setBooleanPrediction] = useState<boolean | null>(null);
    const [selectedModel, setSelectedModel] = useState<"machine_learning" | "deep_learning">("machine_learning");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IPredictForm>({
        resolver: zodResolver(predictSchema),
    });

    const handleToggleModel = () => {
        const newModel = selectedModel === "machine_learning" ? "deep_learning" : "machine_learning";
        setSelectedModel(newModel);
    }

    const onSubmit = async (data: IPredictForm) => {
        try {

            setLoading(true);

            const dataToSend = { ...data };

            const month_id = data.contact_date ? new Date(data.contact_date).getMonth() + 2 : undefined;

            if (month_id) {
                dataToSend.month_id = month_id;
            }

            const day = data.contact_date ? new Date(data.contact_date).getDate() + 1 : undefined;

            if (day) {
                dataToSend.day = day;
            }

            dataToSend.selected_model = selectedModel;

            const res = await axiosInstance.post("/prediction", dataToSend);
            const predictedValue = res.data.predicted_value;
            const booleanPrediction = res.data.final_result;
            const selected_model = res.data.selected_model;

            setPredictionResult(predictedValue);
            setBooleanPrediction(booleanPrediction);
            setSelectedModel(selected_model);

        } catch {
            alert("An error occurred while making the prediction. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if ((predictionResult !== -1 && booleanPrediction !== null) || loading) {
        return <ModalResult loading={loading} result={predictionResult} booleanResult={booleanPrediction} selected_model={selectedModel} onClose={() => setPredictionResult(-1)} />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl"
            >
                <h2 className="text-4xl font-semibold mb-6 text-center text-black">
                    Let&apos;s make a Predict!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            {...register("age", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            min={16}
                            max={100}
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Balance</label>
                        <input
                            type="number"
                            {...register("balance", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            defaultValue={0}
                        />
                        {errors.balance && <p className="text-red-500 text-sm">{errors.balance.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Called Duration</label>
                        <input
                            type="number"
                            {...register("duration", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            min={1}
                        />
                        {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contacts During Campaign</label>
                        <input
                            type="number"
                            {...register("campaign", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            defaultValue={0}
                        />
                        {errors.campaign && <p className="text-red-500 text-sm">{errors.campaign.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Days since last contact</label>
                        <input
                            type="number"
                            {...register("pdays", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            defaultValue={0}
                        />
                        {errors.pdays && <p className="text-red-500 text-sm">{errors.pdays.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Previous Contacts</label>
                        <input
                            type="number"
                            {...register("previous", { setValueAs: (value: string) => Number(value) })}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                            defaultValue={0}
                        />
                        {errors.previous && <p className="text-red-500 text-sm">{errors.previous.message}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" {...register("default")} />
                        <label className="text-sm text-gray-700">Does the client have credit in default?</label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" {...register("housing")} />
                        <label className="text-sm text-gray-700">Does the client have a housing loan?</label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input type="checkbox" {...register("loan")}
                            className="w-5 h-5 border-gray-300 rounded"
                        />
                        <label className="text-sm text-gray-700">Does the client have a personal loan?</label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Current Job</label>
                        <select {...register("job_id", { setValueAs: (value: string) => Number(value) })} className="w-full mt-1 p-2 border border-black rounded-md text-black">
                            <option value="">Select...</option>
                            {
                                formOptions.jobs.map((job) => (
                                    <option key={job.id} value={job.id}>{job.name}</option>
                                ))
                            }
                        </select>
                        {errors.job_id && <p className="text-red-500 text-sm">{errors.job_id.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                        <select {...register("marital_id", { setValueAs: (value: string) => Number(value) })} className="w-full mt-1 p-2 border border-black rounded-md text-black">
                            <option value="">Select...</option>
                            <option value="1">Single</option>
                            <option value="2">Married</option>
                            <option value="3">Divorced</option>
                        </select>
                        {errors.marital_id && <p className="text-red-500 text-sm">{errors.marital_id.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Education Level</label>
                        <select {...register("education_level_id", { setValueAs: (value: string) => Number(value) })} className="w-full mt-1 p-2 border border-black rounded-md text-black">
                            <option value="">Select...</option>
                            {
                                formOptions.educations.map((education) => (
                                    <option key={education.id} value={education.id}>{education.name}</option>
                                ))
                            }
                        </select>
                        {errors.education_level_id && <p className="text-red-500 text-sm">{errors.education_level_id.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact Manner</label>
                        <select {...register("contact_id", { setValueAs: (value: string) => Number(value) })} className="w-full mt-1 p-2 border border-black rounded-md text-black">
                            <option value="">Select...</option>
                            {
                                formOptions.contacts.map((contact) => (
                                    <option key={contact.id} value={contact.id}>{contact.name}</option>
                                ))
                            }
                        </select>
                        {errors.contact_id && <p className="text-red-500 text-sm">{errors.contact_id.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contact Date</label>

                        <input
                            type="date"
                            {...register("contact_date")}
                            className="w-full mt-1 p-2 border border-black rounded-md text-black"
                        />
                        {errors.contact_date && (
                            <span className="text-red-600 text-sm mt-1">
                                {errors.contact_date.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Result in Previous Campaign</label>
                        <select {...register("poutcome_id", { setValueAs: (value: string) => Number(value) })} className="w-full mt-1 p-2 border border-black rounded-md text-black">
                            <option value="">Select...</option>
                            {
                                formOptions.poutcomes.map((poutcome) => (
                                    <option key={poutcome.id} value={poutcome.id}>{poutcome.name}</option>
                                ))
                            }
                        </select>
                        {errors.poutcome_id && <p className="text-red-500 text-sm">{errors.poutcome_id.message}</p>}
                    </div>

                    <div className="col-span-3">
                        <label className="block text-lg font-medium text-gray-700 mb-1 text-center">
                            Choose a model
                        </label>

                        <div className="flex justify-center my-1">
                            <div className="relative flex items-center gap-2">

                                <span className="text-md text-gray-600">Machine Learning</span>

                                {/* TOGGLE */}
                                <div
                                    className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 cursor-pointer transition"
                                    onClick={handleToggleModel}
                                >
                                    <div
                                        className={`
                        w-5 h-5 rounded-full transition-all duration-300
                        ${selectedModel === "machine_learning"
                                                ? "bg-blue-500 translate-x-0"
                                                : "bg-purple-600 translate-x-6"
                                            }
                    `}
                                    ></div>
                                </div>

                                <span className="text-md text-gray-600">Deep Learning</span>
                            </div>
                        </div>
                    </div>

                </div >

                <button
                    type="submit"
                    className="mt-6 w-full bg-[#e61d00] text-white py-2 px-4 rounded-md hover:bg-red-700 transition hover:cursor-pointer"
                >
                    Submit
                </button>
            </form >
        </div >
    );
}
