"use client";
import { precisionRecallData } from "@/mocks/data";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function PrecisionRecallGraph() {
    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 hover:border-[#e61d00]/50 hover:shadow-xl transition-all duration-300 p-6">
            <h2 className="text-3xl font-bold text-center text-black border-b-4 border-[#e61d00] inline-block mb-2 px-4 pb-1">
                Precision vs Recall
            </h2>

            <div className="w-auto h-[300px]">
                <ResponsiveContainer>
                    <LineChart
                        data={precisionRecallData}
                        margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis
                            dataKey="recall"
                            type="number"
                            domain={[0, 1]}
                            tickFormatter={(val) => val.toFixed(2)}
                            tick={{ fill: "#000" }}
                            label={{
                                value: "Recall",
                                position: "insideBottom",
                                offset: -5,
                                fill: "#000",
                                fontSize: 14,
                            }}
                        />
                        <YAxis
                            dataKey="precision"
                            type="number"
                            domain={[0, 1]}
                            tickFormatter={(val) => val.toFixed(2)}
                            tick={{ fill: "#000" }}
                            label={{
                                value: "Precision",
                                angle: -90,
                                position: "insideLeft",
                                fill: "#000",
                                fontSize: 14,
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "white",
                                border: "1px solid #e61d00",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "#000" }}
                            formatter={(val: number) => val.toFixed(3)}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            wrapperStyle={{
                                color: "#000",
                                fontWeight: "500",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="precision"
                            stroke="#e61d00"
                            strokeWidth={1}
                            dot={{ r: 2, fill: "#e61d00" }}
                            activeDot={{ r: 4, strokeWidth: 1, stroke: "#000" }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
