const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using AirShare's services, you agree to be bound by these Terms of Service.
            These terms govern your use of our website, mobile applications, and all related services.
          </p>

          <h2>2. Service Description</h2>
          <p>
            AirShare provides an aircraft sharing and booking platform that connects users with private
            aviation services. We facilitate the booking process but are not directly responsible for
            the operation of aircraft.
          </p>

          <h2>3. User Obligations</h2>
          <p>
            Users must provide accurate information when booking flights and comply with all aviation
            regulations and safety requirements. Users are responsible for arriving at departure
            locations on time and following all security protocols.
          </p>

          <h2>4. Booking and Cancellation</h2>
          <p>
            Flight bookings are subject to availability and confirmation. Cancellation policies vary
            based on the specific flight and operator. Users should review cancellation terms before
            booking.
          </p>

          <h2>5. Liability</h2>
          <p>
            AirShare acts as a booking platform and does not assume liability for the operation of
            aircraft or the conduct of operators. Users acknowledge the inherent risks of air travel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;