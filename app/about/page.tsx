import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-8 py-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
            ABOUT
          </h1>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Cobalt is a creative marketing agency that delivers exceptional results
              for our clients through innovative strategies and compelling design.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We combine creativity with data-driven insights to build brands that
              resonate and campaigns that convert.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
