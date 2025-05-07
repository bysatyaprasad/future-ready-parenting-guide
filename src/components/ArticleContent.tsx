
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Clock, BookOpen, ChevronRight, Bookmark, Share, Printer, Download, Home } from 'lucide-react';
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
              <p className="my-4 text-gray-600">
                This resource provides practical guidance for parents to help children develop essential skills for future success.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Why This Matters</h2>
              <p className="text-gray-700 mb-4">
                In today's rapidly changing world, children need more than just academic knowledge to succeed. This resource 
                offers step-by-step guidance on nurturing abilities that will serve them throughout life.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Start early with age-appropriate activities</li>
                <li className="mb-2">Create opportunities for practice in everyday situations</li>
                <li className="mb-2">Use conversations and questions to deepen understanding</li>
                <li className="mb-2">Be patient and celebrate small improvements</li>
                <li className="mb-2">Connect learning to real-world applications</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Practical Steps</h2>
              <p className="text-gray-700 mb-4">
                Follow our age-based roadmap to introduce these skills gradually and effectively:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li className="mb-3">Identify which skills to focus on based on your child's age and interests</li>
                <li className="mb-3">Create a regular practice schedule with simple, engaging activities</li>
                <li className="mb-3">Connect with your child's teachers to reinforce these skills at school</li>
                <li className="mb-3">Use our recommended resources for additional support</li>
                <li className="mb-3">Revisit and adjust approaches as your child develops</li>
              </ol>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-2">Expert Tip</h3>
                <p className="text-gray-700">
                  "The best way to help children develop these skills is to model them yourself. 
                  When children see parents applying these abilities in everyday life, they naturally begin to adopt them."
                  <br /> - Dr. Anita Sharma, Educational Psychologist
                </p>
              </div>
              
              <p className="text-gray-700 mt-6">
                For a complete implementation guide, download our PDF resource or explore the age-specific roadmaps.
              </p>
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
          <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
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
