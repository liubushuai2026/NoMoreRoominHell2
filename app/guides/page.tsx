import type { Metadata } from "next";
import { GuideIndexPage } from "../_components/Pages";

export const metadata: Metadata = {
  title: "No More Room in Hell 2 Guides - Wiki Navigation",
  description:
    "Browse No More Room in Hell 2 keyword pages for player count, release date, platforms, Steam, reviews, maps, weapons, extraction, and fixes."
};

export default function Page() {
  return <GuideIndexPage locale="en" />;
}
