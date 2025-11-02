import ConfusionMatrix from "@/components/ConfusionMatrix"
import CustomCard from "@/components/CustomCard"
import PrecisionRecallGraph from "@/components/PrecisionRecallGraph"
import F1ScoreThresoldGraph from "@/components/F1ScoreThresoldGraph"
import Table from "@/components/Table"

const info = [
    {
        id: 1,
        title: "Accuracy",
        value: "83.4%",
    },
    {
        id: 2,
        title: "Precision",
        value: "83.5%",
    },
    {
        id: 3,
        title: "Recall",
        value: "84%",
    },
    {
        id: 4,
        title: "F1-Score",
        value: "84%",
    }
]

export default async function Page() {

    return (
        <main className="shadow-lg rounded-2xl h-auto w-auto m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <section className="grid grid-cols-2">
                {
                    info.map(({ title, value }) => (
                        <CustomCard key={title} title={title} value={value} />
                    ))
                }
            </section>
            <div>
                <ConfusionMatrix />
            </div>
            <div>
                <F1ScoreThresoldGraph />
            </div>
            <div>
                <PrecisionRecallGraph />
            </div>
            <div className="hidden md:block md:col-span-2">
                <Table />
            </div>
        </main>
    )
}
