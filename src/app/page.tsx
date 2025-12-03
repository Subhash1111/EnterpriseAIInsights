"use client";

import Link from "next/link";
import { useState } from "react";

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/subhash-tatavarthi-a7608014/",
  medium: "https://medium.com/@t.subhash",
  github: "https://github.com/Subhash1111",
  email: "mailto:t.subhash1111@gmail.com",
};


const FEATURED_PROFILE = {
  name: "Subhash Tatavarthi",
  headline: "Enterprise Architect • Content Writer",
  location: "Celina, TX",
  tagline:
    "Sharing insights on enterprise AI architecture, cloud-native solutions, and the journey of building intelligent systems at scale",
};

const ORIGINAL_BLOG_POSTS = [
  {
    title: "Why I Write in Public",
    slug: "why-i-write-in-public",
    date: "2024-08-20",
    readTime: "5 min",
    summary:
      "Why I share my work, drafts, and mistakes instead of waiting for perfection.",
  },
  {
    title: "My Engineering Principles",
    slug: "my-engineering-principles",
    date: "2024-08-05",
    readTime: "7 min",
    summary:
      "A living list of principles that guide how I design, build, and ship software.",
  },
];

const MEDIUM_POSTS = [
  {
    title: "From Data Engineering — AI : Transform yourselves in simple ways",
    url: "https://medium.com/@t.subhash/from-data-engineering-ai-transform-yourselves-in-simple-ways-6178c4863021",
    date: "2025-07-25",
    tag: "Data Engineering to AI",
  },
  {
    title: "From Idea to Impact: How to Implement Generative AI for Any Business Use Case",
    url: "https://medium.com/@t.subhash/from-idea-to-impact-how-to-implement-generative-ai-for-any-business-use-case-4ad5c58a07d4",
    date: "2025-07-25",
    tag: "Generative AI",
  },
  {
    title: "Why Vector Databases Are the Secret Ingredient for Smarter Search",
    url: "https://medium.com/@t.subhash/why-vector-databases-are-the-secret-ingredient-for-smarter-search-5fc8c3ccd64b",
    date: "2024-08-15",
    tag: "Generative AI",
  },
];



const JOURNALS = [
  {
    title: "Scalable GenAI Systems for Enterprise Decision Intelligence: Architecture and Adoption Strategies",
    url:"https://www.jisem-journal.com/index.php/journal/article/view/11912",
    date: "2025-06-25",
    summary: "Scalable GenAI Systems for Enterprise Decision Intelligence: Architecture and Adoption Strategies",
  },
  {
    title: "Domain Aware Prompt Engineering",
    url:"https://journalwjaets.com/sites/default/files/fulltext_pdf/WJAETS-2025-1249.pdf",
    date: "2025-07-25",
    summary: "Domain Aware Prompt Engineering",
  },
  {
    title: "Optimising Data Loss Prevention (DLP) Strategies in Cloud-Native Financial Platforms",
    url:"https://www.jisem-journal.com/index.php/journal/article/view/11983",
    date: "2025-07-25",
    summary: "Optimising Data Loss Prevention (DLP) Strategies in Cloud-Native Financial Platforms",
  },

];

const MEDIA_PUBLICATIONS = [
  {
    outlet: "APN Media",
    title: "Reframing Generative AI for the Enterprise: From Hype to Architecture-led Value",
    url: "https://www.apnnews.com/reframing-generative-ai-for-the-enterprise-from-hype-to-architecture-led-value/",
    date: "2025-06-23",
  },
  {
    outlet: "CXO Today",
    title: "Most Enterprises Are Building GenAI Wrong—Here’s What CTOs and CIOs Must Do Differently",
    url: "https://cxotoday.com/specials/most-enterprises-are-building-genai-wrong-heres-what-ctos-and-cios-must-do-differently/",
    date: "2025-07-28",
  },
  {
    outlet: "Hans India",
    title: "From Dashboards to Decision Intelligence: Vision for GenAI in the Enterprise",
    url: "https://www.thehansindia.com/news/business/from-dashboards-to-decision-intelligencevision-for-genai-in-the-enterprise-996212",
    date: "2025-08-15",
  },
];

const navItems = [
  { id: "about", label: "Profile" },
  { id: "writing", label: "Writing" },
  { id: "journals", label: "Journals" },
  { id: "media", label: "Media" },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState<string>("about");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveNav(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <button
            className="text-lg font-semibold tracking-tight"
            onClick={() => scrollTo("hero")}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {FEATURED_PROFILE.name}
            </span>
          </button>

          <nav className="hidden gap-4 text-sm md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-full px-3 py-1 transition ${
                  activeNav === item.id
                    ? "bg-slate-800 text-slate-50"
                    : "text-slate-600 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-700 hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </Link>
            <Link
              href={SOCIAL_LINKS.medium}
              target="_blank"
              className="hidden rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 sm:inline-block"
            >
              Read on Medium
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        {/* Hero / Profile */}
        <section id="hero" className="grid gap-10 pt-4 md:grid-cols-[2fr,1.4fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Always building, always learning.
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {FEATURED_PROFILE.headline}
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
                {FEATURED_PROFILE.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                {FEATURED_PROFILE.location}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                Writing about software, systems, and real-world lessons.
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href={SOCIAL_LINKS.medium}
                target="_blank"
                className="rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
              >
                Read my latest posts
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:border-slate-500 hover:text-slate-900"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          {/* Side card */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500" />
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    {FEATURED_PROFILE.name}
                  </h2>
                  <p className="text-xs text-slate-600">
                    Writing, building, and sharing the journey in public.
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-1 text-xs text-slate-600">
                <p>• Software & systems</p>
                <p>• Learning and career journals</p>
                <p>• Long-form essays & media features</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm">
              This site is my digital studio. It collects:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Deep-dive posts from Medium</li>
                <li>Personal build & learning journals</li>
                <li>Talks, podcasts, and media mentions</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Profile */}
        <section id="about" className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl text-slate-900">
            Profile
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            I’m a{" "}
            <span className="font-medium text-slate-100">
              software engineer and writer
            </span>{" "}
            who enjoys turning complex problems into clear systems and clear
            stories. This blog is where I document experiments, wins, failures,
            and frameworks I’m testing in the real world.
          </p>
        </section>

                {/* Medium Articles */}
        <section id="writing" className="mt-16 space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Medium Articles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                My latest thoughts and insights on{" "}
                <Link
                  href={SOCIAL_LINKS.medium}
                  target="_blank"
                  className="font-medium text-blue-600 hover:text-blue-500 underline"
                >
                  Medium
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Medium article cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {MEDIUM_POSTS.map((post) => (
              <article
                key={post.url}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      {post.date}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    A recent article published on Medium about {post.tag}.
                  </p>
                </div>

                <div className="mt-4">
                  <Link
                    href={post.url}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Read More
                    <span className="ml-1 text-xs">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Link
              href={SOCIAL_LINKS.medium}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              View All Articles
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </section>

        {/* Journals */}
        <section id="journals" className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            Journals
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Short, honest entries about what I’m building and learning each
            week — less polished than articles, more like notes from the field.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {JOURNALS.map((entry) => (
                <Link
                  key={entry.title}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-cyan-300 hover:shadow-md transition-colors">
                    <div className="text-sm text-slate-500">{entry.date}</div>
                    <h3 className="mt-1 text-base font-semibold text-slate-800 hover:text-cyan-600">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {entry.summary}
                    </p>
                  </article>
                </Link>
              ))}
          </div>
        </section>

        {/* Media */}
        <section id="media" className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl text-slate-900">
            Media & Publications
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Interviews, podcasts, and features where I’ve shared ideas about
            engineering, writing, and building a career in public.
          </p>

          <div className="space-y-3">
            {MEDIA_PUBLICATIONS.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-blue-700">{item.outlet}</span>
                  <span className="text-slate-500">{item.date}</span>
                </div>
                <div className="mt-1 font-semibold text-slate-900">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {FEATURED_PROFILE.name}. Built in
              public.
            </span>
            <span>Powered by Next.js · Deployed on Vercel · Writing on Medium.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}