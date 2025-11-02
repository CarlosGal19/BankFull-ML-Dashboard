import { ICustomCardProps } from "@/types/Components";

export default function CustomCard({ title, value }: ICustomCardProps) {
    return (
        <div className="group relative flex flex-col items-center justify-center h-32 w-44 bg-white rounded-2xl shadow-md border border-gray-200 hover:border-[#e61d00] hover:shadow-xl transition-all duration-300 cursor-pointer">

            <p className="text-4xl font-extrabold text-black group-hover:text-[#e61d00] transition-colors duration-300">
                {value}
            </p>

            <p className="text-sm font-semibold text-gray-700 mt-2 tracking-wide">
                {title}
            </p>

            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#e61d00] rounded-full group-hover:w-1/2 transition-all duration-300"></span>
        </div>
    );
}
