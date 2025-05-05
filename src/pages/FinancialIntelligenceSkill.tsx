
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  PiggyBank, 
  Calculator, 
  Brain, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  TrendingUp,
  Coins,
  Wallet,
  CreditCard,
  ChartBar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FinancialIntelligenceSkill = () => {
  return (
    <>
      <PageHeader 
        title="Financial Intelligence Skill Guide" 
        description="Help your child develop essential money skills for lifelong financial success, independence, and confidence."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Financial Intelligence</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to understand how money works, make informed financial decisions, and develop healthy money habits for lifelong financial well-being.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Core Life Skill
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Ages 6+
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Independence Builder
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Financial intelligence is much more than just knowing how to count money or use a savings account. It's a comprehensive skill that helps children understand the value of money, make smart financial choices, and develop a healthy relationship with money that will benefit them throughout their lives. In a world where financial decisions are becoming increasingly complex, giving your child this skill is one of the greatest gifts for their future success and independence.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-green-700 mr-2" />
                          <h4 className="font-semibold text-green-700">Lifelong Impact</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children who learn financial skills early are 3x more likely to save regularly and 2x more confident in making financial decisions as adults.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-green-700 mr-2" />
                          <h4 className="font-semibold text-green-700">Future Security</h4>
                        </div>
                        <p className="text-sm text-gray-700">Early financial education leads to 40% higher savings rates and 25% lower debt levels in adulthood, creating a foundation for financial freedom.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Coins className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Money Awareness</h4>
                          <p className="text-sm text-gray-600">Understanding what money is, how it works, and its role in everyday life.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <PiggyBank className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Saving & Planning</h4>
                          <p className="text-sm text-gray-600">Developing the habit of saving money and planning for both short and long-term goals.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Wallet className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Smart Spending</h4>
                          <p className="text-sm text-gray-600">Making thoughtful decisions about how to use money and understanding the difference between needs and wants.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <ChartBar className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Income & Growth</h4>
                          <p className="text-sm text-gray-600">Understanding how money can be earned and how it can grow through careful management and investing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages6-8" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages6-8">Ages 6-8</TabsTrigger>
                      <TabsTrigger value="ages9-12">Ages 9-12</TabsTrigger>
                      <TabsTrigger value="ages13-16">Ages 13-16</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages6-8" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic money awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing different coins and notes and their values</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding that things cost money and money comes from work</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Starting to save money in a piggy bank or savings jar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Distinguishing between needs (food, clothing) and wants (toys, treats)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Money Sorting Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child sort real coins and notes by value. Talk about the different people, symbols, and numbers on them.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Different coins and notes, sorting containers</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Three Jars System</h5>
                        <p className="text-sm text-gray-600 mb-2">Create three clear jars labeled "Save," "Spend," and "Share/Give." When your child receives money, help them divide it among the jars.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes to set up, then ongoing</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Three clear jars or containers, labels, decorating supplies</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Grocery Store Math</h5>
                        <p className="text-sm text-gray-600 mb-2">Give your child a small amount of money (₹50-100) at the grocery store and let them choose and pay for a small item within their budget.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>During regular shopping trip</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Small amount of money</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on creating positive experiences with money. Avoid using phrases like "we can't afford that" which can create anxiety. Instead, try "we're choosing to spend our money on other things right now" to emphasize choice rather than limitation.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages9-12" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Building Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing money management skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating a simple budget for pocket money or allowance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding different ways to pay (cash, cards, digital payments)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Saving for a specific short-term goal (1-3 months)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Making price comparisons while shopping</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to understand the concept of earning interest</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Savings Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child set a specific saving goal (like a toy or game). Create a visual tracker to show progress, and consider matching their savings to encourage the habit.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-3 months (ongoing)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Savings jar, visual tracker chart, calculator</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Family Budget Meeting</h5>
                        <p className="text-sm text-gray-600 mb-2">Include your child in planning a family event or outing. Give them a budget and involve them in researching costs and making decisions.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper, pen, calculator, internet for research</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Interest Experiment</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a home "bank" where you pay small interest (e.g., 5% monthly) on money your child keeps in savings. Show them how their money grows without any extra work.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Ongoing (monthly calculations)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Savings container, calculator, interest tracking sheet</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is an ideal age to start a regular allowance system if you haven't already. Consider tying some (but not all) of the allowance to household responsibilities. Allow natural consequences - if they spend all their money immediately, don't bail them out. These early lessons about delayed gratification are valuable.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages13-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing financial independence</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Managing a bank account (with parental oversight)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding different types of income (wages, profits, passive income)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating comprehensive budgets with multiple categories</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic understanding of taxes and financial responsibilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Introduction to investing concepts and compound growth</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Awareness of common financial pitfalls (debt, scams, impulse spending)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">First Bank Account</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your teen open their first bank account. Teach them how to track transactions, use online banking safely, and balance their account.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours initial setup, then ongoing monitoring</span>
                          <span className="mx-2">•</span>
                          <span>Materials: ID documents, initial deposit, banking app</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Income Stream Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Challenge your teen to create a small income stream (tutoring younger students, selling crafts, providing a service). Help them track expenses and profits.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Ongoing project (1-3 months)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Business plan template, income/expense tracker</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Investment Simulation</h5>
                        <p className="text-sm text-gray-600 mb-2">Use a virtual stock market game or app to teach basic investing concepts without real money at stake. Discuss risk, diversification, and long-term growth.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial setup: 1 hour, then 15-20 minutes weekly</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Virtual investing app (like "How The Market Works" or "Stock Market Game")</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Real-World Budget Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simulation of adult expenses. Give your teen a hypothetical salary and have them create a budget for rent, food, transportation, etc.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Budget worksheet, calculator, real-world cost examples</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teens need increasing financial responsibility with a safety net. Let them make some financial mistakes while the stakes are still low - it's better to learn about the consequences of poor financial decisions now rather than as adults. Be open about your own financial journey, including mistakes you've made and lessons you've learned.</p>
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
                      <h4 className="font-medium text-gray-800 mb-1">Money Smart Family Guide</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive guide to teaching children about money at every age.</p>
                      <Link to="/resources" className="text-sm text-green-600 flex items-center hover:text-green-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calculator className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Kids' Budget Template</h4>
                      <p className="text-sm text-gray-600 mb-2">Simple budget tracking sheet designed specifically for children.</p>
                      <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                        <Download className="h-3 w-3 mr-1" /> Download Template
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Apps & Books</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <PiggyBank className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">RupeeKid</h4>
                        <p className="text-sm text-gray-600">Child-friendly money tracking app (Ages 8+)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"One Rupee: My Money Story"</h4>
                        <p className="text-sm text-gray-600">Illustrated book for young children (Ages 6-9)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">FamPay</h4>
                        <p className="text-sm text-gray-600">Prepaid card app for teens with parental controls</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Family Finance Workshop</h3>
                  <p className="text-sm opacity-90 mb-4">Join our online workshop where parents and children learn practical money skills together through fun activities.</p>
                  <Button variant="secondary" className="w-full">Learn More</Button>
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
