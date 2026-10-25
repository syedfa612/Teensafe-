import { notFound } from "next/navigation";
import { TOPICS } from "@/lib/topics-data";
import { TopicRunner } from "@/components/topic-runner";

export function generateStaticParams() {
  return TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  return <TopicRunner topic={topic} />;
}
