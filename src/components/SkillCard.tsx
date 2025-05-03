
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ageRange?: string;
  link: string;
}

const SkillCard = ({ title, description, icon, ageRange, link }: SkillCardProps) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        {icon && <div className="mb-2 text-brand-blue">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        {ageRange && <CardDescription>Ideal for: {ageRange}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
