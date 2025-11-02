export default function About() {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-100px)] bg-white text-black px-6">
      <div className="max-w-3xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-[#e61d00] mb-4 border-b-4 border-[#e61d00] inline-block pb-1">
          About This Project
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          This project was developed to analyze and visualize predictions regarding
          long-term deposit subscriptions using data from the{" "}
          <span className="font-semibold">Bank Full Dataset</span> of a Portuguese banking institution.
          The predictive model applied is a{" "}
          <span className="font-semibold">Logistic Regression</span>, which estimates
          the probability that a client will subscribe to a term deposit.
        </p>

        <div className="mt-6">
          <p className="text-sm text-gray-500 italic">
            This system was developed for academic and analytical purposes, focusing on
            transparency, interpretability, and reliability of predictive results.
          </p>
        </div>
      </div>
    </section>
  );
}
