import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Cartographer",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-serif text-4xl text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: February 2026
        </p>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          <p>
            Cartographer respects your privacy and maintains this policy to
            explain how we collect, use, and safeguard information across our
            website and Google Earth Pro integration services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              1. Information We Collect
            </h2>
            <h3 className="mt-4 font-medium text-gray-900">
              Personal Information (User-Provided)
            </h3>
            <p className="mt-1">
              Name, email address, and phone number — for example, when you
              contact us or subscribe.
            </p>
            <h3 className="mt-4 font-medium text-gray-900">
              Usage Information (Automatic)
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Browser type, IP address, device information, and access times
              </li>
              <li>Pages visited, actions performed, and search queries</li>
              <li>Location data (based on IP or device settings)</li>
            </ul>
            <h3 className="mt-4 font-medium text-gray-900">
              GIS-Related Inputs
            </h3>
            <p className="mt-1">
              Saved layer preferences and user-defined settings related to
              property visualizations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use collected data to maintain service operations, respond to
              your requests, customize your experience, monitor platform
              integrity, and send communications with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              3. Cookies &amp; Tracking Technologies
            </h2>
            <p className="mt-2">
              We use cookies and similar technologies to recognize returning
              users, remember preferences, analyze traffic, and improve
              performance. You can disable cookies through your browser settings,
              though this may impact functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              4. Third-Party Services
            </h2>
            <p className="mt-2">
              Partners including analytics platforms, cloud providers, and
              payment processors (Stripe) receive limited, necessary data under
              strict confidentiality agreements. Payment information is processed
              securely by Stripe (a PCI Level 1 certified processor) and is
              never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              5. Data Sharing and Disclosure
            </h2>
            <p className="mt-2">
              We do <strong>not</strong> sell your personal data. Sharing occurs
              only with service vendors, for legal compliance, or during business
              transitions — with notification to affected users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              6. Your Rights and Choices
            </h2>
            <p className="mt-2">
              You may access, correct, or delete your personal information and
              withdraw consent depending on your jurisdiction. Contact us at{" "}
              <a
                href="mailto:support@cartographer.dev"
                className="text-blue hover:underline"
              >
                support@cartographer.dev
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              7. Data Retention
            </h2>
            <p className="mt-2">
              Information is retained only as long as necessary for stated
              purposes and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">8. Security</h2>
            <p className="mt-2">
              We use industry-standard measures — encryption, access controls,
              and monitoring — to protect your data, though absolute security
              cannot be guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              9. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this policy periodically. Changes take effect when
              posted with a new effective date on this page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
