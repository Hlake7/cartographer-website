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
        <p className="mt-2 text-sm text-gray-500">Last updated: February 2026</p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you create a Cartographer subscription, we collect the
              information necessary to provide our service, including your name,
              email address, and payment details. Payment information is processed
              securely by Stripe and is never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to provide and maintain your subscription,
              send you your personal access link, communicate important service
              updates, and process payments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Data Security</h2>
            <p className="mt-2">
              We take the security of your data seriously and implement
              industry-standard measures to protect your personal information.
              Payment processing is handled entirely by Stripe, a PCI Level 1
              certified payment processor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Third Parties</h2>
            <p className="mt-2">
              We do not sell, trade, or rent your personal information to third
              parties. We use Stripe for payment processing, and your payment data
              is subject to Stripe&apos;s privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new policy on this page and
              updating the date above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact
              us at support@cartographer.dev.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
