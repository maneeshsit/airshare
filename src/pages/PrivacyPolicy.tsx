import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <h2>1. Information Collection</h2>
          <p>
            We collect information that you provide directly to us, including personal information
            such as your name, email address, phone number, and payment information when you use
            our services.
          </p>

          <h2>2. Use of Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            to process your bookings, and to communicate with you about your reservations
            and account.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We share your information with aircraft operators only as necessary to facilitate
            your bookings. We do not sell your personal information to third parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information
            from unauthorized access, alteration, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information.
            Contact us if you wish to exercise these rights or have questions about your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;