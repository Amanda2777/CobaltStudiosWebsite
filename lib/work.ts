import workData from "@/data/work.json";

export interface WorkRowImage {
  src: string;
  alt: string;
  aspectRatio?: string;
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
  detailRows: WorkImageRow[];
}

interface WorkDataShape {
  works: WorkEntry[];
}

const typedWorkData = workData as WorkDataShape;

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
