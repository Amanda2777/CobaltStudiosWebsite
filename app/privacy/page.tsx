import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for COBALT.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Navigation />
      <main className="max-w-[1142px] mx-auto px-4 md:px-8 pt-[140px] md:pt-40 pb-20 md:pb-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-10">
          Privacy Policy
        </h1>
        <div className="max-w-[720px] flex flex-col gap-10 text-[#B3B3B3] text-base md:text-lg leading-relaxed">
          <p>Last updated: 17 March 2026</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">1. Who We Are</h2>
            <p>Cobalt Made Ltd (trading as Studio Cobalt) is a creative agency registered in England and Wales (Company No. 16374845). Our registered office is at Flat 109 Serapis House, 28 Goodluck Hope Walk, London, England, E14 0XL. We can be contacted at <a href="mailto:team@cobaltmade.com" className="text-white underline hover:opacity-70">team@cobaltmade.com</a>.</p>
            <p>We are the data controller for any personal data we collect from you.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">2. What Data We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Communications you send us (enquiries, briefs, emails)</li>
              <li>Payment details (processed securely via third-party providers)</li>
              <li>Website usage data (via cookies and analytics tools)</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Respond to enquiries and provide our services</li>
              <li>Manage client relationships and projects</li>
              <li>Send invoices and process payments</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Improve our website and services</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under UK GDPR:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li><strong className="text-white">Contract:</strong> to fulfil our services to you</li>
              <li><strong className="text-white">Legitimate interests:</strong> to manage our business and respond to enquiries</li>
              <li><strong className="text-white">Legal obligation:</strong> where required by law</li>
              <li><strong className="text-white">Consent:</strong> where you have provided it (e.g. mailing list sign-ups)</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">5. How Long We Keep Your Data</h2>
            <p>We retain personal data only for as long as necessary. Client project data is typically retained for up to 6 years following project completion in line with UK tax and accounting requirements. Enquiry data from non-clients is deleted after 12 months if no contract is entered into.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">6. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (where applicable)</li>
              <li>Object to or restrict our processing</li>
              <li>Request portability of your data</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:team@cobaltmade.com" className="text-white underline hover:opacity-70">team@cobaltmade.com</a>. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-white underline hover:opacity-70">ico.org.uk</a>.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">7. Cookies</h2>
            <p>Our website may use cookies to improve user experience and collect analytics data. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">8. Third Parties</h2>
            <p>We may share data with trusted third-party service providers (e.g. payment processors, project management tools, cloud storage) solely for the purposes of delivering our services. All third parties are required to handle data in accordance with UK GDPR.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">9. Data Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The current version will always be available on request.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">11. Contact</h2>
            <p>For any privacy-related queries, please contact us at: <a href="mailto:team@cobaltmade.com" className="text-white underline hover:opacity-70">team@cobaltmade.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
