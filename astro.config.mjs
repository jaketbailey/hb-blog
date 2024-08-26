import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import react from "@astrojs/react";
import storyblok from "@storyblok/astro";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://hbfilmandmedia.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        projects: "storyblok/Projects",
        blogPost: "storyblok/BlogPost",
        about: "storyblok/About",
        projectsList: "storyblok/ProjectsList",
        blogPostList: "storyblok/BlogPostList",
        page: "storyblok/Page",
      },
      apiOptions: {
        region: "eu",
      },
    }),
  ],
});
