export default function Publish() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl text-center">
        
        {/* Animated Icon */}
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-50 text-4xl shadow-inner relative">
          <div className="absolute inset-0 rounded-full bg-indigo-100 animate-ping opacity-20"></div>
          🚀
        </div>

        {/* Header */}
        <span className="block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2">
          Almost There!
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Publish Your Website
        </h1>

        <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto">
          Aapki website ready hone wali hai! Publish karne se pehle apni details aur preview ek baar check kar lein.
        </p>

        {/* Summary Card */}
        <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-6 text-left shadow-sm mb-8 relative overflow-hidden">
          {/* Glassmorphism shine effect */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-indigo-500/10 blur-2xl"></div>

          <div className="flex items-center gap-2.5 mb-5 text-sm font-semibold text-gray-900">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Website preview ready
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p className="flex justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-gray-500">Plan</span>
              <strong className="font-semibold text-gray-900">Yearly Website Plan</strong>
            </p>
            <p className="flex justify-between pt-1">
              <span className="font-medium text-gray-500">Price</span>
              <strong className="font-semibold text-gray-900">₹999/year</strong>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full py-4 px-6 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98]"
            onClick={() => alert('Website publishing backend baad mein add karenge.')}
          >
            Publish Website
            <span aria-hidden="true" className="text-gray-400">→</span>
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = '?page=preview';
            }}
            className="w-full py-4 px-6 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
          >
            ← Back to Preview
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-400 font-medium">
          Demo only — abhi website publicly publish nahi hui hai.
        </p>
      </div>
    </div>
  );
}