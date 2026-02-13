export default function GlossaryPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Accounting Glossary:
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          A–Z Terminology
        </h2>
        <p className="text-sm mt-4 opacity-90">
          A quick reference for key audit and accounting terms in the UAE.
        </p>

        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search Glossary"
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="bg-blue-900 text-white text-center py-3 text-sm">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <span
            key={letter}
            className="mx-2 cursor-pointer hover:text-yellow-400"
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Glossary Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        <div>
          <h3 className="text-blue-800 font-semibold text-lg">
            Actionable KPI
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            A KPI that provides clear insights leading to specific actions for improvement.
          </p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold text-lg">
            Analytics Dashboard
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            A centralized platform that displays visual representations of KPIs and metrics.
          </p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold text-lg">
            Annual Growth Rate
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            The yearly rate of increase in a specific metric such as revenue or profit.
          </p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold text-lg">
            Average Handle Time (AHT)
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            A KPI used in customer service to measure time taken to resolve queries.
          </p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold text-lg">
            Audit Trail
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            A chronological record of system activities and transactions.
          </p>
        </div>

      </div>

    </div>
  );
}
