import ConfusionMatrix from "@/components/ConfusionMatrix"
import CustomCard from "@/components/CustomCard"
import PrecisionRecallGraph from "@/components/PrecisionRecallGraph"
import F1ScoreThresoldGraph from "@/components/F1ScoreThresoldGraph"
import Table from "@/components/Table"

const mlInfo = [
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

const dlInfo = [
    {
        id: 1,
        title: "Accuracy",
        value: "87%",
    },
    {
        id: 2,
        title: "Precision",
        value: "86.5%",
    },
    {
        id: 3,
        title: "Recall",
        value: "87%",
    },
    {
        id: 4,
        title: "F1-Score",
        value: "86.5%",
    }
]

// const matrixDataML = [
//     [6520, 1488],
//     [703, 4559]
// ];

// const matrixDataDL = [
//     [6939, 1069],
//     [696, 4566]
// ];

export default async function Page() {

    return (
        <main>
            <section className="shadow-lg rounded-2xl h-auto w-auto m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="hidden md:block md:col-span-2 m-auto">
                    <h2 className="text-black text-7xl font-semibold">Machine Learning</h2>
                </div>
                <div className="grid grid-cols-2">
                    {
                        mlInfo.map(({ title, value }) => (
                            <CustomCard key={title} title={title} value={value} />
                        ))
                    }
                </div>
                <div>
                    <ConfusionMatrix pn_an={6520} pn_ap={1488} pp_an={703} pp_ap={4559} />
                </div>
                <div>
                    <F1ScoreThresoldGraph threshold={0.43} model="ml" />
                </div>
                <div>
                    <PrecisionRecallGraph model="ml" />
                </div>
                {/* <div className="hidden md:block md:col-span-2">
                    <Table />
                </div> */}
            </section>
            <section className="shadow-lg rounded-2xl h-auto w-auto m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="hidden md:block md:col-span-2 m-auto">
                    <h2 className="text-black text-7xl font-semibold">Deep Learning</h2>
                </div>
                <div className="grid grid-cols-2">
                    {
                        dlInfo.map(({ title, value }) => (
                            <CustomCard key={title} title={title} value={value} />
                        ))
                    }
                </div>
                <div>
                    <ConfusionMatrix pn_an={6939} pn_ap={1069} pp_an={696} pp_ap={4566} />
                </div>
                <div>
                    <F1ScoreThresoldGraph threshold={0.59} model="dl"/>
                </div>
                <div>
                    <PrecisionRecallGraph model="dl"/>
                </div>
                {/* <div className="hidden md:block md:col-span-2">
                    <Table />
                </div> */}
            </section>
            <section className="w-11/12 m-auto">
                <Table />
            </section>
        </main>
    )
}
