import { Shield, Award, Clock } from "lucide-react";

const SafetySection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Our fleet meets the highest safety standards with regular maintenance and inspections.",
    },
    {
      icon: Award,
      title: "Certified Crew",
      description:
        "Experienced pilots and crew members with extensive training and certification.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for seamless travel assistance.",
    },
  ];

  return (
    <section id="safety" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety & Excellence</h2>
          <p className="text-platinum-600 max-w-2xl mx-auto">
            Your safety is our top priority. We maintain the highest standards
            in aviation safety and service excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg hover:bg-platinum-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-platinum-100 mb-4">
                <feature.icon className="w-6 h-6 text-platinum-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-platinum-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;