import React from "react";

// Portfolio App for: Anusha (based on provided resume)
// Single-file React component (default export) styled with Tailwind utility classes.
// Usage: Drop into a Vite/CRA React project as App.jsx and ensure Tailwind is configured.

export default function App() {
  const profile = {
    name: "Anusha",
    email: "mishti24saini@gmail.com",
    phone: "+91 78142 39233",
    linkedin: "https://linkedin.com/in/anusha202024",
    github: "https://github.com/anusha202024",
    title: "Data Engineer / Data Analyst",
    location: "Gurugram / Delhi, India",
    summary:
      "Data Engineer with experience in building ETL pipelines, dashboards and data solutions using Airflow, Python, Power BI and modern data stacks. Passionate about automation, data quality and scalable systems.",
    skills: [
      "Python",
      "C++",
      "Java",
      "SQL",
      "PowerShell",
      "Bash",
      "DSA",
      "DBMS",
      "OOPS",
      "AI/ML",
      "Power BI",
      "Tableau",
      "PostgreSQL",
      "Snowflake",
      "Databricks",
      "Airflow",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "React",
    ],
    education: [
      {
        school: "Punjab Engineering College, Chandigarh",
        degree: "Bachelor of Technology — Computer Science and Engineering",
        dates: "Apr 2020 — Apr 2024",
        notes:
          "Coursework: Computer Architecture, DSA, DBMS, OOPS, OS, ML, AI, NLP",
      },
    ],
    experience: [
      {
        company: "ZS Associates",
        title: "Data Analyst",
        location: "Gurugram, India",
        dates: "Aug 2024 — Present",
        bullets: [
          "Built interactive dashboards and data models using Power BI, Tableau and Excel enabling 25% faster decision-making.",
          "Delivered data-driven insights and collaborated with stakeholders to drive KPI-driven improvements.",
        ],
      },
      {
        company: "Kimbal Technologies",
        title: "Data Engineer",
        location: "Delhi, India",
        dates: "Jun 2024 — May 2025",
        bullets: [
          "Designed and implemented ETL pipelines using Apache Airflow for IoT data, improving freshness and reporting speed by 35%.",
          "Implemented DR infrastructure including AD integration and automated DB backups, achieving 99.9% uptime.",
        ],
      },
      {
        company: "Cvent",
        title: "Data Engineer Intern",
        location: "Gurugram, Haryana",
        dates: "Jan 2023 — Jul 2023",
        bullets: [
          "Built a Slack bot for real-time DB anomaly alerts, improving incident response time by 60%.",
          "Created a scalable data parser to automate ETL to AWS Redshift, speeding ingestion by 40%.",
        ],
      },
    ],
    projects: [
      {
        name: "Data Archiving and Purging Solution",
        bullets: [
          "Automated scripts to archive outdated data and purge obsolete records across multiple tables to improve performance.",
          "Tools: T-SQL, Python, Shell, SSMS",
        ],
      },
      {
        name: "Music Store Analysis",
        bullets: [
          "SQL queries to compute KPIs: revenue per customer, repeat purchase rates, peak purchase time.",
          "Tools: SQL, SSMS, Excel",
        ],
      },
    ],
    interests: ["Basketball", "Badminton", "Tennis", "Cooking", "Guitar"],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto p-6 lg:p-12">
        <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
            {profile.name.split(" ")[0][0]}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{profile.title} · {profile.location}</p>
              </div>
              <div className="hidden md:flex flex-col items-end text-sm text-gray-700 dark:text-gray-300">
                <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>
                <a href={`tel:${profile.phone}`} className="mt-1">{profile.phone}</a>
                <div className="mt-2 flex gap-3">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.summary}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold">Skills</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold">Education</h3>
                <div className="mt-3 text-sm">
                  {profile.education.map((e) => (
                    <div key={e.school} className="mb-2">
                      <div className="font-medium">{e.school}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{e.degree} · {e.dates}</div>
                      <div className="text-xs mt-1">{e.notes}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold">Interests</h3>
                <div className="mt-3 text-sm">
                  {profile.interests.join(" · ")}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="mt-4">
                {profile.experience.map((exp) => (
                  <article key={exp.company} className="mb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{exp.title} — {exp.company}</h3>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{exp.location} · {exp.dates}</div>
                      </div>
                    </div>
                    <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="mt-4 space-y-3">
                {profile.projects.map((p) => (
                  <div key={p.name}>
                    <div className="font-medium">{p.name}</div>
                    <ul className="ml-5 list-disc text-sm text-gray-700 dark:text-gray-300 mt-2">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-sm">If you'd like to collaborate or learn more — reach out!</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Email</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-sm">GitHub</a>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <div className="mt-3 text-sm space-y-2">
                <div><span className="font-medium">Email:</span> {profile.email}</div>
                <div><span className="font-medium">Phone:</span> {profile.phone}</div>
                <div><span className="font-medium">Location:</span> {profile.location}</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">Resume</h3>
              <p className="mt-2 text-sm">Download a printer-ready copy of the resume (PDF).</p>
              <div className="mt-3 flex gap-2">
                <a href="#" className="px-3 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-700">Download PDF</a>
                <a href="#" className="px-3 py-2 text-sm rounded-md border border-gray-200 dark:border-gray-700">Print</a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">Hobbies</h3>
              <div className="mt-3 text-sm">{profile.interests.join(", ")}</div>
            </div>
          </aside>
        </main>

        <footer className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
          Built with ❤️ · Interactive portfolio generated from resume data
        </footer>
      </div>
    </div>
  );
}
