
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-white to-brand-gray py-16 md:py-24">
      <div className="container-custom flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mt-10 md:mt-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-blue">
            {title}
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {ctaText && ctaLink && (
              <Button asChild size="lg" className="bg-brand-blue hover:bg-blue-700 font-bold">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 font-bold">
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-lg transform rotate-3 scale-105"></div>
          <img 
            src={imageSrc || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"}
            alt="Future ready kids building high-income skills" 
            className="rounded-lg shadow-lg max-w-full h-auto relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
