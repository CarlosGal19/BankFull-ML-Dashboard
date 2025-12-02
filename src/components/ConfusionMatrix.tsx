interface IConfusionMatrix {
    pn_an: number;
    pn_ap: number;
    pp_an: number;
    pp_ap: number;
}

export default function ConfusionMatrix({pn_an, pn_ap, pp_an, pp_ap}: IConfusionMatrix) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:border-[#e61d00]/50 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center text-black border-b-4 border-[#e61d00] inline-block px-4 pb-1">
                Confusion Matrix
            </h2>

            <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse rounded-xl overflow-hidden text-center text-black">
                    <thead>
                        <tr className="bg-[#e61d00] text-white">
                            <th className="py-3 px-4"></th>
                            <th className="py-3 px-6 font-semibold">Predicted Negative</th>
                            <th className="py-3 px-6 font-semibold">Predicted Positive</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="hover:bg-gray-50 transition">
                            <th className="border border-gray-200 bg-gray-100 font-semibold py-3 px-4 text-left rounded-l-xl">
                                Actual Negative
                            </th>
                            <td className="border border-gray-200 py-3 px-4 font-bold text-emerald-700 bg-emerald-50">
                                {pn_an}
                            </td>
                            <td className="border border-gray-200 py-3 px-4 font-bold text-[#e61d00] bg-red-50 rounded-r-xl">
                                {pn_ap}
                            </td>
                        </tr>

                        <tr className="hover:bg-gray-50 transition">
                            <th className="border border-gray-200 bg-gray-100 font-semibold py-3 px-4 text-left rounded-l-xl">
                                Actual Positive
                            </th>
                            <td className="border border-gray-200 py-3 px-4 font-bold text-[#e61d00] bg-red-50">
                                {pp_an}
                            </td>
                            <td className="border border-gray-200 py-3 px-4 font-bold text-emerald-700 bg-emerald-50 rounded-r-xl">
                                {pp_ap}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
