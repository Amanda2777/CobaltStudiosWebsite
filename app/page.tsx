import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
        
        {/* Hero Content */}
        <div className="container mx-auto px-8 z-20 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-8">
            WE ARE <span className="block mt-4">COBALT</span>
          </h1>
          
          {/* Placeholder for hero image - replace with your actual image */}
          <div className="my-16 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Add your hero image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center justify-center h-full text-gray-500">
                {/* Replace this div with your Image component when you add the watch image */}
                <p className="text-sm">[ Hero Image Placeholder ]</p>
              </div>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-16">
            <div className="text-left">
              <p className="text-xs text-gray-400 tracking-wider mb-1">CLIENT NAME</p>
              <p className="text-sm text-gray-300">PROJECT NAME</p>
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400 tracking-wider mb-1">01</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
