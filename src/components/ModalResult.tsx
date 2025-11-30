"use client";

import { IModalResultProps } from "@/types/Components";

export default function ModalResult({ result, onClose, loading, booleanResult, selected_model }: IModalResultProps) {
    const percentage = (result * 100).toFixed(2);

    const message =
        booleanResult
            ? `The user is likely to have subscribed to a long-term deposit using the ${selected_model === "deep_learning" ? "Deep Learning" : "Machine Learning"} model.`
            : `The user is unlikely to have subscribed to a long-term deposit using the ${selected_model === "deep_learning" ? "Deep Learning" : "Machine Learning"} model.`;

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 text-center relative">
                    <div className="loader mb-4"></div>
                    <div className="text-xl font-semibold text-black">Loading...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 text-center relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-black font-bold text-xl hover:text-[#e61d00] transition"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-black mb-4">Prediction Result</h2>

                <p className="text-4xl font-extrabold text-[#e61d00] mb-2">{percentage}%</p>

                <p className="text-black font-semibold">{message}</p>

                <button
                    onClick={onClose}
                    className="mt-6 bg-[#e61d00] text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
