
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Roadmap = () => {
  const earlyYearsContent = [
    {
      age: "Ages 3-4",
      skills: [
        {
          title: "Foundation Skills",
          items: [
            "Basic counting and number recognition",
            "Saving coins in a clear jar",
            "Simple decision making (choose between two options)",
            "Digital awareness through supervised screen time"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Play store using toy money",
            "Sorting games (colors, shapes)",
            "Basic pattern recognition games",
            "Supervised use of educational apps"
          ]
        }
      ]
    },
    {
      age: "Ages 5-7",
      skills: [
        {
          title: "Foundation Skills",
          items: [
            "Understanding that things cost money",
            "Saving for small goals",
            "Basic computer/tablet navigation",
            "Following simple multi-step instructions",
            "Listening and speaking in turn"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Setting up a savings jar for a small toy",
            "Basic coding apps for beginners",
            "Show and tell presentations",
            "Problem-solving games and puzzles"
          ]
        }
      ]
    }
  ];

  const middleYearsContent = [
    {
      age: "Ages 8-10",
      skills: [
        {
          title: "Developing Skills",
          items: [
            "Understanding income, expenses, and profit",
            "Block-based coding",
            "Research skills using kid-friendly resources",
            "Team project collaboration",
            "Setting personal goals"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Running a simple lemonade stand",
            "Creating projects with Scratch",
            "Regular savings from allowance",
            "Introduction to keyboarding",
            "Group problem-solving challenges"
          ]
        }
      ]
    },
    {
      age: "Ages 11-12",
      skills: [
        {
          title: "Developing Skills",
          items: [
            "Understanding interest and compound growth",
            "Introduction to different income streams",
            "Basic HTML/CSS",
            "Critical assessment of information sources",
            "Public speaking and presentation"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Simple budgeting for personal expenses",
            "Creating a basic webpage",
            "Researching and presenting on careers",
            "Starting a blog on a topic of interest",
            "Participating in debate or speech activities"
          ]
        }
      ]
    }
  ];

  const teenYearsContent = [
    {
      age: "Ages 13-15",
      skills: [
        {
          title: "Advanced Skills",
          items: [
            "Understanding investing basics",
            "More advanced programming concepts",
            "Project planning and execution",
            "Digital content creation",
            "Social media literacy"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Stock market simulation games",
            "Creating an app or game prototype",
            "Starting a YouTube channel/podcast",
            "Volunteer work in areas of interest",
            "Learning resource time management"
          ]
        }
      ]
    },
    {
      age: "Ages 16-18",
      skills: [
        {
          title: "Advanced Skills",
          items: [
            "Understanding different investment vehicles",
            "Creating value through skills/services",
            "Specialized technical skills in an area of interest",
            "Networking and personal branding",
            "Resume building and interview skills"
          ]
        },
        {
          title: "Activities to Try",
          items: [
            "Starting a small business or freelance service",
            "Creating a portfolio of projects",
            "Informational interviews with professionals",
            "Managing real investment accounts (with supervision)",
            "Participating in hackathons or business competitions"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader
        title="Development Roadmaps"
        description="Age-appropriate skill development plans to guide your child's journey toward future readiness."
      />

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="early" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="early">Early Years (3-7)</TabsTrigger>
              <TabsTrigger value="middle">Middle Years (8-12)</TabsTrigger>
              <TabsTrigger value="teen">Teen Years (13-18)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="early">
              <div className="space-y-10">
                {earlyYearsContent.map((content, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-brand-blue">{content.age}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {content.skills.map((skill, idx) => (
                        <Card key={idx} className="h-full">
                          <CardHeader>
                            <CardTitle>{skill.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {skill.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-brand-blue mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="middle">
              <div className="space-y-10">
                {middleYearsContent.map((content, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-brand-blue">{content.age}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {content.skills.map((skill, idx) => (
                        <Card key={idx} className="h-full">
                          <CardHeader>
                            <CardTitle>{skill.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {skill.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-brand-blue mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="teen">
              <div className="space-y-10">
                {teenYearsContent.map((content, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-brand-blue">{content.age}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {content.skills.map((skill, idx) => (
                        <Card key={idx} className="h-full">
                          <CardHeader>
                            <CardTitle>{skill.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {skill.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-brand-blue mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
