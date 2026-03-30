"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemas";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export default defineConfig({
  name: "cobalt-studio",
  title: "COBALT Studio",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
