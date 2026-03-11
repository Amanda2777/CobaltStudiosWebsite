import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Header & Hero Container */}
      <div className="flex flex-col items-center px-20 gap-2.5 relative mx-auto">
        {/* Header */}
        <Navigation />

        {/* Hero Content */}
        <section className="flex flex-row justify-center items-center py-20 pb-8 gap-8 isolate w-full max-w-7xl h-[573px]">
          <h1 className="text-5xl font-bold tracking-tight">WE ARE</h1>

          {/* Hero Image */}
          <div className="w-[298px] h-[463px] relative overflow-hidden">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Hero image"
              fill
              sizes="298px"
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight">COBALT</h1>
        </section>
      </div>

      {/* Featured Case Studies */}
      <section className="flex flex-row justify-between items-center gap-7 w-screen max-w-[1536px] mb-16 mx-auto">
        <CaseStudyCard
          number={1}
          clientName="CLIENT NAME"
          projectName="PROJECT NAME"
          imageSrc="/images/case-studies/project-1.png"
          imageAlt="Project 1"
        />
        <CaseStudyCard
          number={2}
          clientName="CLIENT NAME"
          projectName="PROJECT NAME"
          imageSrc="/images/case-studies/project-2.png"
          imageAlt="Project 2"
        />
        <CaseStudyCard
          number={3}
          clientName="CLIENT NAME"
          projectName="PROJECT NAME"
          imageSrc="/images/case-studies/project-3.png"
          imageAlt="Project 3"
        />
        <CaseStudyCard
          number={4}
          clientName="CLIENT NAME"
          projectName="PROJECT NAME"
          imageSrc="/images/case-studies/project-4.jpg"
          imageAlt="Project 4"
        />
      </section>

      {/* Middle Content Container */}
      <div className="flex flex-col items-center px-20 gap-2.5 relative mx-auto">
        {/* See More */}
        <div className="flex flex-row justify-center items-center pt-15 gap-2.5 w-[163px] h-[84px] mb-16">
          <Link href="/work" className="text-xl flex items-center gap-2">
            SEE ALL WORKS
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Paragraph Section */}
        <section className="flex flex-col justify-center items-center py-[250px] gap-12 w-[792px] mb-16">
          <h2 className="text-5xl font-semibold text-center leading-tight tracking-tight">
            The story your brand deserves. Content that keeps them watching.
          </h2>

          <div className="flex flex-row justify-center items-center gap-8">
            <Button href="/work" variant="secondary">
              SERVICES
            </Button>
            <Button href="/contact" variant="primary">
              CONTACT US
            </Button>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="flex flex-row justify-between items-center gap-7 w-screen max-w-[1536px] mb-16 mx-auto">
        <ServiceCard
          title="CREATIVE PRODUCTION"
          imageSrc="/images/services/creative-production.jpg"
          imageAlt="Creative Production"
          gradientOpacity={60}
        />
        <ServiceCard
          title="BRANDING"
          imageSrc="/images/services/branding.jpg"
          imageAlt="Branding"
          gradientOpacity={20}
        />
        <ServiceCard
          title="SOCIAL MEDIA MANAGEMENT"
          imageSrc="/images/services/social-media.jpg"
          imageAlt="Social Media Management"
          gradientOpacity={0}
        />
      </section>

      {/* Lower Content Container */}
      <div className="flex flex-col items-center px-20 gap-2.5 relative mx-auto">
        {/* Brand Logos */}
        <section className="flex flex-col justify-center items-center py-50 gap-9 w-[793px] mb-16">
          <p className="text-xl text-center text-white/40">
            WE&apos;VE SHOT WITH
          </p>

          <div className="flex flex-row justify-center items-center gap-7 w-full">
            {[1, 2, 3, 4, 5].map((logo) => (
              <div
                key={logo}
                className="w-25 h-7 bg-white/20 flex items-center justify-center"
              >
                <span className="text-xs text-white/40">[Logo {logo}]</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="flex flex-col items-start pb-50 gap-15 w-[900px] mb-16">
          <h2 className="text-5xl font-medium text-center w-full tracking-tight">
            FAQs
          </h2>

          <div className="flex flex-col justify-center items-start gap-15 w-full">
            <FAQItem
              question="WHAT KIND OF PROJECTS DO YOU TAKE ON?"
              answer="From branding and social content to motion graphics and full channel management - we handle creative work that helps brands stand out online."
              defaultOpen={false}
            />
            <FAQItem
              question="HOW LONG DOES A TYPICAL PROJECT TAKE?"
              answer="Project timelines vary depending on scope, but most projects range from 2-6 weeks from concept to delivery."
              defaultOpen={false}
            />
            <FAQItem
              question="DO YOU WORK WITH CLIENTS REMOTELY?"
              answer="Yes! We work with clients all over the world. Our process is designed to be seamless whether you're local or remote."
              defaultOpen={false}
            />
            <FAQItem
              question="WHAT'S YOUR PRICING STRUCTURE?"
              answer="We offer custom quotes based on project scope and requirements. Get in touch for a detailed proposal tailored to your needs."
              defaultOpen={false}
            />
            <FAQItem
              question="CAN WE SEE MORE OF YOUR WORK?"
              answer="Absolutely! Check out our portfolio page to see our latest projects and case studies across various industries."
              defaultOpen={false}
            />
          </div>
        </section>
      </div>

      {/* Invite to Chat */}
      <section className="relative w-full h-[388px] mb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/contact-cta.jpg"
            alt="Contact background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/20" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-11 px-8">
          <div className="flex flex-col items-center gap-2.5 w-[678px]">
            <h2 className="text-6xl font-bold text-center leading-none tracking-[-0.02em]">
              ALL GREAT IDEAS START WITH HELLO
            </h2>
            <p className="text-3xl font-medium text-center leading-none">
              Let&apos;s get your story out there!
            </p>
          </div>

          <div className="flex flex-row justify-center items-center gap-5">
            <Button href="/work" variant="secondary">
              SERVICES
            </Button>
            <Button
              href="/contact"
              variant="primary"
              icon={
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                />
              }
            >
              WHATSAPP US!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center py-15 w-full max-w-[1440px] mx-auto bg-[#050505]">
        <div className="flex flex-row justify-between items-start gap-[341px] w-[1142px] mb-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-large.svg"
              alt="COBALT"
              width={196}
              height={56}
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col justify-center items-start gap-2.5">
            <Link href="/about" className="text-xl font-semibold">
              OUR STORY
            </Link>
            <Link href="/work" className="text-xl font-semibold">
              WORK
            </Link>
            <Link href="/work" className="text-xl font-semibold">
              SERVICES
            </Link>
            <Link href="/contact" className="text-xl font-semibold">
              CONTACT
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start gap-2.5">
            <a href="#" className="text-xl font-semibold">
              INSTAGRAM
            </a>
            <a href="mailto:hello@cobalt.com" className="text-xl font-semibold">
              EMAIL
            </a>
            <Link href="/contact" className="text-xl font-semibold">
              HAVE AN IDEA?
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-end px-[149px] gap-[831px] w-full">
          <div className="relative w-[147px] h-[230px] overflow-hidden">
            <Image
              src="/images/case-studies/project-3.png"
              alt="Footer image"
              fill
              sizes="147px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2.5 w-[108px] h-[38px]">
            <Link href="#" className="text-base whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="#" className="text-base whitespace-nowrap">
              Terms and conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
