"use client";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 animate-pulse opacity-50"></div>

      {/* Floating circles */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-8 text-center">
        {/* Animated Hello World text */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-7xl font-bold text-white drop-shadow-2xl animate-scaleIn sm:text-8xl md:text-9xl">
            Hello
          </h1>
          <h1 className="text-7xl font-bold text-white drop-shadow-2xl animate-scaleIn sm:text-8xl md:text-9xl" style={{ animationDelay: '0.3s' }}>
            World
          </h1>
        </div>

        {/* Animated subtitle */}
        <p className="text-xl text-white/90 animate-fadeInUp sm:text-2xl" style={{ animationDelay: '0.6s' }}>
          Welcome to KPI.CO
        </p>

        {/* Animated decoration line */}
        <div className="mt-8 h-1 w-32 rounded-full bg-white/50 animate-expandWidth" style={{ animationDelay: '0.9s' }}></div>
      </main>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
          width: 0;
        }
      `}</style>
    </div>
  );
}
