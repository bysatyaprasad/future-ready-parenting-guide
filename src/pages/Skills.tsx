
import React from 'react';
import PageHeader from '@/components/PageHeader';
import SkillCard from '@/components/SkillCard';

const Skills = () => {
  const skills = [
    {
      title: "Digital Literacy",
      description: "Understanding technology basics, online safety, and adapting to digital tools as they evolve.",
      ageRange: "Ages 5+",
      link: "/skills/digital-literacy"
    },
    {
      title: "Financial Intelligence",
      description: "Learning how money works, saving, investing, and making smart financial decisions.",
      ageRange: "Ages 6+",
      link: "/skills/financial-intelligence"
    },
    {
      title: "Communication Skills",
      description: "Effective verbal, written and presentation skills for expressing ideas clearly.",
      ageRange: "Ages 4+",
      link: "/skills/communication"
    },
    {
      title: "Critical Thinking",
      description: "Analyzing information, solving problems, and making reasoned judgments.",
      ageRange: "Ages 7+",
      link: "/skills/critical-thinking"
    },
    {
      title: "Creative Problem Solving",
      description: "Finding innovative solutions to challenges through creative approaches.",
      ageRange: "Ages 5+",
      link: "/skills/creative-problem-solving"
    },
    {
      title: "Entrepreneurship",
      description: "Understanding business basics, identifying opportunities, and creating value.",
      ageRange: "Ages 10+",
      link: "/skills/entrepreneurship"
    },
    {
      title: "Coding & Technical Skills",
      description: "Computer programming fundamentals and technical problem-solving abilities.",
      ageRange: "Ages 8+",
      link: "/skills/coding"
    },
    {
      title: "Social Intelligence",
      description: "Navigating social situations, building relationships, and working effectively with others.",
      ageRange: "Ages 3+",
      link: "/skills/social-intelligence"
    },
    {
      title: "Self-Management",
      description: "Setting goals, managing time, and developing organizational habits.",
      ageRange: "Ages 6+",
      link: "/skills/self-management"
    },
    {
      title: "Adaptive Learning",
      description: "Learning how to learn, adapting to new information, and continuous self-improvement.",
      ageRange: "Ages 7+",
      link: "/skills/adaptive-learning"
    },
    {
      title: "Media Literacy",
      description: "Critically analyzing media messages and creating responsible content.",
      ageRange: "Ages 8+",
      link: "/skills/media-literacy"
    },
    {
      title: "Global Awareness",
      description: "Understanding diverse cultures, global issues, and interconnectedness.",
      ageRange: "Ages 7+",
      link: "/skills/global-awareness"
    }
  ];

  return (
    <>
      <PageHeader
        title="Future-Ready Skills Guide"
        description="Discover the essential skills your child needs to thrive in tomorrow's world. Each skill is broken down into age-appropriate activities and learning paths."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                ageRange={skill.ageRange}
                link={skill.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
