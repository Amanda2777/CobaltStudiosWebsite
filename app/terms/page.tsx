import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for COBALT.",
  alternates: { canonical: "/terms" },
};

export default function TermsAndConditions() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Navigation />
      <main className="max-w-[1142px] mx-auto px-4 md:px-8 pt-[140px] md:pt-40 pb-20 md:pb-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-10">
          Terms &amp; Conditions
        </h1>
        <div className="max-w-[720px] flex flex-col gap-10 text-[#B3B3B3] text-base md:text-lg leading-relaxed">
          <p>Last updated: 17 March 2026</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">1. About Us</h2>
            <p>These Terms and Conditions govern the provision of creative services by Cobalt Made Ltd (trading as Studio Cobalt), a company registered in England and Wales (Company No. 16374845), with registered office at Flat 109 Serapis House, 28 Goodluck Hope Walk, London, England, E14 0XL (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By engaging our services, you agree to these terms.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">2. Our Services</h2>
            <p>We provide creative agency services including but not limited to content creation, social media management, branding, video production, and related creative work. The specific scope of services will be agreed in writing for each project.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">3. Proposals and Agreements</h2>
            <p>All projects begin with a written proposal or scope of work. Work commences only once both parties have agreed on the scope, timeline, and fees in writing (including by email). We reserve the right to decline any project at our discretion.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">4. Fees and Payment</h2>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Fees are set out in each individual proposal or contract.</li>
              <li>Unless otherwise agreed, a deposit of 50% is required before work begins.</li>
              <li>Final payment is due within 14 days of invoice unless otherwise stated.</li>
              <li>Late payments may incur interest at 8% per annum above the Bank of England base rate, as permitted under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              <li>All prices are exclusive of VAT unless stated otherwise.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">5. Revisions and Changes</h2>
            <p>Proposals include a specified number of revision rounds. Revisions beyond the agreed scope may be charged at our standard day rate. Any material changes to the project scope must be agreed in writing and may affect fees and timelines.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">6. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Provide accurate briefs, materials, and feedback in a timely manner</li>
              <li>Ensure you have the right to use any materials, content, or assets you provide to us</li>
              <li>Designate a point of contact with authority to approve work</li>
            </ul>
            <p>Delays caused by the client may affect agreed timelines and are not our responsibility.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">7. Intellectual Property</h2>
            <p>Upon receipt of full payment, ownership of the final deliverables created for you transfers to you. We retain the right to display the work in our portfolio unless expressly agreed otherwise.</p>
            <p>We retain ownership of all preliminary concepts, unused designs, and background IP. Any third-party assets (e.g. stock images, licensed fonts) remain subject to their own licence terms.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">8. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of a project, and not to disclose it to third parties without prior written consent.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our liability for any claim arising out of or in connection with our services is limited to the fees paid for the specific project giving rise to the claim. We are not liable for indirect, consequential, or special losses.</p>
            <p>Nothing in these terms limits liability for death or personal injury caused by negligence, fraud, or any other matter that cannot be excluded by law.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">10. Termination</h2>
            <p>Either party may terminate a project by giving written notice. In the event of termination, you will be invoiced for all work completed to date. The deposit is non-refundable unless we are in material breach of these terms.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">11. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">12. Changes to These Terms</h2>
            <p>We may update these Terms and Conditions from time to time. The current version will always be provided at the start of new engagements.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-white font-semibold text-xl">13. Contact</h2>
            <p>For any queries regarding these terms, please contact us at: <a href="mailto:team@cobaltmade.com" className="text-white underline hover:opacity-70">team@cobaltmade.com</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
