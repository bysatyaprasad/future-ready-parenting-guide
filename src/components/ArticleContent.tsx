
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleContentProps {
  article: {
    title: string;
    content: string;
    readTime: string;
    category?: string;
    ageGroup?: string;
    type: string;
  } | null;
  onBack: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const ArticleContent = ({ 
  article, 
  onBack, 
  onNext, 
  onPrevious,
  hasNext = false,
  hasPrevious = false
}: ArticleContentProps) => {
  if (!article) return null;

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="flex justify-between items-center mb-8">
        <Button variant="ghost" onClick={onBack} className="text-brand-blue">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Button>
        
        <div className="flex gap-2">
          {hasPrevious && (
            <Button 
              variant="outline" 
              onClick={onPrevious}
              className="text-brand-blue border-brand-blue hover:bg-blue-50"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          )}
          
          {hasNext && (
            <Button 
              variant="outline" 
              onClick={onNext}
              className="text-brand-blue border-brand-blue hover:bg-blue-50"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.type && (
              <Badge variant="outline" className="bg-blue-50 text-brand-blue border-brand-blue">
                {article.type}
              </Badge>
            )}
            {article.category && article.category !== "All Skills" && (
              <Badge variant="outline" className="bg-orange-50 text-brand-orange border-brand-orange">
                {article.category}
              </Badge>
            )}
            {article.ageGroup && article.ageGroup !== "All Ages" && (
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-700">
                {article.ageGroup}
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
          
          <div className="flex items-center gap-2 text-gray-600 mb-8 border-b pb-4">
            <BookOpen className="h-4 w-4" />
            <span>FutureReady Experts</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4" />
            <span>{article.readTime} read</span>
          </div>
          
          {article.content ? (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 italic">Full article coming soon. Our experts are creating the most valuable, actionable content for parents.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Apply This Knowledge Today</h3>
        <p className="text-gray-700 mb-6">Use our structured roadmap to implement these concepts with your child based on their age and development stage.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="default" className="bg-brand-blue hover:bg-blue-700">
            <Link to="/high-income-roadmap">View Age-Based Roadmap</Link>
          </Button>
          <Button variant="outline" onClick={onBack} className="border-brand-blue text-brand-blue hover:bg-blue-50">
            Explore More Resources
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Want personalized guidance? <Link to="/about" className="text-brand-blue hover:underline">Contact our experts</Link>
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
