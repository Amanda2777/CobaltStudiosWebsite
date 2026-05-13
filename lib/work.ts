import { client } from "@/sanity/client";
import { allWorksQuery, workBySlugQuery } from "@/sanity/queries";
import workData from "@/data/work.json";

export interface WorkRowImage {
  src: string;
  alt: string;
}

export interface WorkImageRow {
  images: WorkRowImage[];
}

export interface WorkEntry {
  id: number;
  slug: string;
  clientName: string;
  year: string;
  service: string;
  title: string;
  teaser: string;
  workGridImage: string;
  topImage?: string;
  coverImage?: string;
  vimeoIds?: string[];
  detailRows: WorkImageRow[];
}

interface WorkDataShape {
  works: WorkEntry[];
}

const typedWorkData = workData as WorkDataShape;

function mapSanityWork(data: Record<string, unknown>, index: number): WorkEntry {
  return {
    id: (data.sortOrder as number) ?? index + 1,
    slug: data.slug as string,
    clientName: data.clientName as string,
    year: data.year as string,
    service: data.service as string,
    title: data.title as string,
    teaser: data.teaser as string,
    workGridImage: data.workGridImage as string,
    topImage: data.topImage as string | undefined,
    coverImage: data.coverImage as string | undefined,
    vimeoIds: data.vimeoIds as string[] | undefined,
    detailRows: data.detailRows as WorkImageRow[],
  };
}

/** Fetch all works — falls back to local JSON when Sanity is not configured. */
export async function getAllWorks(): Promise<WorkEntry[]> {
  if (!client) return typedWorkData.works;

  try {
    const data = await client.fetch(allWorksQuery);
    if (!data || !Array.isArray(data) || data.length === 0) return typedWorkData.works;
    return data.map((d: Record<string, unknown>, i: number) => mapSanityWork(d, i));
  } catch {
    return typedWorkData.works;
  }
}

/** Fetch a single work by slug — falls back to local JSON when Sanity is not configured. */
export async function getWorkBySlugAsync(slug: string): Promise<WorkEntry | undefined> {
  if (!client) return typedWorkData.works.find((w) => w.slug === slug);

  try {
    const data = await client.fetch(workBySlugQuery, { slug });
    if (!data) return typedWorkData.works.find((w) => w.slug === slug);
    return mapSanityWork(data, 0);
  } catch {
    return typedWorkData.works.find((w) => w.slug === slug);
  }
}

/** Synchronous access — uses JSON only. */
export const works = typedWorkData.works;

export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return works.find((work) => work.slug === slug);
}

export function getNextWork(slug: string): WorkEntry {
  const currentIndex = works.findIndex((work) => work.slug === slug);

  if (currentIndex === -1) {
    return works[0];
  }

  return works[(currentIndex + 1) % works.length];
}
