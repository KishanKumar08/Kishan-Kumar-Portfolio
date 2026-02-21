import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiBriefcase, FiAward } from 'react-icons/fi';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  const [activeTab, setActiveTab] =
    useState<'education' | 'experience'>('experience');

  const education = [
    {
      degree: "Full Stack Development Program",
      institution: "Masai School",
      period: "2023 - 2025",
      description:
        "Industry-focused software engineering program emphasizing scalable backend systems, real-world production deployment, and AI-driven application development.",
      cgpa: "8.64 CGPA",
      icon: FiAward,
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Jai Narain Vyas University",
      period: "2021 - 2024",
      description:
        "Built a strong mathematical foundation in logic, data structures, probability, and algorithmic thinking — enabling rigorous system design and performance optimization.",
      cgpa: "",
      icon: FiAward,
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Shine Public Sr. Sec. School",
      period: "2020 - 2021",
      description:
        "Achieved exceptional academic performance with strong grounding in mathematics and science.",
      cgpa: "99.40%",
      icon: FiAward,
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Mayoor Public Sr. Sec. School",
      period: "2018 - 2019",
      description:
        "Achieved exceptional academic performance with strong grounding in mathematics and science.",
      cgpa: "93.17%",
      icon: FiAward,
    },
  ];

  const experience = [
    {
      title: "AI Engineer",
      company: "Insurance Samadhan",
      period: "Jan 2025 – Present",
      description: [
        "Led architectural redesign of the KYP engine, restructuring event-driven pipelines and concurrency control, reducing end-to-end latency by 56%.",
        "Engineered Kafka-based microservices with idempotent consumers, deterministic retry strategies, Redis-backed caching, and dead-letter queues, increasing system throughput 3× under peak load while preventing cascade failures.",
        "Architected and deployed production-grade LLM + RAG pipelines using embeddings and vector databases, improving document extraction accuracy by 40%.",
        "Transitioned rule-based extraction to LLM-driven workflows with validation layers, reducing manual corrections by 50% and lowering API costs by 30–40%.",
        "Re-structured high-volume data pipelines using optimized Parquet storage and batch processing, reducing infrastructure and storage costs by 92%.",
        "Optimized scalable Python and Node.js APIs through query tuning, MongoDB indexing, and multi-layer caching, improving P95 response times by up to 98%.",
        "Delivered v-KYP, an end-to-end document validation platform (React + Django DRF + Docker), reducing internal QA and testing cycles by 60–70%.",
        "Developed a manual-KYP fallback platform (MERN stack) enabling side-by-side document verification when automated pipelines failed, strengthening operational continuity and reducing unresolved cases.",
        "Established production observability with Prometheus and Grafana, tracking consumer lag, latency percentiles, and failure metrics to maintain 99.9% uptime.",
        "Introduced a centralized logging service aggregating logs across internal microservices with an analytics dashboard, improving cross-service debugging efficiency and reducing incident investigation time.",
        "Implemented ML workflows for automated classification, object detection, and structured data extraction across large-scale document processing systems.",
      ],
      icon: FiBriefcase,
    },
    {
      title: "Python Developer",
      company: "Insurance Samadhan",
      period: "Sep 2024 – Dec 2024",
      description: [
        "Refactored core KYP microservices (INSA-Driver), improving modularity and reducing crash rates by 30%.",
        "Performed end-to-end database optimization, introducing schema validations and restructuring collections for better integrity and performance.",
        "Wrote clean, modular, and reusable code following best practices and SOLID principles.",
        "Implemented logging, input validation, and error handling mechanisms to improve observability and traceability.",
      ],
      icon: FiBriefcase,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.15 },
            },
          }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 text-pink-400 border border-white/20 rounded-full text-sm font-medium tracking-wide mb-4">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins mb-6">
              Engineering Systems That Scale
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Software Engineer (Backend & AI) focused on distributed system
              design, event-driven architectures, and production LLM pipelines.
              I build resilient systems with deterministic behavior, concurrency
              safety, and performance guarantees under load.
            </p>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            className="mb-16"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 shadow-lg text-center">
              <p className="text-lg leading-relaxed">
                With professional experience in high-scale systems, I operate
                at the intersection of backend engineering and AI. My work
                emphasizes idempotent processing, fault tolerance, cost
                optimization, and predictable system behavior — ensuring
                systems remain stable even under peak concurrency.
              </p>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center mb-12 gap-4 flex-wrap"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {['education', 'experience'].map((tab) => {
              const isActive = activeTab === tab;
              const Icon = tab === 'education' ? FiBook : FiBriefcase;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'text-white/60 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon />
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <VerticalTimeline
              layout="1-column-left"
              lineColor="rgba(255,255,255,0.2)"
            >
              {(activeTab === 'education'
                ? education
                : experience
              ).map((item, index) => {
                const Icon = item.icon;

                return (
                  <VerticalTimelineElement
                    key={index}
                    date={item.period}
                    icon={<Icon />}
                    iconStyle={{ background: '#ec4899', color: '#fff' }}
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#fff',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                    }}
                    contentArrowStyle={{
                      borderRight:
                        '7px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {'degree' in item ? item.degree : item.title}
                    </h3>

                    <h4 className="text-pink-400 font-semibold mb-3">
                      {'institution' in item
                        ? item.institution
                        : item.company}
                    </h4>

                    {'cgpa' in item && item.cgpa && (
                      <h4 className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text text-xl font-bold mb-3">
                        {item.cgpa}
                      </h4>
                    )}

                    {typeof item.description === 'string' ? (
                      <p className="text-white/70">
                        {item.description}
                      </p>
                    ) : (
                      <ul className="space-y-3 text-white/70 leading-relaxed">
                        {item.description.map(
                          (point: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-2"
                            >
                              <span className="w-2 h-2 mt-2 bg-pink-400 rounded-full flex-shrink-0"></span>
                              {point}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;