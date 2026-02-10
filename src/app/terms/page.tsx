import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — Cartographer",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-serif text-4xl text-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: February 2026</p>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy">
              Acceptance of Terms
            </h2>
            <p className="mt-2">
              By subscribing to Cartographer, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use
              our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Service Description
            </h2>
            <p className="mt-2">
              Cartographer provides parcel boundary data, ownership records, and
              property values for viewing within Google Earth Pro. The service is
              provided via a personal access link delivered to your email upon
              subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Subscription & Billing
            </h2>
            <p className="mt-2">
              Subscriptions are billed monthly at the rate displayed at the time
              of purchase. You may cancel your subscription at any time through
              your Stripe billing portal. Cancellation takes effect at the end of
              your current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Permitted Use</h2>
            <p className="mt-2">
              Your subscription grants you a personal, non-transferable license to
              access Cartographer&apos;s data within Google Earth Pro. You may not
              share your access link with others, redistribute the data, or use
              automated tools to bulk-download parcel information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Data Accuracy</h2>
            <p className="mt-2">
              While we strive to provide accurate and up-to-date parcel data,
              Cartographer does not guarantee the accuracy, completeness, or
              currency of the information. Our data should not be used as a
              substitute for professional surveys or legal property descriptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              Cartographer is provided &quot;as is&quot; without warranties of any
              kind. We shall not be liable for any damages arising from your use
              of the service, including but not limited to direct, indirect,
              incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Changes to Terms
            </h2>
            <p className="mt-2">
              We reserve the right to modify these terms at any time. Changes will
              be posted on this page with an updated date. Continued use of the
              service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-2">
              If you have any questions about these Terms of Service, please
              contact us at support@cartographer.dev.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
