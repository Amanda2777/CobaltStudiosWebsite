import Navigation from '@/components/Navigation';

export default function Work() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-16">
            OUR WORK
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Grid - Add your projects here */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-300">
                    Project {item}
                  </div>
                </div>
                <h3 className="text-sm tracking-wider text-gray-400">CLIENT NAME</h3>
                <p className="text-lg">Project Title</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
