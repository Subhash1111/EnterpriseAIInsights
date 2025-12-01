export type Post = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  summary: string;
  content: string; // full article body for now
};

export const posts: Post[] = [
  {
    title: "Why I Write in Public",
    slug: "why-i-write-in-public",
    date: "2024-08-20",
    readTime: "5 min",
    summary:
      "Why I share my work, drafts, and mistakes instead of waiting for perfection.",
    content: `
I started writing in public because...

(put your full article here, multiple paragraphs, markdown-style if you like)
`,
  },
  {
    title: "My Engineering Principles",
    slug: "my-engineering-principles",
    date: "2024-08-05",
    readTime: "7 min",
    summary:
      "A living list of principles that guide how I design, build, and ship software.",
    content: `
Here are the principles that guide my engineering work...

(another full article here)
`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}