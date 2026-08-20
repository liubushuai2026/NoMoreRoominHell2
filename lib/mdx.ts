import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { defaultLocale, type Locale } from "./site";

export type ArticleFrontmatter = {
  title: string;
  description: string;
  eyebrow: string;
  updated: string;
  statuses: Array<{ label: string; value: string }>;
};

export type ArticleContent = {
  frontmatter: ArticleFrontmatter;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

export async function getArticle(locale: Locale, slug: string): Promise<ArticleContent> {
  const raw = await readArticleFile(locale, slug);
  const parsed = matter(raw);
  return {
    frontmatter: normalizeFrontmatter(parsed.data),
    content: parsed.content
  };
}

async function readArticleFile(locale: Locale, slug: string) {
  const candidates = [locale, defaultLocale];
  for (const candidate of candidates) {
    const file = path.join(contentRoot, candidate, `${slug}.mdx`);
    try {
      return await fs.readFile(file, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error;
      }
    }
  }
  throw new Error(`Missing MDX article for ${slug}`);
}

function normalizeFrontmatter(data: Record<string, unknown>): ArticleFrontmatter {
  return {
    title: String(data.title ?? "No More Room in Hell 2 Guide"),
    description: String(data.description ?? "A No More Room in Hell 2 wiki article."),
    eyebrow: String(data.eyebrow ?? "Guide"),
    updated: String(data.updated ?? "Updated August 2026"),
    statuses: Array.isArray(data.statuses)
      ? data.statuses.map((item) => ({
          label: String((item as Record<string, unknown>).label ?? ""),
          value: String((item as Record<string, unknown>).value ?? "")
        }))
      : []
  };
}
