import React from "react";

const resumeSkills = {
  Languages: [
    "Python",
    "TypeScript",
    "JavaScript",
  ],
  "Core Fundamentals": [
    "DSA",
    "System Design",
    "Operating Systems",
    "DBMS",
    "OOP",
    "SOLID Principles",
    "Design Patterns",
  ],
  "Backend Engineering": [
    "Node.js",
    "Express.js",
    "Django",
    "FastAPI",
    "REST",
    "gRPC",
    "WebSockets",
  ],
  "Distributed Systems & Architecture": [
    "Kafka",
    "RabbitMQ",
    "Redis",
    "Event-Driven Architecture",
    "Idempotent Consumers",
    "Async Workflows",
    "Concurrency Control",
    "Retry Strategies",
  ],

  "AI Systems Engineering": [
    "LLM Pipelines",
    "RAG Architectures",
    "Embeddings",
    "Vector Databases",
    "Prompt Optimization",
    "LangChain",
    "PyTorch",
    "ML Algorithms",
  ],

  Databases: [
    "PostgreSQL",
    "MongoDB",
  ],

  "Cloud & Infrastructure": [
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],

  "Frontend": [
    "React.js",
    "Redux Toolkit",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST API Integration",
    "Responsive Web Design"
  ]
};

const headingColors = [
  "text-purple-400",
  "text-pink-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-cyan-400",
  "text-rose-400",
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#0f0c29] text-white"
    >
      <div className="max-w-[1100px] mx-auto text-center">

        <h2 className="text-5xl font-bold mb-20">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(resumeSkills).map(([title, skills], index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/40 transition-all duration-300"
            >
              <h3
                className={`text-xl font-semibold mb-6 ${headingColors[index % headingColors.length]
                  }`}
              >
                {title}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-md bg-white/10 border border-white/10 text-white/80 hover:bg-purple-500/20 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;