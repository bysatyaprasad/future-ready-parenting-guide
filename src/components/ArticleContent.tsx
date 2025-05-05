
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Clock, BookOpen, ChevronRight, Bookmark, Share, Printer, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface ArticleContentProps {
  article: {
    title: string;
    content?: string; // Content is optional
    readTime: string;
    category?: string;
    ageGroup?: string;
    type: string;
    id?: number;
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
  const { toast } = useToast();
  
  if (!article) return null;

  const handleSave = () => {
    toast({
      title: "Resource saved",
      description: "This resource has been saved to your collection.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Resource link copied to clipboard",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your PDF is being generated and will download shortly.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" onClick={onBack} className="text-brand-blue hover:bg-blue-50">
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
              <ChevronLeft className="mr-1 h-4 w-4" />
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
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-6 md:p-10">
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
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{article.title}</h1>
          
          <div className="flex items-center justify-between text-gray-600 mb-6 border-b pb-4">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="h-4 w-4" />
              <span>FutureReady Experts</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4" />
              <span>{article.readTime} read</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-brand-blue" onClick={handleSave}>
                <Bookmark className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline text-sm">Save</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-brand-blue" onClick={handleShare}>
                <Share className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline text-sm">Share</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-brand-blue" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline text-sm">Print</span>
              </Button>
            </div>
          </div>
          
          {article.content ? (
            <div className="prose prose-lg max-w-none article-content">
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 italic">Full article coming soon. Our experts are creating the most valuable, actionable content for parents.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Apply This Knowledge Today</h3>
        <p className="text-gray-700 mb-5">Use our age-based roadmap to help your child learn these skills step by step.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="default" className="bg-brand-blue hover:bg-blue-700">
            <Link to="/high-income-roadmap">View Age-Based Roadmap</Link>
          </Button>
          <Button variant="outline" onClick={onBack} className="border-brand-blue text-brand-blue hover:bg-blue-50">
            Explore More Resources
          </Button>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-3">
          Save this guide as a PDF to read offline
        </p>
        <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50" onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF Guide
        </Button>
      </div>
    </div>
  );
};

export default ArticleContent;
