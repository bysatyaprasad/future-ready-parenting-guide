
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourcesFilter from '../components/ResourcesFilter';
import ResourceCard from '../components/ResourceCard';
import ArticleContent from '../components/ArticleContent';
import { resources } from '../constants/resourcesData';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAge, setSelectedAge] = useState('All Ages');
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  const navigate = useNavigate();
  const location = useLocation();

  // Get article ID from URL hash if present
  useEffect(() => {
    const articleId = location.hash;
    if (articleId) {
      const article = resources.find(r => r.link === articleId);
      if (article) {
        setSelectedArticle(article);
        setActiveTab('article');
      }
    }
  }, [location]);

  // Filter resources based on filters and search
  const filteredResources = resources.filter(resource => {
    // Filter by search query
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by type
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    
    // Filter by age group
    const matchesAge = selectedAge === 'All Ages' || resource.ageGroup === selectedAge;
    
    // Filter by category
    const matchesCategory = selectedCategory === 'All Skills' || resource.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesAge && matchesCategory;
  });

  // Handle resource click
  const handleResourceClick = (resource: any) => {
    setSelectedArticle(resource);
    setActiveTab('article');
    navigate(`/resources${resource.link}`);
  };

  // Handle back button click
  const handleBackToResources = () => {
    setSelectedArticle(null);
    setActiveTab('all');
    navigate('/resources');
  };

  // Get next and previous articles
  const getAdjacentArticles = () => {
    if (!selectedArticle) return { next: null, previous: null };
    
    const currentIndex = resources.findIndex(r => r.title === selectedArticle.title);
    
    const previous = currentIndex > 0 ? resources[currentIndex - 1] : null;
    const next = currentIndex < resources.length - 1 ? resources[currentIndex + 1] : null;
    
    return { next, previous };
  };

  const { next, previous } = getAdjacentArticles();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="hidden">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="article">Article</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Parent Resources</h1>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Simple guides and tools to help your child build future-ready skills.
                Each resource is designed to be easy to understand and put into practice.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50">
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
            
            <ResourcesFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedAge={selectedAge}
              setSelectedAge={setSelectedAge}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              resourceTypes={['All', 'Article', 'Guide', 'Case Study', 'Checklist', 'Framework']}
              ageGroups={['All Ages', 'Ages 3-7', 'Ages 8-12', 'Ages 13-18']}
              skillCategories={['All Skills', 'Digital Literacy', 'Financial Intelligence', 'Communication']}
            />
            
            {filteredResources.length === 0 ? (
              <div className="text-center mt-12 py-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No resources match your filters</h3>
                <p className="text-gray-600 mb-4">Try changing your search or filters to find what you need.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {filteredResources.map((resource, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleResourceClick(resource)}
                    className="cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <ResourceCard
                      title={resource.title}
                      description={resource.description}
                      type={resource.type}
                      readTime={resource.readTime}
                      ageGroup={resource.ageGroup}
                      category={resource.category}
                    />
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex justify-center mt-12">
              <Button asChild variant="default" className="bg-brand-blue hover:bg-blue-700">
                <Link to="/skills">
                  Explore Skill Guides
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="article" className="animate-fade-in">
          {selectedArticle && (
            <ArticleContent
              article={selectedArticle}
              onBack={handleBackToResources}
              onNext={next ? () => handleResourceClick(next) : undefined}
              onPrevious={previous ? () => handleResourceClick(previous) : undefined}
              hasNext={!!next}
              hasPrevious={!!previous}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
