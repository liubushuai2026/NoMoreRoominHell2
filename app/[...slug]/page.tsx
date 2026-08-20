import type { Metadata } from "next";
import { getArticle } from "@/lib/mdx";
import { isLocale, normalizeSlug, pageBySlug, seoMetadata } from "@/lib/site";
import { ArticlePage, GenericGuidePage, GuideIndexPage, HomePage } from "../_components/Pages";

type RouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug: segments = [] } = await params;
  const route = normalizeSlug(segments);

  if (route.slug === "") {
    return {
      title: seoMetadata.title,
      description: seoMetadata.description,
      keywords: seoMetadata.keywords
    };
  }

  if (route.slug === "guides") {
    return {
      title: "No More Room in Hell 2 Guides - Wiki Navigation",
      description:
        "Browse No More Room in Hell 2 keyword pages for player count, release date, platforms, Steam, reviews, maps, weapons, extraction, and fixes."
    };
  }

  if (route.slug === "solo-mode") {
    const article = await getArticle(route.locale, "solo-mode");
    return {
      title: article.frontmatter.title,
      description: article.frontmatter.description
    };
  }

  const page = pageBySlug(route.slug);
  return {
    title: page.title,
    description: page.metaDescription ?? page.intro,
    keywords: page.keyword ? page.keyword : undefined,
    openGraph: {
      title: page.title,
      description: page.metaDescription ?? page.intro
    }
  };
}

export default async function CatchAllPage({ params }: RouteProps) {
  const { slug: segments = [] } = await params;
  const route = normalizeSlug(segments);

  if (route.slug === "") {
    return <HomePage locale={route.locale} />;
  }

  if (route.slug === "guides") {
    return <GuideIndexPage locale={route.locale} />;
  }

  if (route.slug === "solo-mode") {
    const article = await getArticle(route.locale, "solo-mode");
    return <ArticlePage locale={route.locale} article={article} slug="solo-mode" />;
  }

  if (segments.length === 1 && isLocale(segments[0])) {
    return <HomePage locale={segments[0]} />;
  }

  return <GenericGuidePage locale={route.locale} page={pageBySlug(route.slug)} />;
}
