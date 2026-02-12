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
        <p className="mt-2 text-sm text-gray-500">
          Last updated: February 2026
        </p>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-navy">
              1. Key Definitions
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Authorized Users:</strong> Employees, contractors, or
                agents of the Licensee who require access to the Services for
                professional duties and are bound by confidentiality obligations.
              </li>
              <li>
                <strong>Fee:</strong> The subscription cost as specified at
                checkout, excluding applicable taxes which are billed separately.
              </li>
              <li>
                <strong>Licensed Materials:</strong> Normalized geospatial and
                mapping data provided through the Service, including updates and
                modifications during the subscription period.
              </li>
              <li>
                <strong>Permitted Use:</strong> Using Licensed Materials solely
                for the Licensee&apos;s legitimate internal business purposes,
                excluding commercialization. Materials may be incorporated into
                reports or presentations but not offered as standalone commercial
                products.
              </li>
              <li>
                <strong>Service:</strong> The mapping, visualization, and data
                access services enabling access to Licensed Materials through API
                keys or similar mechanisms, excluding third-party tools like
                Google Earth Pro.
              </li>
              <li>
                <strong>Subscription Term:</strong> The start and end dates of
                your active subscription.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">2. License</h2>
            <p className="mt-2">
              Cartographer grants you a non-exclusive, non-transferable, and
              revocable right to access and use the Licensed Materials for the
              Subscription Term in exchange for applicable fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              3. Access to Licensed Materials
            </h2>
            <h3 className="mt-4 font-medium text-gray-900">
              Access Authorization
            </h3>
            <p className="mt-1">
              Access requires acceptance of these terms, fee payment, and
              agreement compliance. You may grant access only to specified
              Authorized Users for internal operations.
            </p>
            <h3 className="mt-4 font-medium text-gray-900">
              Your Obligations
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Only Authorized Users may access the Service; unauthorized
                access constitutes a material breach.
              </li>
              <li>
                Each user receives unique credentials; sharing is prohibited.
              </li>
              <li>
                You must implement reasonable security measures, including
                administrative, technical, and physical safeguards.
              </li>
            </ul>
            <h3 className="mt-4 font-medium text-gray-900">
              Service Availability
            </h3>
            <p className="mt-1">
              We intend for the Service to be available 24 hours per day, 7 days
              per week. However, we are not liable for temporary unavailability
              due to maintenance, backups, or network issues. If access is not
              restored within 48 hours, we will extend your subscription term
              accordingly.
            </p>
            <h3 className="mt-4 font-medium text-gray-900">
              Third-Party Services
            </h3>
            <p className="mt-1">
              You are responsible for obtaining any required third-party
              licenses. Cartographer assumes no responsibility for Google Earth
              Pro, server infrastructure, or related third-party failures.
            </p>
            <h3 className="mt-4 font-medium text-gray-900">
              Discontinuation
            </h3>
            <p className="mt-1">
              We reserve the right to discontinue, modify, or alter any portion
              of the Licensed Materials at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              4. Term and Termination
            </h2>
            <p className="mt-2">
              This agreement runs for the Subscription Term and may terminate
              if:
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Either party materially breaches and fails to cure within 30
                days of notice.
              </li>
              <li>You initiate bankruptcy or insolvency proceedings.</li>
              <li>
                Either party provides 30 days&apos; written termination notice.
              </li>
            </ul>
            <p className="mt-2">
              Upon termination, you must immediately cease all use. If we
              terminate for breach, no refund is owed and outstanding payments
              remain due. If you terminate for our breach, we will refund a
              pro-rata portion for unused time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              5. Intellectual Property and Confidentiality
            </h2>
            <p className="mt-2">
              The Services, Licensed Materials, and all related technology
              remain our exclusive property. You receive only the limited
              license granted above and may not reverse engineer or decompile
              any part of the Service.
            </p>
            <p className="mt-2">
              Any feedback you provide is voluntary and may be used by
              Cartographer for any purpose without obligation, including creating
              derivative works.
            </p>
            <p className="mt-2">
              You must maintain the confidentiality of all Confidential
              Information during the Subscription Term and after termination or
              expiration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              Services and Licensed Materials are provided{" "}
              <strong>&quot;as is&quot;</strong> and{" "}
              <strong>&quot;as available&quot;</strong> without warranties of any
              kind, express or implied. We make no guarantees regarding
              uninterrupted, error-free, or virus-free operation.
            </p>
            <p className="mt-2">
              We have no liability for claims, damages, or disputes arising from
              your use or distribution of the Licensed Materials. You agree to
              indemnify, defend, and hold harmless Cartographer from such
              claims.
            </p>
            <p className="mt-2">
              Neither party is liable for lost revenues or profits, downtime
              costs, loss or damage to data, or indirect damages — except for
              death, bodily injury from negligence, or fraud.
            </p>
            <p className="mt-2">
              Our aggregate liability cannot exceed the total amount you paid
              for the Services within the preceding twelve (12) month period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">7. General</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Entire Agreement:</strong> These terms set forth the
                entire agreement and supersede all prior understandings.
              </li>
              <li>
                <strong>Modifications:</strong> No modification or waiver is
                valid unless in writing and agreed to by both parties.
              </li>
              <li>
                <strong>Force Majeure:</strong> Neither party is liable for
                delays from circumstances beyond reasonable control, except
                payment obligations remain due.
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign or transfer this
                agreement without our prior written consent.
              </li>
              <li>
                <strong>Governing Law:</strong> This agreement is governed by
                Idaho law. Disputes must be brought in Idaho state or federal
                courts (Ada County).
              </li>
              <li>
                <strong>Severability:</strong> If any provision is found invalid,
                the remaining provisions remain enforceable.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
