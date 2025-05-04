
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Layers, CheckSquare, LayoutList, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  readTime?: string;
  link?: string;
  ageGroup?: string;
  category?: string;
}

const ResourceCard = ({ title, description, type, readTime, ageGroup, category }: ResourceCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'Article':
        return <FileText size={18} />;
      case 'Guide':
        return <Layers size={18} />;
      case 'Case Study':
        return <BookOpen size={18} />;
      case 'Checklist':
        return <CheckSquare size={18} />;
      case 'Framework':
        return <LayoutList size={18} />;
      default:
        return <FileText size={18} />;
    }
  };
  
  return (
    <Card className="card-hover h-full flex flex-col transition-shadow hover:shadow-md border-l-4 border-l-brand-blue overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg line-clamp-2 text-gray-800">{title}</CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs text-gray-600">
          {getIcon()} {type}
          {readTime && (
            <>
              <span className="mx-1">•</span>
              <Clock size={14} className="ml-1" />
              <span>{readTime}</span>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {ageGroup && ageGroup !== "All Ages" && (
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-700 text-xs">
              {ageGroup}
            </Badge>
          )}
          {category && category !== "All Skills" && (
            <Badge variant="outline" className="bg-orange-50 text-brand-orange border-brand-orange text-xs">
              {category}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
