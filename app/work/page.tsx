import { getAllWorks } from "@/lib/work";
import WorkGridClient from "@/components/WorkGridClient";

export default async function Work() {
  const works = await getAllWorks();
  return <WorkGridClient works={works} />;
}
