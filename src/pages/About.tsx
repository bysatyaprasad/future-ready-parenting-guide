
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <PageHeader
        title="About Future Ready Kids"
        description="Our mission is to help parents prepare their children for future success with high-income skills and financial independence."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-4">
                We believe that preparing children for the future isn't just about teaching them to code or manage money. 
                It's about developing a complete set of adaptable skills that will serve them throughout life.
              </p>
              <p className="text-gray-700 mb-4">
                Our content focuses on age-appropriate skill development across multiple domains. We combine the best 
                research with practical applications that parents can implement at home.
              </p>
              <p className="text-gray-700">
                We use simple language and practical examples to make complex topics accessible to all parents, 
                regardless of their background or experience.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">1.</span>
                  <span><strong>Age-appropriate learning:</strong> Skills taught at the right developmental stage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">2.</span>
                  <span><strong>Practical application:</strong> Real-world skills with immediate usefulness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">3.</span>
                  <span><strong>Growth mindset:</strong> Fostering resilience and adaptability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">4.</span>
                  <span><strong>Financial intelligence:</strong> Building understanding of money and value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2 font-bold">5.</span>
                  <span><strong>Digital fluency:</strong> Comfort with technology as a tool, not just entertainment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why These Skills Matter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "The Changing Economy",
                  content: "Traditional career paths are disappearing. Today's children will likely have multiple careers and need to continuously adapt to new technologies and market demands."
                },
                {
                  title: "Financial Freedom",
                  content: "Many adults struggle with financial literacy. By teaching these skills early, we help children build wealth and achieve independence rather than living paycheck to paycheck."
                },
                {
                  title: "Future Opportunities",
                  content: "High-income skills open doors. Children who develop these abilities early have more options and can pursue paths aligned with their interests and values."
                }
              ].map((item, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Start Your Journey</h2>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              Ready to help your child develop skills for the future? Explore our resources to begin.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/skills" className="btn-primary block text-center">
                Explore Skills
              </Link>
              <Link to="/roadmap" className="btn-secondary block text-center">
                View Roadmaps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
