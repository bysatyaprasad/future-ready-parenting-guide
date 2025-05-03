
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  link?: string;
}

const ResourceCard = ({ title, description, type, link }: ResourceCardProps) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-brand-blue">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
