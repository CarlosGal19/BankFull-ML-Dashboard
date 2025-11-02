"use client";

import axiosInstance from "@/config/axios";
import { IPrediction } from "@/types/Getters";
import { useEffect, useState } from "react";

export default function PredictionsTable() {
    const [data, setData] = useState<IPrediction[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        const fetchData = async (page: number) => {
            setLoading(true);
            const res = await axiosInstance.get(`/predictions?page=${page}&per_page=6`);
            const dataTable = res.data;
            setData(dataTable.data);
            setTotalPages(Math.ceil(dataTable.total_records / 6));
            setLoading(false);
        };
        fetchData(page);
    }, [page]);

    if (loading) {
        return <p className="text-black text-center mt-4">Loading predictions...</p>;
    }

    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
    const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

    return (
        <div className="overflow-x-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-[#e61d00]/50 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-center text-black mb-4 border-b-4 border-[#e61d00] inline-block pb-1 px-4">
                Predictions
            </h2>

            <table className="min-w-full divide-y divide-gray-200 text-black">
                <thead className="bg-[#e61d00] text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">Age</th>
                        <th className="px-4 py-2 text-left">Job</th>
                        <th className="px-4 py-2 text-left">Education</th>
                        <th className="px-4 py-2 text-left">Balance</th>
                        <th className="px-4 py-2 text-left">Previous</th>
                        <th className="px-4 py-2 text-left">Called Duration</th>
                        <th className="px-4 py-2 text-left">Predicted Value</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((pred) => (
                        <tr key={pred.id} className="hover:bg-gray-50 transition">
                            <td className="px-4 py-2">{pred.age}</td>
                            <td className="px-4 py-2">{pred.job_name}</td>
                            <td className="px-4 py-2">{pred.education_level_name}</td>
                            <td className="px-4 py-2">{pred.balance}</td>
                            <td className="px-4 py-2">{pred.previous}</td>
                            <td className="px-4 py-2">{pred.duration} sec</td>
                            <td className="px-4 py-2 text-[#e61d00] font-semibold">
                                {pred.predicted_value >= 0.43 ? "✅" : "❌"} ({(pred.predicted_value * 100).toFixed(2)}%)
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4 space-x-2">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-4 py-2 bg-[#e61d00] text-white rounded disabled:opacity-50 hover:cursor-pointer"
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-black">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-[#e61d00] text-white rounded disabled:opacity-50 hover:cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
