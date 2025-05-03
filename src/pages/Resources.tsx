import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ResourceCard from '@/components/ResourceCard';
import { Check, Filter, Search } from 'lucide-react';

const resourceTypes = [
  "All",
  "Article",
  "Video",
  "Course",
  "Book",
  "Tool"
];

const initialResources = [
  {
    title: "The Importance of Financial Literacy for Kids",
    description: "An article discussing why it's crucial to teach children about money management early on.",
    type: "Article",
    link: "https://www.example.com/financial-literacy-kids"
  },
  {
    title: "Coding for Beginners: A Step-by-Step Guide",
    description: "A comprehensive video tutorial that introduces kids to the basics of coding.",
    type: "Video",
    link: "https://www.example.com/coding-for-beginners"
  },
  {
    title: "Creative Thinking: Unlocking Your Child's Potential",
    description: "A course designed to enhance creative thinking skills in children through interactive exercises.",
    type: "Course",
    link: "https://www.example.com/creative-thinking-course"
  },
  {
    title: "The Entrepreneurial Kid: How to Start a Business",
    description: "A book that guides young entrepreneurs through the process of starting their own business.",
    type: "Book",
    link: "https://www.example.com/entrepreneurial-kid-book"
  },
  {
    title: "Digital Safety Tool for Kids",
    description: "A tool that helps parents monitor and protect their children's online activities.",
    type: "Tool",
    link: "https://www.example.com/digital-safety-tool"
  },
  {
    title: "Investing for Teens: A Practical Guide",
    description: "An article providing teens with practical advice on how to start investing.",
    type: "Article",
    link: "https://www.example.com/investing-for-teens"
  },
  {
    title: "Public Speaking for Kids: Overcoming Stage Fright",
    description: "A video tutorial that teaches children how to overcome stage fright and improve their public speaking skills.",
    type: "Video",
    link: "https://www.example.com/public-speaking-kids"
  },
  {
    title: "The Ultimate Guide to Personal Finance for Students",
    description: "A course that covers all aspects of personal finance, from budgeting to saving and investing.",
    type: "Course",
    link: "https://www.example.com/personal-finance-course"
  },
  {
    title: "Money Matters: A Kid's Guide to Financial Responsibility",
    description: "A book that teaches children the importance of financial responsibility and how to make smart money choices.",
    type: "Book",
    link: "https://www.example.com/money-matters-book"
  },
  {
    title: "Online Learning Platform for Kids",
    description: "A platform that offers a variety of courses and resources for kids to learn new skills online.",
    type: "Tool",
    link: "https://www.example.com/online-learning-platform"
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = initialResources.filter(resource => {
    const searchMatch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const typeMatch = selectedType === "All" || resource.type === selectedType;
    return searchMatch && typeMatch;
  });

  return (
    <>
      <PageHeader 
        title="Learning Resources" 
        description="Curated educational materials to help your child develop future-ready skills."
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-auto">
            <Input
              type="search"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="md:w-80"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {showFilters && (
          <div className="mt-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {resourceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </PageHeader>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
