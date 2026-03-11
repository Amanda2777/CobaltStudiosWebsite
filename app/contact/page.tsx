import Navigation from '@/components/Navigation';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-8 py-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-8">
            CONTACT
          </h1>
          
          <div className="max-w-2xl">
            <p className="text-xl text-gray-300 mb-12">
              Let&apos;s create something exceptional together.
            </p>
            
            <div className="space-y-6 text-lg">
              <div>
                <p className="text-gray-400 text-sm tracking-wider mb-2">EMAIL</p>
                <a href="mailto:hello@cobalt.com" className="hover:text-gray-300 transition-colors">
                  hello@cobalt.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm tracking-wider mb-2">PHONE</p>
                <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm tracking-wider mb-2">ADDRESS</p>
                <p className="text-gray-300">
                  123 Marketing Street<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
