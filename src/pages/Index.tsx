import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingCard from "@/components/BookingCard";
import FleetSection from "@/components/FleetSection";
import SafetySection from "@/components/SafetySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Booking Section */}
      <section id="flights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Book Your Flight</h2>
            <p className="text-platinum-600 max-w-2xl mx-auto">
              Search available flights and book your next air travel experience.
            </p>
          </div>
          <BookingCard />
        </div>
      </section>

      <FleetSection />
      <SafetySection />
      
      {/* Footer */}
      <footer className="bg-platinum-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AirShare</h3>
              <p className="text-platinum-300">
                Air travel simplified through innovative aircraft sharing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-platinum-300">
                Email: contact@airshare.com<br />
                Phone: +91 (988) 585-6259
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-platinum-300">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-platinum-800 text-center text-platinum-400">
            <p>&copy; {new Date().getFullYear()} AirShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
