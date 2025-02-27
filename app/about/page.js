import React from 'react';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const GlassCard = ({ dataText, rotation, children }) => (
  <div data-text={dataText} style={{ '--r': rotation }} className="glass">
    {children}
  </div>
);


const timelineData = [
  {
    emoji: "🔍",
    title: " Smarter Resume Screening – Eliminating Bias & Improving Efficiency",
    description: `• The Problem: Traditional resume screening often leads to delays and unconscious biases, where recruiters may favor certain schools, companies, or backgrounds.
     Our Solution: Our AI-powered resume analysis tool evaluates candidates holistically, focusing on skills, experience, and potential rather than just keywords or past job titles..

• How It Works:
Uses Natural Language Processing (NLP) to understand resumes beyond keyword matching.
Identifies hidden talent by analyzing career trajectories, projects, and achievements.
Ensures fairness by masking names, genders, and other personal identifiers to promote unbiased hiring.`,
  },
  {
    emoji: "📅",
    title: " AI-Driven Interview Scheduling – Bridging the Gap Between HR & Candidates",
    description:
      `• The Problem: Coordinating interviews across multiple candidates and interviewers is time-consuming, leading to delays in the hiring process.
     Our Solution: Our AI-powered scheduling assistant automates interview coordination, reducing back-and-forth emails.

• How It Works:
Integrates with popular calendars (Google, Outlook, etc.) to find the best available slots.
Provides real-time rescheduling options if conflicts arise.
Sends automated reminders and follow-ups to ensure both HR and candidates stay informed.`,
  },
  {
    emoji: "🤝",
    title: " Personalized Candidate Recommendations – Finding the Right People for the Right Job",
    description:
      `• The Problem: Many job seekers receive irrelevant job recommendations, leading to frustration and wasted applications.
 Our Solution: Our AI engine matches candidates not just based on job titles but on skills, career goals, and company culture fit.

• How It Works:
Analyzes job descriptions and candidate profiles using machine learning models.
Provides ranked recommendations based on experience, preferences, and hiring trends.
Continuously learns from recruiter and candidate interactions to improve match accuracy.`,
  },
  {
    emoji: "🧠",
    title: "AI-Powered Candidate Insights – Helping Job Seekers Improve",
    description:
      `• The Problem: Many candidates apply for jobs but never receive feedback, making it hard to improve their chances.
Our Solution: Our AI analyzes resumes and applications, offering personalized feedback on strengths and areas for improvement.

• How It Works:
Identifies missing technical skills, soft skills, and industry trends relevant to the job.
Suggests resume enhancements based on successful applications.
Provides career trajectory insights, helping candidates plan their next steps strategically.`,
  },
  {
    emoji: "🎤",
    title: "Mock Interviews & Real-Time Feedback – Preparing Candidates for Success",
    description:
      `• The Problem: Many candidates struggle with interview performance, leading to missed opportunities.
Our Solution: Our AI-powered mock interview tool simulates real interview scenarios, evaluating communication, confidence, and technical knowledge.

• How It Works:
Uses speech analysis and facial recognition to assess non-verbal cues like confidence and clarity.
Provides real-time feedback on common interview mistakes.
Includes industry-specific technical assessments to help candidates refine their answers.`,
  },
  {
    emoji: "⚖️",
    title: " Ethical & Bias-Free Hiring – Ensuring Fair & Inclusive Recruitment",
    description:
      `• The Problem: AI hiring systems can unintentionally introduce biases if not managed properly.
 Our Solution: Our platform integrates Explainable AI (XAI) to ensure transparent and unbiased hiring decisions.

• How It Works:
Uses bias detection algorithms to identify and mitigate discriminatory patterns.
Promotes diversity and inclusion by ensuring equal opportunities for all candidates.
Provides HR teams with AI-driven insights to make fair, data-driven hiring decisions.`,
  },
  {
    emoji: "📢",
    title: " Continuous Engagement & Post-Interview Support – Building a Stronger Hiring Ecosystem",
    description:
      `• The Problem: Many hiring platforms focus only on the application process, ignoring post-interview experiences.
 Our Solution: Our AI-driven engagement system keeps candidates connected with companies even after interviews.

• How It Works:
Collects feedback from HR and candidates to refine future hiring decisions.
Provides job seekers with career insights and tailored job alerts.
Builds a community-driven recruitment experience where candidates stay informed about future opportunities.`,
  },
];








const teamMembers = [
  {
    name: "Lakshya Garg",
    role: "Full Stack Developer and NLP Engineer",
    image: "#",
    twitter: "#",
    linkedin: "#",
    github: "https://github.com/LAKSHYAG16"
  },
  {
    name: "Param Saxena",
    role: "Front End Developer",
    image: "#",
    twitter: "#",
    linkedin: "#",
    github: "https://github.com/LAKSHYAG16"
  },
  {
    name: "Satya Prakash",
    role: "Database Manager",
    image: "#",
    twitter: "#",
    linkedin: "#",
    github: "https://github.com/LAKSHYAG16"
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="font-bold">
        <h1 className="text-5xl orbitron items-center justify-center flex text-gradient max-w-[55vw] m-auto p-10">
          About US
        </h1>

        <h2 className="max-w-[65vw] flex items-center justify-center m-auto mt-5 text-3xl poppins subtext-gradient">
          "Smart Hiring, Smarter Candidates!"
        </h2>

        <p className="max-w-[65vw] m-auto mt-5 text-center text-2xl poppins text-[#575757]">
          We bridge the gap between HR and candidates. While HR benefits from advanced automation, candidates receive AI-driven insights to optimize their resumes and present their best selves to potential employers.
        </p>

        <h2 className="max-w-[65vw] flex items-center justify-center m-auto mt-14 text-3xl poppins subtext-gradient">
          What makes us unique?
        </h2>

        <div className="about-container" style={{ marginTop: '50px' }}>
          <GlassCard dataText="Github" rotation="-15">
            <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M165.9 397.4c0 2..." />
            </svg>
            <h2 className='glass_h'>Hyper-Personalized Candidate Insights</h2>
            <p className='glass_p'>Unlock the True Potential of Talent</p>
            <ul>
              <li className='glass_l'>- Analyze candidates beyond resumes, focusing on their soft skills and personality traits.</li>
              <li className='glass_l'>- Gain valuable insights to predict cultural fit and future performance.</li>
            </ul>
          </GlassCard>

          <GlassCard dataText="Code" rotation="5">
            <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M392.8 1.2c-17..." />
            </svg>
            <h2 className='glass_h'>Ethics-Driven Recruitment</h2>
            <p className='glass_p'>Fair, Transparent, and Inclusive Hiring</p>
            <ul>
              <li className='glass_l'>- Remove biases with ethical AI-powered decision-making tools.</li>
              <li className='glass_l'>- Ensure fair assessment of candidates from diverse backgrounds.</li>
            </ul>
          </GlassCard>

          <GlassCard dataText="Earn" rotation="25">
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 64C28.7..." />
            </svg>
            <h2 className='glass_h'>Dynamic Job Description Optimization</h2>
            <p className='glass_p'>Write Job Descriptions That Attract Top Talent</p>
            <ul>
              <li className='glass_l'>- Generate AI-driven job descriptions tailored to roles and market trends.</li>
              <li className='glass_l'>- Optimize content to engage and attract better-qualified candidates.</li>
            </ul>
          </GlassCard>
        </div>


        <div className="w-full">
          <Timeline data={timelineData} />
        </div>



        <div className="us-container min-h-screen flex items-center justify-center p-10">
          <div className="about-grid flex justify-center gap-10 max-w-6xl">
            {teamMembers.map((member, index) => (
              <div key={index} className="about-card bg-[#451d84] min-w-[22vw] max-w-[22vw] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
                <div className="about-profileimage w-28 h-28 rounded-full overflow-hidden border-4 border-gray-600">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="about-details text-center mt-4">
                  <h2 className="about-name text-xl font-bold">{member.name}</h2>
                  <p className="about-role text-gray-400">{member.role}</p>
                </div>

                <div className="about-socials mt-4 flex flex-col items-center">
                  <div className="social-links">
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <div id="twitter" className="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                        <span>@{member.name.split(" ")[0]}</span>
                      </div>
                    </a>

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <div id="linkedin" className="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                        </svg>
                        <span>in/{member.name.split(" ")[0]}</span>
                      </div>
                    </a>

                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <div id="github" className="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        <span>{member.name.split(" ")[0]}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;