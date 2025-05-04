
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

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
      
      <div className="prose prose-lg max-w-none">
        <div className="mb-6">
          <p className="text-gray-600">By {article.author}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    </div>
  );
};

export default ArticleContent;
