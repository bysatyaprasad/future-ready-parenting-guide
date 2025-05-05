
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Layers, CheckSquare, LayoutList, Clock, GraduationCap, BookText, Code, LightbulbIcon, Zap, User, Brain, Globe, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  readTime?: string;
  link?: string;
  ageGroup?: string;
  category?: string;
  id?: number;
}

const ResourceCard = ({ title, description, type, readTime, ageGroup, category, id, link }: ResourceCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'Article':
        return <FileText size={18} />;
      case 'Guide':
        return <BookText size={18} />;
      case 'Case Study':
        return <BookOpen size={18} />;
      case 'Checklist':
        return <CheckSquare size={18} />;
      case 'Framework':
        return <LayoutList size={18} />;
      case 'Skill Guide':
        return <GraduationCap size={18} />;
      case 'Technical Guide':
        return <Code size={18} />;
      case 'Research Summary':
        return <Brain size={18} />;
      case 'Quick Tips':
        return <Zap size={18} />;
      case 'Interview':
        return <User size={18} />;
      case 'Global Perspective':
        return <Globe size={18} />;
      case 'Conversation Guide':
        return <MessageSquare size={18} />;
      default:
        return <LightbulbIcon size={18} />;
    }
  };
  
  const cardContent = (
    <>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg line-clamp-2 text-gray-800">{title}</CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs text-gray-600">
          <span className="bg-blue-50 p-1 rounded-md flex items-center">
            {getIcon()}
            <span className="ml-1">{type}</span>
          </span>
          {readTime && (
            <span className="flex items-center bg-gray-50 p-1 rounded-md ml-2">
              <Clock size={14} className="mr-1" />
              <span>{readTime}</span>
            </span>
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
    </>
  );
  
  if (link) {
    return (
      <Link to={link} className="block h-full">
        <Card className="card-hover h-full flex flex-col transition-all duration-300 hover:shadow-lg border-l-4 border-l-brand-blue overflow-hidden transform hover:translate-y-[-3px]">
          {cardContent}
        </Card>
      </Link>
    );
  }
  
  return (
    <Card className="card-hover h-full flex flex-col transition-all duration-300 hover:shadow-lg border-l-4 border-l-brand-blue overflow-hidden transform hover:translate-y-[-3px]">
      {cardContent}
    </Card>
  );
};

export default ResourceCard;
