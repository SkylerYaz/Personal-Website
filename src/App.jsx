import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowRight, Mail, FileText, Database, Briefcase, GraduationCap, BarChart3, BellRing, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const profile = {
  name: "Skyler Yazzie",
  title: "Data Science Student | Analytics and Automation",
  intro:
    "I build practical analytics and automation solutions that improve visibility, reduce manual work, and help teams make better decisions.",
  about:
    "I am a Data Science student with interests in analytics, automation, and applied problem solving. I enjoy building practical solutions that turn messy workflows into clearer processes and using data to support better decisions. Through academic projects and hands-on experience, I have worked on automation, incident visibility, predictive modeling, and technical support. My goal is to continue growing in roles where I can combine data, business understanding, and technical execution to create useful outcomes.",
  coOpTitle: "OneCall Support Engineer",
  coOpCompany: "Insight",
  coOpSummary:
    "In my current co-op, I work in client-to-vendor IT relations while supporting team workflow improvements and collecting and analyzing incident-related data. I created an AI-driven case notification workflow that reads incoming case emails, extracts key details, and sends structured Teams messages for better visibility. I also built an automated logging process for cases coming through email, helping improve tracking, consistency, and follow-up across the workflow.",
  email: "skyler.yazzie@icloud.com",
  linkedin: "PASTE_YOUR_LINKEDIN_HERE",
  github: "PASTE_YOUR_GITHUB_HERE",
  resume: "#",
};

const skills = {
  technical: [
    "Python",
    "R",
    "SQL",
    "Power Automate",
    "Excel",
    "Machine Learning",
    "Data Analysis",
    "Data Visualization",
    "Workflow Automation",
    "Statistical Analysis",
  ],
  professional: [
    "Communication",
    "Cross-Functional Collaboration",
    "Problem Solving",
    "Process Improvement",
    "Documentation",
    "Business Analysis",
    "Stakeholder Support",
    "Project Ownership",
  ],
};

const timeline = [
  {
    year: "Present",
    title: "OneCall Support Engineer",
    subtitle: "Insight",
    description:
      "Supporting client-to-vendor IT relations, improving workflow visibility, and analyzing incident-related information through automation and structured case tracking.",
    icon: Briefcase,
  },
  {
    year: "Present",
    title: "B.S. in Data Science",
    subtitle: "University of Iowa",
    description:
      "Pursuing a degree in Data Science while building experience in analytics, statistics, programming, and applied problem solving.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "FutureBright Insurance Risk Segmentation Model",
    subtitle: "Datathon 2025",
    description:
      "Built and tuned machine learning models to predict claim cost per policy term and analyze drivers of insurance risk.",
    icon: BarChart3,
  },
  {
    year: "Recent",
    title: "Case Message and Logging Notifier",
    subtitle: "Workflow Automation Project",
    description:
      "Created an AI-based workflow that extracts case details from emails, sends Teams notifications, and supports automated case logging.",
    icon: BellRing,
  },
];

const projects = [
  {
    id: "case-notifier",
    title: "Case Message and Logging Notifier",
    short: "An automation workflow that extracts case details from incoming emails, sends Teams notifications, and supports structured logging for better incident visibility.",
    overview:
      "This project focused on improving awareness around incoming case activity by automatically reading case-related emails, extracting useful details, and surfacing the information in a more actionable format.",
    problem:
      "Teams can lose time manually checking emails for case updates, identifying the most important details, and keeping logs consistent. That creates delays, inconsistent follow-up, and lower visibility into active work.",
    tools: ["Power Automate", "Outlook", "Microsoft Teams", "Excel", "JSON Extraction", "Workflow Design"],
    role:
      "I designed the automation logic, structured the extraction workflow, built the Teams notification process, and created an automated logging system for cases coming through email.",
    impact:
      "The workflow improved case visibility, reduced manual monitoring, and created a more consistent process for tracking important case activity and follow-up.",
    takeaways: [
      "Automation is most useful when it improves both speed and clarity.",
      "Reliable workflows depend on consistent extraction logic and clean routing.",
      "Operational tools need to be useful for day-to-day users, not just technically functional.",
    ],
    accent: "from-stone-700 to-neutral-900",
  },
  {
    id: "futurebright-insurance",
    title: "FutureBright Insurance Risk Segmentation Model",
    short: "A Datathon project using supervised learning to predict claim cost per policy term and segment customers by insurance risk.",
    overview:
      "This project used historical auto policy data to analyze patterns in insurance risk and support more informed decision-making through predictive modeling.",
    problem:
      "Insurance decisions depend on understanding risk in a way that is practical, explainable, and useful for business decision-making. The challenge was to simplify a large tabular dataset while preserving predictive power.",
    tools: ["Python", "XGBoost", "Feature Engineering", "Variable Reduction", "SHAP", "Data Visualization"],
    role:
      "I contributed to data preparation, feature engineering, model development, and interpretation of results, helping connect technical output to business-facing insights.",
    impact:
      "The project produced a model for predicting claim cost per policy term, identified key drivers of loss, and supported technical and business presentations for stakeholders.",
    takeaways: [
      "Model performance matters, but interpretation matters too.",
      "Feature selection can strongly improve practical model usefulness.",
      "Strong analytics work should connect technical results to business decisions.",
    ],
    accent: "from-amber-700 to-stone-900",
  },
];

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-stone-700 transition hover:text-black dark:text-stone-300 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-stone-600 dark:text-stone-300">
        {description}
      </p>
    </div>
  );
}

function ProjectDetailPage({ project, onBack }) {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-stone-900 dark:bg-[#0f0f0f] dark:text-stone-100">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-stone-900 dark:text-stone-300 dark:hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" /> Back to portfolio
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className={`rounded-3xl bg-gradient-to-br ${project.accent} p-[1px] shadow-xl`}>
            <div className="rounded-3xl bg-white/95 p-8 dark:bg-stone-950/95 sm:p-10">
              <Badge className="mb-4 rounded-full bg-stone-200 px-3 py-1 text-stone-800 dark:bg-stone-800 dark:text-stone-100">
                Featured Project
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600 dark:text-stone-300 sm:text-lg">
                {project.short}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60 md:col-span-2">
              <CardContent className="space-y-8 p-8">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Project overview</h3>
                  <p className="leading-7 text-stone-600 dark:text-stone-300">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">Problem being solved</h3>
                  <p className="leading-7 text-stone-600 dark:text-stone-300">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">My role and contributions</h3>
                  <p className="leading-7 text-stone-600 dark:text-stone-300">
                    {project.role}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">Results or impact</h3>
                  <p className="leading-7 text-stone-600 dark:text-stone-300">
                    {project.impact}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold">Key takeaways</h3>
                  <div className="space-y-3">
                    {project.takeaways.map((takeaway) => (
                      <div
                        key={takeaway}
                        className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                      >
                        {takeaway}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60">
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Tools and technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#f6f3ee] text-stone-900 transition-colors dark:bg-[#0f0f0f] dark:text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f6f3ee]/90 backdrop-blur dark:border-stone-800 dark:bg-[#0f0f0f]/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="text-base font-semibold tracking-tight sm:text-lg">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#timeline">Timeline</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="outline" className="rounded-full border-stone-300 dark:border-stone-700">
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-stone-200 px-6 py-4 dark:border-stone-800 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink href="#about" onClick={() => setMobileOpen(false)}>About</NavLink>
              <NavLink href="#experience" onClick={() => setMobileOpen(false)}>Experience</NavLink>
              <NavLink href="#projects" onClick={() => setMobileOpen(false)}>Projects</NavLink>
              <NavLink href="#timeline" onClick={() => setMobileOpen(false)}>Timeline</NavLink>
              <NavLink href="#skills" onClick={() => setMobileOpen(false)}>Skills</NavLink>
              <NavLink href="#contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(231,229,228,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.10),transparent_24%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="space-y-7"
            >
              <Badge className="rounded-full border border-stone-300 bg-white/80 px-4 py-1 text-stone-700 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-200">
                {profile.title}
              </Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 dark:text-stone-50 sm:text-6xl">
                  {profile.name}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300 sm:text-xl">
                  {profile.intro}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-stone-900 px-6 text-white hover:bg-black dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white">
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-stone-300 px-6 dark:border-stone-700">
                  <a href={profile.resume} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-stone-300 px-6 dark:border-stone-700">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="grid gap-4"
            >
              <Card className="rounded-3xl border-stone-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Focused on practical data work</p>
                      <p className="text-sm text-stone-500 dark:text-stone-400">Analytics, automation, and operational problem solving</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-stone-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-2xl bg-stone-100 p-3 dark:bg-stone-800">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Current focus</p>
                      <p className="text-sm text-stone-500 dark:text-stone-400">Building experience through co-op work and applied projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-stone-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-medium">Professional links</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800">
                    LinkedIn
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800">
                    GitHub
                    </a>
                    <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800">
                      <Mail className="h-4 w-4" /> Email
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="About"
            title="A clear introduction to who I am and where I’m headed"
            description="This section is written to feel personal, direct, and credible for recruiters, hiring managers, and professional connections."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm dark:border-stone-800 dark:bg-stone-900/60">
              <CardContent className="p-8">
                <p className="text-lg leading-8 text-stone-700 dark:text-stone-200">{profile.about}</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm dark:border-stone-800 dark:bg-stone-900/60">
              <CardContent className="space-y-4 p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Current role</p>
                  <p className="mt-2 text-lg font-medium">{profile.coOpTitle}</p>
                  <p className="text-stone-600 dark:text-stone-300">{profile.coOpCompany}</p>
                </div>
                <p className="leading-7 text-stone-600 dark:text-stone-300">{profile.coOpSummary}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Experience"
            title="Experience grounded in real work and real responsibility"
            description="The experience section emphasizes current growth, ownership, and practical contribution, with a strong focus on co-op impact."
          />
          <div className="mt-10">
            <Card className="rounded-[2rem] border-stone-200/70 bg-gradient-to-br from-white to-stone-100 shadow-sm dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
              <CardContent className="grid gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-10">
                <div className="space-y-5">
                  <Badge className="w-fit rounded-full bg-stone-900 px-3 py-1 text-white dark:bg-stone-100 dark:text-stone-900">
                    Highlighted Experience
                  </Badge>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{profile.coOpTitle}</h3>
                    <p className="mt-1 text-stone-600 dark:text-stone-300">{profile.coOpCompany}</p>
                  </div>
                  <p className="leading-7 text-stone-700 dark:text-stone-200">{profile.coOpSummary}</p>
                </div>
                <div className="grid gap-4">
                  {[
                    "Supports technical and operational workflows",
                    "Works across teams and communication points",
                    "Contributes to process visibility and organization",
                    "Builds experience relevant to analytics and technical business work",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work that shows practical thinking and technical range"
            description="Each project is framed to show the challenge, the work, and the value behind it, while staying readable for both technical and non-technical audiences."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full rounded-[2rem] border-stone-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/60">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className={`mb-5 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-stone-600 dark:text-stone-300">{project.short}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-8 flex gap-3">
                      <Button
                        className="rounded-full"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="timeline" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Timeline"
            title="A concise view of education, experience, and milestones"
            description="This timeline is structured to help people quickly understand progression, applied experience, and focus areas over time."
          />
          <div className="mt-10 space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="grid gap-4 rounded-3xl border border-stone-200/70 bg-white/75 p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900/60 md:grid-cols-[140px_56px_1fr] md:items-start"
                >
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">{item.year}</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 dark:bg-stone-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{item.subtitle}</p>
                    <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Skills"
            title="Technical ability paired with professional judgment"
            description="The skill groups are organized to make your strengths easy to scan and easy to connect back to your experience and projects."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm dark:border-stone-800 dark:bg-stone-900/60">
              <CardContent className="p-8">
                <h3 className="mb-5 text-xl font-semibold">Technical skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-stone-200/70 bg-white/70 shadow-sm dark:border-stone-800 dark:bg-stone-900/60">
              <CardContent className="p-8">
                <h3 className="mb-5 text-xl font-semibold">Professional skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.professional.map((skill) => (
                    <Badge key={skill} className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1.5 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-stone-200/70 bg-gradient-to-br from-stone-900 to-stone-700 p-8 text-white shadow-xl dark:border-stone-700 dark:from-stone-100 dark:to-stone-300 dark:text-stone-900 sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-300 dark:text-stone-700">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s connect
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-200 dark:text-stone-800">
                I am interested in opportunities related to data science, analytics, automation, and technical business problem solving. If you would like to connect, collaborate, or discuss opportunities, feel free to reach out.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white text-stone-900 hover:bg-stone-100 dark:bg-stone-900 dark:text-white dark:hover:bg-black">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 dark:border-stone-700 dark:text-stone-900 dark:hover:bg-stone-200/60">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 dark:border-stone-700 dark:text-stone-900 dark:hover:bg-stone-200/60">
                <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 dark:border-stone-700 dark:text-stone-900 dark:hover:bg-stone-200/60">
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/70 px-6 py-8 dark:border-stone-800 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            © {currentYear} {profile.name}. Built for a professional online presence.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              GitHub
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">
              Resume
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-black dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


