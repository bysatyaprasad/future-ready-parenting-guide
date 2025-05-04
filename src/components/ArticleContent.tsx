
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Clock, User } from 'lucide-react';

interface ArticleContentProps {
  article: {
    title: string;
    author: string;
    content: string;
  } | null;
  onBack: () => void;
}

const ArticleContent = ({ article, onBack }: ArticleContentProps) => {
  if (!article) return null;

  return (
    <div className="max-w-3xl mx-auto my-8">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to all resources
      </Button>
      
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      
      <div className="flex items-center gap-2 text-gray-600 mb-8">
        <User className="h-4 w-4" />
        <span>{article.author}</span>
        <span className="mx-2">•</span>
        <Clock className="h-4 w-4" />
        <span>5 min read</span>
      </div>
      
      {article.content ? (
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
      ) : (
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 italic">Full article coming soon. We're working with experts to create the most valuable, actionable content for parents.</p>
          <p>This article will provide practical, research-backed advice that you can implement immediately to help your child develop the skills needed for future success and financial independence.</p>
        </div>
      )}
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Want to apply this information?</h3>
        <p className="text-gray-600">Our step-by-step roadmaps provide structured guidance on implementing these concepts with your child.</p>
        <Button variant="outline" className="mt-4">
          View Roadmaps
        </Button>
      </div>
    </div>
  );
};

export default ArticleContent;
