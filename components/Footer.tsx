import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-14 md:pt-20 pb-10 md:pb-12">
      <div className="mx-auto w-full max-w-[1142px] px-4 md:px-8 space-y-14 md:space-y-16">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="inline-flex shrink-0">
            <Image
              src="/logo-large.svg"
              alt="STUDIO COBALT"
              width={300}
              height={86}
              className="h-16 md:h-14 w-auto"
            />
          </Link>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:ml-auto md:flex md:flex-row md:gap-48 items-start">
            <div className="flex flex-col items-start gap-2.5">
              <Link href="/about" className="text-[26px] leading-[1.05] md:text-xl md:font-semibold">
                OUR STORY
              </Link>
              <Link href="/work" className="text-[26px] leading-[1.05] md:text-xl md:font-semibold">
                WORK
              </Link>
              {/* <Link href="/work" className="text-[26px] leading-[1.05] md:text-xl md:font-semibold">
                SERVICES
              </Link> */}
              <Link href="/contact" className="text-[26px] leading-[1.05] md:text-xl md:font-semibold">
                CONTACT
              </Link>
            </div>

            <div className="flex flex-col items-start gap-2.5">
              <a
                href="https://www.instagram.com/cobalt.made/"
                target="_blank"
                rel="noreferrer"
                className="text-[26px] leading-[1.05] md:text-xl md:font-semibold"
              >
                INSTAGRAM
              </a>
              <a
                href="mailto:nikita@cobaltmade.com"
                className="text-[26px] leading-[1.05] md:text-xl md:font-semibold"
              >
                EMAIL
              </a>
              <a
                href="mailto:team@cobaltmade.com"
                className="text-[26px] leading-[1.05] md:text-xl md:font-semibold"
              >
                HAVE AN IDEA?
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] items-end gap-6 md:flex md:flex-row md:items-end md:justify-between">
          <div className="relative w-[140px] h-[220px] md:w-[147px] md:h-[230px] overflow-hidden">
            <Image
              src="/images/case-studies/project-3.png"
              alt="Footer image"
              fill
              sizes="(max-width: 768px) 140px, 147px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-1.5 md:gap-2.5 pb-1 md:pb-0">
            <Link href="#" className="text-[18px] leading-none md:text-base whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[18px] leading-none md:text-base whitespace-nowrap">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
