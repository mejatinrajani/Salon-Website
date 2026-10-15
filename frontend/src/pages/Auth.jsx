import { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Brand Header */}
      <a href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-900 mb-8 hover:opacity-80 transition-opacity">
        <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-lg font-bold text-lg">S</span>
        <span>SiteMaker</span>
      </a>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {isLogin
                ? 'Enter your details to access your dashboard.'
                : 'Get started with your business website today.'}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex p-1 mb-8 bg-gray-100 rounded-xl">
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setIsLogin(true)}
              type="button"
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setIsLogin(false)}
              type="button"
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = '/?page=category';
            }}
          >
            {!isLogin && (
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                minLength={6}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-black transition-all outline-none text-sm"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
                </label>

                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                  onClick={() => alert('Password reset will be added later.')}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <span aria-hidden="true" className="text-gray-400">→</span>
            </button>
          </form>
        </div>

        {/* Footer area inside card */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600 mb-3">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            {' '}
            <button
              type="button"
              className="font-semibold text-black hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up for free' : 'Log in'}
            </button>
          </p>
          <p className="text-xs text-gray-400">
            By continuing, you agree to our <a href="#" className="hover:text-gray-600 underline">Terms of Service</a> and <a href="#" className="hover:text-gray-600 underline">Privacy Policy</a>.
          </p>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400">
        © {new Date().getFullYear()} SiteMaker. All rights reserved.
      </p>
    </div>
  );
}

export default Auth;