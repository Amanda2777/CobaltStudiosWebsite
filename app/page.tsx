import { getHomeContent } from "@/lib/home";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const content = await getHomeContent();
  return <HomeClient content={content} />;
}
