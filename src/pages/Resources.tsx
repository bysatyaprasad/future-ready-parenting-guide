
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ResourceCard from '@/components/ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
  const books = [
    {
      title: "Smart Money Smart Kids",
      description: "Dave Ramsey and Rachel Cruze share practical steps for teaching kids about money management.",
      type: "Book",
      link: "#"
    },
    {
      title: "How to Raise Successful People",
      description: "Esther Wojcicki shares insights on raising self-sufficient children through trust and responsibility.",
      type: "Book",
      link: "#"
    },
    {
      title: "Raising Digital Natives",
      description: "A guide for parents to navigate the digital world with their children.",
      type: "Book",
      link: "#"
    },
    {
      title: "Mindset: The New Psychology of Success",
      description: "Carol Dweck explores how adopting a growth mindset can foster achievement and success.",
      type: "Book",
      link: "#"
    },
  ];

  const courses = [
    {
      title: "Financial Literacy for Kids",
      description: "Interactive course teaching basic money concepts through games and activities.",
      type: "Online Course",
      link: "#"
    },
    {
      title: "Coding for Young Minds",
      description: "Introduction to programming concepts through visual block-based coding.",
      type: "Online Course",
      link: "#"
    },
    {
      title: "Public Speaking for Children",
      description: "Builds confidence and communication skills through fun speaking exercises.",
      type: "Online Course",
      link: "#"
    },
    {
      title: "Entrepreneurship 101 for Teens",
      description: "Guide to starting simple businesses and developing entrepreneurial thinking.",
      type: "Online Course",
      link: "#"
    },
  ];

  const tools = [
    {
      title: "Khan Academy Kids",
      description: "Free educational app for children ages 2-7 covering reading, math, and creativity.",
      type: "Learning Platform",
      link: "#"
    },
    {
      title: "Scratch Jr",
      description: "Coding app designed for young children (ages 5-7) to create interactive stories and games.",
      type: "App",
      link: "#"
    },
    {
      title: "Financial Playground",
      description: "Interactive tool for teaching money management through simulated real-world scenarios.",
      type: "Interactive Game",
      link: "#"
    },
    {
      title: "Creative Writing Prompts",
      description: "Collection of age-appropriate writing prompts to develop communication skills.",
      type: "Resource Collection",
      link: "#"
    },
  ];

  const communities = [
    {
      title: "Young Entrepreneurs Club",
      description: "Online community for kids interested in business and innovation.",
      type: "Online Community",
      link: "#"
    },
    {
      title: "Code Clubs India",
      description: "Network of coding clubs where children can learn programming in a social environment.",
      type: "Local Clubs",
      link: "#"
    },
    {
      title: "Financial Literacy Forum",
      description: "Discussion group for parents to share ideas about teaching children about money.",
      type: "Online Forum",
      link: "#"
    },
    {
      title: "Future Skills Mentorship",
      description: "Connects children with mentors in various professional fields.",
      type: "Mentorship Program",
      link: "#"
    },
  ];

  return (
    <>
      <PageHeader
        title="Learning Resources"
        description="Curated books, courses, tools, and communities to help your child develop future-ready skills."
        id="resources"
      />

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="books" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="books" id="books">Books</TabsTrigger>
              <TabsTrigger value="courses" id="courses">Courses</TabsTrigger>
              <TabsTrigger value="tools" id="tools">Learning Tools</TabsTrigger>
              <TabsTrigger value="communities" id="communities">Communities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="books" className="space-y-6">
              <h2 className="text-2xl font-semibold">Recommended Books</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    link={resource.link}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="space-y-6">
              <h2 className="text-2xl font-semibold">Online Courses</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    link={resource.link}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-6">
              <h2 className="text-2xl font-semibold">Learning Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    link={resource.link}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="communities" className="space-y-6">
              <h2 className="text-2xl font-semibold">Communities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {communities.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    link={resource.link}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Resources;
