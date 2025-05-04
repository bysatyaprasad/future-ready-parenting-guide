
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Layers, CheckSquare, LayoutList } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  link?: string;
  ageGroup?: string;
  category?: string;
}

const ResourceCard = ({ title, description, type, ageGroup, category }: ResourceCardProps) => {
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
    <Card className="card-hover h-full flex flex-col transition-shadow hover:shadow-md border-l-4 border-l-brand-blue">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs">
          {getIcon()} {type}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {ageGroup && ageGroup !== "All Ages" && (
            <Badge variant="outline" className="bg-blue-50 text-brand-blue border-brand-blue text-xs">
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
