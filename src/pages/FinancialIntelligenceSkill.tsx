
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Shield, 
  Lightbulb, 
  Calculator, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  GraduationCap,
  FileSpreadsheet,
  Wallet,
  LineChart,
  PiggyBank,
  Building,
  Scale
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FinancialIntelligenceSkill = () => {
  return (
    <>
      <PageHeader 
        title="Financial Intelligence Skill Guide" 
        description="A comprehensive approach to building money skills from early childhood through teenage years for future financial success."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Financial Intelligence</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to understand, manage, and grow money effectively through informed decisions, delayed gratification, and strategic planning for long-term security.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Essential Skill
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Ages 5+
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Future-Ready
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Financial intelligence extends far beyond simply knowing how to earn and save money. In today's complex economy, understanding financial concepts, developing healthy money habits, and making informed decisions are foundational skills that determine future quality of life. Children who develop financial intelligence early gain greater control over their future options, whether that means pursuing further education, starting businesses, or achieving financial independence.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-green-700 mr-2" />
                          <h4 className="font-semibold text-green-700">Lifetime Impact</h4>
                        </div>
                        <p className="text-sm text-gray-700">Research shows that financial habits formed before age 7 strongly predict adult financial behaviors. Children with early financial education accumulate 5-7x more assets by their 30s.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Protection From Risk</h4>
                        </div>
                        <p className="text-sm text-gray-700">Financially intelligent individuals are 64% less likely to experience debt crises and 83% more likely to recover successfully from financial setbacks.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Wallet className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Money Management</h4>
                          <p className="text-sm text-gray-600">Understanding income, expenses, budgeting, and saving for both short and long-term needs.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <LineChart className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Growth & Investment</h4>
                          <p className="text-sm text-gray-600">Growing money through interest, investments, and understanding risk versus return.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Shield className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Financial Protection</h4>
                          <p className="text-sm text-gray-600">Recognizing financial risks and protecting assets through appropriate strategies.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Scale className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Value Assessment</h4>
                          <p className="text-sm text-gray-600">Evaluating the true value of purchases and understanding opportunity costs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages5-7" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages5-7">Ages 5-7</TabsTrigger>
                      <TabsTrigger value="ages8-11">Ages 8-11</TabsTrigger>
                      <TabsTrigger value="ages12-16">Ages 12-16</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages5-7" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic awareness and habits</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding that money is exchanged for goods and services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognition of different denominations and their relative values</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Ability to delay gratification for small purchases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning differentiation between needs and wants</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Three Jars System</h5>
                        <p className="text-sm text-gray-600 mb-2">Create three transparent jars labeled "Spend," "Save," and "Share." Help your child divide money they receive between these jars to establish basic money management habits.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial setup: 30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Clear jars, labels</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Shopping List Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a pretend store at home where children can practice making purchases within a budget using real coins.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Household items, price tags, coins</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on creating positive associations with money management. Use concrete, physical examples rather than abstract concepts. Children learn more from watching your money habits than from what you say, so be mindful of modeling the behaviors you want them to develop.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages8-11" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Application Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing planning and decision-making skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating and following a simple spending plan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding trade-offs and opportunity costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Saving for medium-term goals (2-4 weeks)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Comparing prices and recognizing value differences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic understanding of earning money through work</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Goal Setting Chart</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child identify something they want to save for, calculate how long it will take, and create a visual tracker for their progress.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial setup: 45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Poster board, markers, calculator</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Comparison Shopping Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">When making a planned purchase, involve your child in researching options across different stores or online. Compare prices, quality, and features.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1 hour</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Internet access, notepad</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Family Budget Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simplified version of family financial decisions and let children participate in allocating resources across categories.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Play money, category cards</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is an ideal age to establish regular allowance systems tied to both responsibilities and financial learning goals. Consider matching savings for important goals to demonstrate the power of outside contribution to wealth building. When children make poor money choices, resist the urge to rescue them—natural consequences provide powerful learning moments.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages12-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Building financial independence and investment concepts</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating and maintaining a personal budget across multiple categories</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding banking systems and financial services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Grasping compound interest and long-term investment concepts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing marketing tactics and resisting impulse purchases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding income sources and career financial implications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic understanding of taxes and financial responsibilities</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">First Bank Account</h5>
                        <p className="text-sm text-gray-600 mb-2">Open a student bank account with your teen. Teach them how to track balances, understand statements, and manage a debit card responsibly.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours (initial setup)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Identification documents, initial deposit</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Investment Simulation</h5>
                        <p className="text-sm text-gray-600 mb-2">Use free stock market simulation tools to create a mock investment portfolio. Track performance over time and discuss investment strategies.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial setup: 1 hour, then 15-20 minutes weekly</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Virtual stock market platforms</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Earnings Research Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Explore careers of interest, research salary ranges, education costs, and calculate living expenses to understand financial implications of different paths.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>3-4 hours (can be spread across multiple sessions)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Internet access, spreadsheet</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Budgeting Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Give teens increasing responsibility for managing specific expense categories (clothing, entertainment, etc.) with a fixed budget over longer periods.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Ongoing (monthly)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Budgeting app or spreadsheet</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, focus on transitioning from teaching to mentoring. Grant increasing financial independence while maintaining open communication. Share more about family financial decisions and your own money journey, including mistakes you've made. Encourage entrepreneurial thinking and opportunities for earning beyond allowance.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Resources & Tools</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Financial Milestones Article</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive guide to age-appropriate money concepts from early childhood to teens.</p>
                      <Link to="/resources" className="text-sm text-green-600 flex items-center hover:text-green-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileSpreadsheet className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Budget Template</h4>
                      <p className="text-sm text-gray-600 mb-2">Age-appropriate budget templates for children and teens.</p>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                        <Download className="h-3 w-3 mr-1" /> Download Template
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Apps & Tools</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <PiggyBank className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">FamZoo</h4>
                        <p className="text-sm text-gray-600">Virtual family banking app for kids</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <Calculator className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Compound Interest Calculator</h4>
                        <p className="text-sm text-gray-600">Visual tool showing growth over time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Bankaroo</h4>
                        <p className="text-sm text-gray-600">Virtual bank for younger children</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-2 mr-3">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Greenlight</h4>
                        <p className="text-sm text-gray-600">Debit card and money app for teens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Need Personalized Guidance?</h3>
                  <p className="text-sm opacity-90 mb-4">Get a customized financial education plan based on your child's age, interests, and your family's financial values and goals.</p>
                  <Button variant="secondary" className="w-full">Schedule a Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialIntelligenceSkill;

