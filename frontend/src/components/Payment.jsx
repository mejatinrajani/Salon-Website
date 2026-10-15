export default function Payment() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl">
        
        {/* Back Button */}
        <button
          type="button"
          onClick={() => {
            window.location.href = '?page=preview';
          }}
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8"
        >
          <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Preview
        </button>

        {/* Plan Header */}
        <span className="block text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2">
          Your Plan
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Yearly Website Plan
        </h1>

        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          Apne business ke liye professional website banayein.
        </p>

        {/* Pricing */}
        <div className="flex items-baseline gap-1 text-gray-900">
          <span className="text-2xl font-semibold">₹</span>
          <span className="text-5xl font-extrabold tracking-tight">999</span>
          <span className="text-gray-500 font-medium ml-1">/ year</span>
        </div>

        <div className="h-px w-full bg-gray-100 my-8"></div>

        {/* Features List */}
        <h3 className="text-lg font-bold text-gray-900 mb-5">
          Plan mein kya milega?
        </h3>

        <ul className="space-y-4">
          {[
            'Professional business website',
            'Mobile-friendly design',
            'Home, About aur Contact pages',
            'Gallery aur business details',
            'Salon website template'
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs font-bold">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => {
            window.location.href = '?page=publish';
          }}
          className="w-full mt-10 py-4 px-6 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Continue to Publish
          <span aria-hidden="true" className="text-gray-400">→</span>
        </button>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-gray-400 font-medium">
          Abhi demo page hai. Real payment abhi enable nahi hai.
        </p>
      </div>
    </div>
  );
}