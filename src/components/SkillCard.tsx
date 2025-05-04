
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  DollarSign, 
  MessageSquare, 
  Brain, 
  Lightbulb, 
  Briefcase,
  Code, 
  Users,
  Clock,
  Globe,
  FileText,
  BookOpen
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ageRange?: string;
  link: string;
}

const SkillCard = ({ title, description, icon, ageRange, link }: SkillCardProps) => {
  // Generate icon based on title if none provided
  const getDefaultIcon = () => {
    if (icon) return icon;
    
    switch (title) {
      case "Digital Literacy":
        return <Laptop className="h-6 w-6" />;
      case "Financial Intelligence":
        return <DollarSign className="h-6 w-6" />;
      case "Communication Skills":
        return <MessageSquare className="h-6 w-6" />;
      case "Critical Thinking":
        return <Brain className="h-6 w-6" />;
      case "Creative Problem Solving":
        return <Lightbulb className="h-6 w-6" />;
      case "Entrepreneurship":
        return <Briefcase className="h-6 w-6" />;
      case "Coding & Technical Skills":
        return <Code className="h-6 w-6" />;
      case "Social Intelligence":
        return <Users className="h-6 w-6" />;
      case "Self-Management":
        return <Clock className="h-6 w-6" />;
      case "Adaptive Learning":
        return <Lightbulb className="h-6 w-6" />;
      case "Media Literacy":
        return <FileText className="h-6 w-6" />;
      case "Global Awareness":
        return <Globe className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <Card className="card-hover h-full flex flex-col transition-all duration-300 hover:shadow-lg border-l-4 border-l-brand-blue transform hover:translate-y-[-3px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-3 rounded-lg mr-3 text-brand-blue">
            {getDefaultIcon()}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        {ageRange && <CardDescription>Ideal for: {ageRange}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <Button asChild variant="outline" className="w-full hover:bg-blue-50 hover:text-brand-blue">
          <Link to={link} className="flex items-center justify-center">
            Explore Skill Guide
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
