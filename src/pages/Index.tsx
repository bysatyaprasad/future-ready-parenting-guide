
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Check, ChevronDown, Clock, Star, ArrowRight, DollarSign, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const benefits = [
    {
      title: "Early Financial Understanding",
      description: "Help your child grasp money concepts when their brain is most receptive, creating lifelong money intelligence."
    },
    {
      title: "Future-Proof Skills",
      description: "Develop abilities that remain valuable regardless of technological changes or market shifts."
    },
    {
      title: "Growth Mindset",
      description: "Build mental resilience that transforms challenges into opportunities and failures into learning experiences."
    },
    {
      title: "Self-Directed Learning",
      description: "Foster the ability to learn independently—perhaps the most critical skill for lifelong success in any field."
    }
  ];
  
  const featuredSkills = [
    {
      title: "Digital Literacy",
      description: "In today's world, digital fluency is as fundamental as reading. Your child needs to understand technology beyond just using it.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M22 5H20"/><path d="M7 15v2"/><path d="M17 15v2"/><path d="M2 10h20"/><path d="M2 7h20"/><path d="M12 19h0"/><path d="m5 21 14-4"/></svg>,
      link: "/skills/digital-literacy"
    },
    {
      title: "Financial Intelligence",
      description: "Most schools don't teach money skills. Give your child the understanding of how wealth actually works in the real world.",
      icon: <DollarSign className="h-6 w-6" />,
      link: "/skills/financial-intelligence"
    },
    {
      title: "Communication",
      description: "In any field, the ability to clearly express ideas and persuade others remains one of the highest-paid skills globally.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
      link: "/skills/communication"
    }
  ];

  return (
    <>
      <HeroSection
        title="Build Your Child's 8-Figure Income Skills Portfolio"
        subtitle="Most parents focus on outdated education paths. Start now with our proven system to nurture high-income skills that lead to true financial independence—before the opportunity window closes forever."
        ctaText="Explore Skills Guide"
        ctaLink="/skills"
        secondaryCtaText="Follow Our Step-by-Step Roadmap"
        secondaryCtaLink="/high-income-roadmap"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"
      />

      {/* Why This Matters Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-3">The Harsh Reality Most Parents Miss</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Traditional education is preparing children for a world that no longer exists. The skills that will create financial 
            security are drastically different from what schools teach. Start early with intentional skill development or risk watching 
            your child struggle in tomorrow's economy.
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
            <Link to="/about">Our Research-Based Approach</Link>
          </Button>
        </div>
      </section>

      {/* Step-by-Step Roadmap Highlight Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete Step-by-Step Roadmap to Financial Independence</h2>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Not just theory—this is your exact blueprint to guide your child from age 3 to adulthood, building the skills that create real wealth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Precise Age-Based Guidance</h3>
              <p className="mb-4">Detailed activities and focus areas broken down by exact age ranges—so you know exactly what to prioritize when.</p>
              <div className="flex items-center text-brand-orange font-semibold">
                <span>Ages 3-18 and beyond</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Implementation Strategies</h3>
              <p className="mb-4">Not just what to teach but exactly HOW to develop these skills with specific activities and resources tailored to each phase.</p>
              <div className="flex items-center text-brand-orange font-semibold">
                <span>Practical step-by-step actions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Parent Mindset Guidance</h3>
              <p className="mb-4">Critical insights on how to help without hindering—the exact parenting approach needed for each developmental stage.</p>
              <div className="flex items-center text-brand-orange font-semibold">
                <span>Psychology-based approach</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="secondary" className="bg-brand-orange hover:bg-orange-600">
              <Link to="/high-income-roadmap">Get The Complete Step-by-Step Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">High-Income Foundation Skills</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These core abilities create the foundation for future success and can be developed from early childhood through simple, age-appropriate activities.
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
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={skill.link} className="flex justify-between items-center">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/skills">View All High-Value Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Guidance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Age-Appropriate Development Guide</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every age offers unique opportunities for skill development. Our research-based roadmaps ensure you're focusing on the right skills at the right time.
            </p>
            <div className="mt-4 bg-brand-blue/10 p-4 rounded-lg inline-block">
              <p className="text-brand-blue font-medium">
                <strong>Quick Guide vs. Complete Roadmap:</strong> Browse our quick reference guides below or follow our comprehensive step-by-step roadmap for deeper implementation strategies.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                age: "Ages 3-7",
                title: "Early Foundations",
                features: ["Money awareness through play", "Digital literacy fundamentals", "Creativity development"]
              },
              {
                age: "Ages 8-12",
                title: "Core Skill Building",
                features: ["Basic coding and tech skills", "Financial concepts and saving", "Public speaking foundations"]
              },
              {
                age: "Ages 13-18",
                title: "Advanced Development",
                features: ["Investment principles", "Portfolio creation", "Entrepreneurial ventures"]
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

          <div className="text-center mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/roadmap">View Quick Reference Guides</Link>
            </Button>
            <Button asChild className="bg-brand-blue">
              <Link to="/high-income-roadmap">Follow Complete Step-by-Step System</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Makes This Approach Different</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">We Focus on Skills, Not Degrees</h3>
                <p>The world economy rewards specific skills, not general credentials. In an AI-dominated future, only high-value skills will command premium incomes.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Early Compounding Advantage</h3>
                <p>Skills developed in childhood compound exponentially. A 5-year head start can mean the difference between struggling and thriving in adulthood.</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Financial Independence Focus</h3>
                <p>We teach both skill development AND strategic income creation—preparing children to build income streams, not just chase jobs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Child's Success Journey Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait until they're teenagers. The foundation for future financial success begins in early childhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-brand-orange hover:bg-orange-600">
              <Link to="/high-income-roadmap">Follow Our Step-by-Step Guide</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
