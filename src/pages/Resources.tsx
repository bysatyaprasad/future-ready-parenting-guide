
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ResourceCard from '@/components/ResourceCard';
import ResourcesFilter from '@/components/ResourcesFilter';
import ArticleContent from '@/components/ArticleContent';
import { BookOpen } from 'lucide-react';
import { resourceTypes, ageGroups, skillCategories, articleResources } from '@/constants/resourcesData';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof articleResources[0] | null>(null);

  const filteredResources = articleResources.filter(resource => {
    const searchMatch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const typeMatch = selectedType === "All" || resource.type === selectedType;
    const ageMatch = selectedAge === "All Ages" || resource.ageGroup === selectedAge;
    const categoryMatch = selectedCategory === "All Skills" || resource.category === selectedCategory;
    
    return searchMatch && typeMatch && ageMatch && categoryMatch;
  });

  const handleArticleClick = (article: typeof articleResources[0]) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToResources = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <PageHeader 
        title="Expert Learning Resources" 
        description="Practical, easy-to-implement advice from subject matter experts. These concise articles help parents guide their children in developing essential future-ready skills."
      >
        {!selectedArticle && (
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
            resourceTypes={resourceTypes}
            ageGroups={ageGroups}
            skillCategories={skillCategories}
          />
        )}
      </PageHeader>
      
      <section className="section-padding">
        <div className="container-custom">
          {selectedArticle ? (
            <ArticleContent article={selectedArticle} onBack={handleBackToResources} />
          ) : (
            filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <div key={index} onClick={() => handleArticleClick(resource)} className="cursor-pointer">
                    <ResourceCard 
                      title={resource.title} 
                      description={resource.description} 
                      type={resource.type}
                      link={resource.link}
                      ageGroup={resource.ageGroup}
                      category={resource.category}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
