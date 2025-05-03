
import React from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type Language = {
  id: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { id: "en", name: "English", flag: "🇬🇧" },
  { id: "hi", name: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { id: "ta", name: "தமிழ் (Tamil)", flag: "🇮🇳" },
  { id: "te", name: "తెలుగు (Telugu)", flag: "🇮🇳" },
  { id: "kn", name: "ಕನ್ನಡ (Kannada)", flag: "🇮🇳" },
  { id: "ml", name: "മലയാളം (Malayalam)", flag: "🇮🇳" },
  { id: "bn", name: "বাংলা (Bengali)", flag: "🇮🇳" },
  { id: "mr", name: "मराठी (Marathi)", flag: "🇮🇳" },
  { id: "gu", name: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
  { id: "pa", name: "ਪੰਜਾਬੀ (Punjabi)", flag: "🇮🇳" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(languages[0]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 h-9 px-3">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{selectedLanguage.name}</span>
          <span className="inline md:hidden">{selectedLanguage.flag}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2" align="end">
        <div className="grid gap-1">
          {languages.map((language) => (
            <Button
              key={language.id}
              variant="ghost"
              className="justify-start font-normal"
              onClick={() => setSelectedLanguage(language)}
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
              {language.id === selectedLanguage.id && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
