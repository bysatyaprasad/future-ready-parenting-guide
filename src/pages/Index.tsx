
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, ChevronDown, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const benefits = [
    {
      title: "Early Financial Understanding",
      description: "Help kids understand money, savings, and investments at an age-appropriate level."
    },
    {
      title: "Future-Proof Skills",
      description: "Develop skills that will remain valuable despite changing job markets and technology."
    },
    {
      title: "Growth Mindset",
      description: "Cultivate a mindset that embraces challenges and sees failures as opportunities to learn."
    },
    {
      title: "Self-Directed Learning",
      description: "Encourage curiosity and the ability to learn independently throughout life."
    }
  ];
  
  const featuredSkills = [
    {
      title: "Digital Literacy",
      description: "Understanding technology fundamentals and adapting to new digital tools.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M22 5H20"/><path d="M7 15v2"/><path d="M17 15v2"/><path d="M2 10h20"/><path d="M2 7h20"/><path d="M12 19h0"/><path d="m5 21 14-4"/></svg>,
    },
    {
      title: "Financial Intelligence",
      description: "Learning how money works, basic economics, and personal finance skills.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
    },
    {
      title: "Communication",
      description: "Developing verbal, written and presentation skills for effective expression.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
    }
  ];

  return (
    <>
      <HeroSection
        title="Prepare Your Child for a Successful Future"
        subtitle="Learn how to nurture high-income skills and financial independence in your children from an early age."
        ctaText="Explore Skills"
        ctaLink="/skills"
        secondaryCtaText="Browse Resources"
        secondaryCtaLink="/resources"
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400"
      />

      {/* Why This Matters Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-3">Why This Matters</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Today's world is changing faster than ever. The skills that will help your child thrive 
            are different from what traditional education focuses on. Start early to build a foundation for lifelong success.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-left card-hover">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button asChild className="mt-10">
            <Link to="/about">Learn More About Our Approach</Link>
          </Button>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Essential Future Skills</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These fundamental skills form the foundation for future success and can be developed from an early age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-blue-50 p-2 rounded-md text-brand-blue">
                    {skill.icon}
                  </div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Guidance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Age-Appropriate Guidance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our resources are organized by age groups to ensure the right developmental approach at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                age: "Ages 3-7",
                title: "Early Foundations",
                features: ["Basic financial concepts", "Digital awareness", "Creative thinking games"]
              },
              {
                age: "Ages 8-12",
                title: "Skill Building",
                features: ["Intro to coding", "Money management", "Communication skills"]
              },
              {
                age: "Ages 13-18",
                title: "Advanced Development",
                features: ["Personal projects", "Investment basics", "Entrepreneurship"]
              }
            ].map((group, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="text-sm font-medium text-brand-blue mb-1">{group.age}</div>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {group.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-brand-blue" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/roadmap">View Detailed Roadmaps</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Child's Journey Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Every skill they learn today compounds into future opportunities. Begin with our curated resources.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-brand-orange hover:bg-orange-600">
            <Link to="/resources">Browse Resources</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
