
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Layers } from 'lucide-react';
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
      default:
        return <FileText size={18} />;
    }
  };
  
  return (
    <Card className="card-hover h-full flex flex-col transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1">
          {getIcon()} {type}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {(ageGroup || category) && (
          <div className="flex flex-wrap gap-2 mt-2">
            {ageGroup && ageGroup !== "All Ages" && (
              <Badge variant="outline" className="bg-blue-50 text-brand-blue border-brand-blue">
                {ageGroup}
              </Badge>
            )}
            {category && category !== "All Skills" && (
              <Badge variant="outline" className="bg-orange-50 text-brand-orange border-brand-orange">
                {category}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
