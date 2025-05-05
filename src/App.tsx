
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Resources from "./pages/Resources";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HighIncomeRoadmap from "./pages/HighIncomeRoadmap";
import DigitalLiteracySkill from "./pages/DigitalLiteracySkill";
import FinancialIntelligenceSkill from "./pages/FinancialIntelligenceSkill";
import CommunicationSkillsGuide from "./pages/CommunicationSkillsGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/about" element={<About />} />
            <Route path="/high-income-roadmap" element={<HighIncomeRoadmap />} />
            <Route path="/skills/digital-literacy" element={<DigitalLiteracySkill />} />
            <Route path="/skills/financial-intelligence" element={<FinancialIntelligenceSkill />} />
            <Route path="/skills/communication" element={<CommunicationSkillsGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
