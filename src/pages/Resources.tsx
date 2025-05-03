
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ResourceCard from '@/components/ResourceCard';
import { Check, Filter, Search, BookOpen } from 'lucide-react';

const resourceTypes = [
  "All",
  "Article",
  "Video",
  "Course",
  "Book",
  "Tool"
];

const ageGroups = [
  "All Ages",
  "Ages 3-7",
  "Ages 8-12",
  "Ages 13-18"
];

const skillCategories = [
  "All Skills",
  "Digital Literacy",
  "Financial Intelligence",
  "Communication",
  "Critical Thinking",
  "Entrepreneurship"
];

const initialResources = [
  {
    title: "Money Habits That Create Financial Security",
    description: "Learn the critical money habits to teach your children from age 4 that most schools never cover but set the foundation for wealth.",
    type: "Article",
    link: "https://www.example.com/financial-literacy-kids",
    ageGroup: "Ages 3-7",
    category: "Financial Intelligence"
  },
  {
    title: "How to Teach Coding to Kids (Even If You Can't Code)",
    description: "A step-by-step video for parents who want to introduce programming concepts without being technical experts themselves.",
    type: "Video",
    link: "https://www.example.com/coding-for-beginners",
    ageGroup: "Ages 8-12",
    category: "Digital Literacy"
  },
  {
    title: "Creative Problem-Solving Masterclass for Children",
    description: "A structured course that develops innovative thinking patterns through engaging exercises that make learning fun.",
    type: "Course",
    link: "https://www.example.com/creative-thinking-course",
    ageGroup: "Ages 8-12",
    category: "Critical Thinking"
  },
  {
    title: "The Young Entrepreneur's Playbook",
    description: "The definitive guide for parents who want to nurture business acumen in their children from an early age.",
    type: "Book",
    link: "https://www.example.com/entrepreneurial-kid-book",
    ageGroup: "Ages 13-18",
    category: "Entrepreneurship"
  },
  {
    title: "Digital Safety Guardian",
    description: "An essential tool that balances online learning opportunities with appropriate safety measures as children explore digital skills.",
    type: "Tool",
    link: "https://www.example.com/digital-safety-tool",
    ageGroup: "All Ages",
    category: "Digital Literacy"
  },
  {
    title: "Investment Foundations for Teens",
    description: "Clear, actionable investment education specifically designed for teenage understanding and implementation.",
    type: "Article",
    link: "https://www.example.com/investing-for-teens",
    ageGroup: "Ages 13-18",
    category: "Financial Intelligence"
  },
  {
    title: "Public Speaking for Future Leaders",
    description: "Build confidence and persuasive communication skills through age-appropriate speaking exercises and techniques.",
    type: "Video",
    link: "https://www.example.com/public-speaking-kids",
    ageGroup: "Ages 8-12",
    category: "Communication"
  },
  {
    title: "Complete Money Management System for Students",
    description: "A comprehensive financial curriculum covering everything from basic budgeting to investment principles for young adults.",
    type: "Course",
    link: "https://www.example.com/personal-finance-course",
    ageGroup: "Ages 13-18",
    category: "Financial Intelligence"
  },
  {
    title: "Financial Responsibility: A Practical Guide for Kids",
    description: "An illustrated guide that makes financial concepts accessible and engaging for younger children.",
    type: "Book",
    link: "https://www.example.com/money-matters-book",
    ageGroup: "Ages 3-7",
    category: "Financial Intelligence"
  },
  {
    title: "Skill Portfolio Builder",
    description: "A digital platform that helps children document and showcase their growing skills in a professional way.",
    type: "Tool",
    link: "https://www.example.com/online-learning-platform",
    ageGroup: "Ages 13-18",
    category: "All Skills"
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = initialResources.filter(resource => {
    const searchMatch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const typeMatch = selectedType === "All" || resource.type === selectedType;
    const ageMatch = selectedAge === "All Ages" || resource.ageGroup === selectedAge;
    const categoryMatch = selectedCategory === "All Skills" || resource.category === selectedCategory;
    
    return searchMatch && typeMatch && ageMatch && categoryMatch;
  });

  return (
    <>
      <PageHeader 
        title="Curated Learning Resources" 
        description="Expert-selected educational materials to help your child develop future-ready skills at every age. All resources are vetted for quality and effectiveness."
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
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Resource Type" />
              </SelectTrigger>
              <SelectContent>
                {resourceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedAge} onValueChange={setSelectedAge}>
              <SelectTrigger>
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                {ageGroups.map((age) => (
                  <SelectItem key={age} value={age}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Skill Category" />
              </SelectTrigger>
              <SelectContent>
                {skillCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </PageHeader>
      
      <section className="section-padding">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title} 
                  description={resource.description} 
                  type={resource.type}
                  link={resource.link}
                  ageGroup={resource.ageGroup}
                  category={resource.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
