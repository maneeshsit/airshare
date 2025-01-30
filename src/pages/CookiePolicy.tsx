const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-slate max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website.
            They help us provide you with a better experience by remembering your preferences
            and enabling certain features.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies to:
            - Remember your login status
            - Maintain your session
            - Analyze how you use our website
            - Improve our services
          </p>

          <h2>3. Types of Cookies We Use</h2>
          <p>
            - Essential cookies: Required for basic website functionality
            - Analytical cookies: Help us understand how visitors use our site
            - Preference cookies: Remember your settings and choices
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies
            that are already on your computer and you can set most browsers to prevent them
            from being placed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;