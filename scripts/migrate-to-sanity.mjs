#!/usr/bin/env node

/**
 * Migration script: seeds Sanity with existing JSON content.
 *
 * Usage:
 *   1. Fill in .env.local with your Sanity project ID, dataset, and API token.
 *   2. Run: node scripts/migrate-to-sanity.mjs
 *
 * This script is idempotent — it uses createOrReplace so re-running
 * it will overwrite existing documents with the same IDs.
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Load env from .env.local
const envPath = resolve(root, ".env.local");
const envContent = readFileSync(envPath, "utf-8");
const env = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIdx = trimmed.indexOf("=");
  if (eqIdx === -1) continue;
  const key = trimmed.slice(0, eqIdx).trim();
  let value = trimmed.slice(eqIdx + 1).trim();
  // Strip surrounding quotes
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1);
  }
  env[key] = value;
}

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}
if (!token) {
  console.error("Error: SANITY_API_TOKEN is not set in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Load JSON data
const home = JSON.parse(readFileSync(resolve(root, "data/home.json"), "utf-8"));
const about = JSON.parse(readFileSync(resolve(root, "data/about.json"), "utf-8"));
const work = JSON.parse(readFileSync(resolve(root, "data/work.json"), "utf-8"));

async function migrate() {
  console.log("Migrating content to Sanity...\n");

  // --- Home Page ---
  const homeDoc = {
    _id: "homePage",
    _type: "homePage",
    heroTitlePrefix: home.hero.titlePrefix,
    heroTitleSuffix: home.hero.titleSuffix,
    defaultActiveCaseStudyNumber: home.hero.defaultActiveCaseStudyNumber,
    seeAllWorksLabel: home.seeAllWorksLabel,
    storyHeadline: home.storySection.headline,
    storyButtons: home.storySection.buttons.map((b) => ({
      _type: "actionButton",
      _key: b.label.toLowerCase().replace(/\s+/g, "-"),
      ...b,
    })),
    brandSectionTitle: home.brandSection.title,
    brandRepeatCount: home.brandSection.repeatCount,
    faqSectionTitle: home.faqSection.title,
    contactCtaBackgroundImage: home.contactCta.backgroundImageSrc,
    contactCtaBackgroundImageAlt: home.contactCta.backgroundImageAlt,
    contactCtaHeadline: home.contactCta.headline,
    contactCtaSubheadline: home.contactCta.subheadline,
    contactCtaButtons: home.contactCta.buttons.map((b) => ({
      _type: "actionButton",
      _key: b.label.toLowerCase().replace(/\s+/g, "-"),
      ...b,
    })),
    caseStudies: home.caseStudies.map((cs) => ({
      _type: "caseStudy",
      _key: `cs-${cs.number}`,
      ...cs,
    })),
    services: home.services.map((s) => ({
      _type: "service",
      _key: `service-${s.id}`,
      title: s.title,
      imageSrc: s.imageSrc,
      imageAlt: s.imageAlt,
      description: s.description,
      gradientOpacity: s.gradientOpacity,
      href: s.href,
    })),
    faqs: home.faqs.map((f) => ({
      _type: "faq",
      _key: `faq-${f.id}`,
      question: f.question,
      answer: f.answer,
      defaultOpen: f.defaultOpen,
    })),
    brandLogos: home.brandLogos.map((l, i) => ({
      _type: "brandLogo",
      _key: `logo-${i}`,
      ...l,
    })),
  };

  await client.createOrReplace(homeDoc);
  console.log("  Home page migrated.");

  // --- About Page ---
  const aboutDoc = {
    _id: "aboutPage",
    _type: "aboutPage",
    heroBackgroundImage: about.hero.backgroundImageSrc,
    heroBackgroundImageAlt: about.hero.backgroundImageAlt,
    heroParagraphs: about.hero.paragraphs,
    primaryActionLabel: about.hero.primaryAction.label,
    primaryActionHref: about.hero.primaryAction.href,
    primaryActionIconSrc: about.hero.primaryAction.iconSrc,
    primaryActionIconAlt: about.hero.primaryAction.iconAlt,
    ctaBackgroundImage: about.cta.backgroundImageSrc,
    ctaBackgroundImageAlt: about.cta.backgroundImageAlt,
    ctaHeadline: about.cta.headline,
    ctaSubheadline: about.cta.subheadline,
    ctaButtons: about.cta.buttons.map((b) => ({
      _type: "ctaButton",
      _key: b.label.toLowerCase().replace(/\s+/g, "-"),
      ...b,
    })),
  };

  await client.createOrReplace(aboutDoc);
  console.log("  About page migrated.");

  // --- Work Projects ---
  for (const w of work.works) {
    const workDoc = {
      _id: `work-${w.slug}`,
      _type: "workProject",
      title: w.title,
      slug: { _type: "slug", current: w.slug },
      clientName: w.clientName,
      year: w.year,
      service: w.service,
      teaser: w.teaser,
      workGridImage: w.workGridImage,
      sortOrder: w.id,
      detailRows: w.detailRows.map((row, ri) => ({
        _type: "imageRow",
        _key: `row-${ri}`,
        images: row.images.map((img, ii) => ({
          _type: "rowImage",
          _key: `img-${ri}-${ii}`,
          ...img,
        })),
      })),
    };

    await client.createOrReplace(workDoc);
    console.log(`  Work project "${w.clientName}" migrated.`);
  }

  console.log("\nMigration complete!");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
