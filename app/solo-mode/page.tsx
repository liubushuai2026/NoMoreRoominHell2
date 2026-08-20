import type { Metadata } from "next";
import { ArticlePage } from "../_components/Pages";
import { getArticle } from "@/lib/mdx";

export async function generateMetadata(): Promise<Metadata> {
  const article = await getArticle("en", "solo-mode");
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: "article"
    }
  };
}

export default async function Page() {
  const article = await getArticle("en", "solo-mode");
  return <ArticlePage locale="en" article={article} slug="solo-mode" />;
}
