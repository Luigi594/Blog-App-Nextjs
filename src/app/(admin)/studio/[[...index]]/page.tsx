import { Metadata } from "next";
import { Studio } from "./Studio";
import { metadata as studioMetaData } from "next-sanity/studio/metadata";

export const metadata: Metadata = {
  ...studioMetaData,
  viewport: `${studioMetaData.viewport}, interactive-widget=resizes-content`,
};

export default function StudioPage() {
  return <Studio />;
}
