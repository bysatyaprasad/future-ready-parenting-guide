
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Brain, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  ChartBar,
  Coins,
  HandCoins,
  HandHeart,
  PiggyBank
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const EntrepreneurshipSkill = () => {
  return (
    <>
      <PageHeader 
        title="Entrepreneurship Skill Guide" 
        description="Help your child develop business thinking, creative problem-solving, and the ability to turn ideas into action."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Entrepreneurship</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to identify opportunities, develop innovative solutions, and create value by bringing ideas to life with resilience and resourcefulness.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700">
                      Future-Ready Skill
                    </Badge>
                    <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700">
                      Ages 10+
                    </Badge>
                    <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700">
                      Self-Reliance Builder
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Entrepreneurship is more than just starting a business—it's a mindset and approach to life that helps children become confident, adaptable problem-solvers. In today's rapidly changing world, entrepreneurial skills give children the tools to create their own opportunities rather than simply waiting for them. These skills also foster independence, creativity, and resilience that benefit children regardless of their future career paths.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-orange-50 border-orange-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-orange-700 mr-2" />
                          <h4 className="font-semibold text-orange-700">Future Readiness</h4>
                        </div>
                        <p className="text-sm text-gray-700">73% of employers rate entrepreneurial skills (initiative, adaptability, problem-solving) as critical for future workforce success.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-orange-50 border-orange-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-orange-700 mr-2" />
                          <h4 className="font-semibold text-orange-700">Income Potential</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children with entrepreneurial education are 4x more likely to start their own businesses later in life, creating multiple income streams.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Opportunity Recognition</h4>
                          <p className="text-sm text-gray-600">Identifying problems that need solving and spots where value can be created.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Creative Problem-Solving</h4>
                          <p className="text-sm text-gray-600">Developing innovative solutions and being willing to experiment with different approaches.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <HandCoins className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Resource Management</h4>
                          <p className="text-sm text-gray-600">Making the most of available resources and understanding basic business concepts.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <HandHeart className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Resilience & Adaptability</h4>
                          <p className="text-sm text-gray-600">Bouncing back from setbacks and being able to adjust plans as needed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages10-12" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages10-12">Ages 10-12</TabsTrigger>
                      <TabsTrigger value="ages13-15">Ages 13-15</TabsTrigger>
                      <TabsTrigger value="ages16-18">Ages 16-18</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages10-12" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-orange-100 text-orange-700 hover:bg-orange-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building entrepreneurial awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding the basic concept of business (creating and selling products/services)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying simple problems that could be solved with a product or service</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Calculating basic costs and pricing for simple items</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing confidence to share ideas and ask questions</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Lemonade Stand Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child plan and run a simple lemonade (or other beverage) stand. Guide them through planning, pricing, marketing, and tracking results.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Planning: 1-2 hours, Execution: 2-3 hours</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Ingredients, sign-making supplies, money box</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Problem-Solving Journal</h5>
                        <p className="text-sm text-gray-600 mb-2">Encourage your child to keep a notebook where they write down problems they notice and brainstorm possible solutions.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15 minutes, 2-3 times per week</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Notebook, pens/pencils</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Entrepreneur Interview</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child prepare questions and interview a local business owner (could be a family friend or neighborhood shop owner).</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Preparation: 30 minutes, Interview: 30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: List of questions, notebook for recording answers</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on nurturing curiosity and confidence. Praise effort over results, and help children see "failures" as valuable learning experiences. The goal is to make entrepreneurship fun while building basic business awareness.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages13-15" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-orange-100 text-orange-700 hover:bg-orange-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building business skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating a simple business plan with goals and action steps</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding target customers and basic marketing principles</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Tracking income, expenses, and profit with more detail</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing negotiation and presentation skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Learning from feedback and making improvements</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Mini-Business Launch</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your teen start a small service business based on their skills (tutoring, pet care, tech help for seniors, etc.). Focus on identifying target customers and setting appropriate prices.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Planning: 3-4 hours, Implementation: Ongoing</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Business plan template, marketing materials, record-keeping system</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Market Research Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Have your teen create a survey to learn about potential customers' needs and preferences for a product or service they're interested in offering.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours (spread over one week)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Survey questions, method to collect responses (online or in-person)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Product Improvement Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Ask your teen to choose an existing product and redesign it to be better. Then create a simple prototype and pitch their improvement to family members.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>4-5 hours (spread over several days)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Craft supplies for prototype, presentation materials</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teens at this age benefit from increased independence with guidance. Provide support when asked, but let them make decisions and experience the natural consequences. Help them reflect on both successes and failures by asking thoughtful questions rather than giving direct advice.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages16-18" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-orange-100 text-orange-700 hover:bg-orange-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing entrepreneurial independence</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating comprehensive business plans with financial projections</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding different business models and revenue streams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing sales and marketing strategies for different platforms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Building networks and partnerships to expand reach</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding legal and ethical aspects of business</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Managing time and prioritizing tasks effectively</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Business Launch</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your teen start an online business (e-commerce store, content creation, digital services) with minimal startup costs. Focus on digital marketing and building an online presence.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Planning: 10+ hours, Implementation: Ongoing</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Business plan, website/platform access, marketing strategy</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Business Mentor Connection</h5>
                        <p className="text-sm text-gray-600 mb-2">Connect your teen with a mentor in a field they're interested in. Help them prepare specific questions and goals for the mentorship.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Monthly meetings (30-60 minutes each)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Notebook for recording insights, questions list</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Business Competition</h5>
                        <p className="text-sm text-gray-600 mb-2">Encourage participation in a business plan or pitch competition through school, community organizations, or online platforms.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Preparation: 15-20 hours over several weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Business plan, presentation slides, pitch practice</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, your role is primarily as a consultant and connector. Help your teen access resources, networks, and opportunities, but let them drive their own entrepreneurial journey. Discuss bigger concepts like business ethics, work-life balance, and the role of business in society.</p>
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
                    <BookOpen className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Young Entrepreneur's Guide</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive roadmap for developing business skills from childhood to teens.</p>
                      <Link to="/resources" className="text-sm text-orange-600 flex items-center hover:text-orange-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChartBar className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Simple Business Plan Template</h4>
                      <p className="text-sm text-gray-600 mb-2">Kid-friendly template to help plan a first business venture.</p>
                      <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                        <Download className="h-3 w-3 mr-1" /> Download Template
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Books & Programs</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"The Lemonade Stand"</h4>
                        <p className="text-sm text-gray-600">Illustrated guide for young entrepreneurs (Ages 8-12)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">YouthPreneur Workshop</h4>
                        <p className="text-sm text-gray-600">Online program teaching business basics to teens</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <PiggyBank className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Udemy: Kid Business Courses</h4>
                        <p className="text-sm text-gray-600">Age-appropriate online courses on entrepreneurship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Young Entrepreneur Showcase</h3>
                  <p className="text-sm opacity-90 mb-4">Join our quarterly event where young entrepreneurs can showcase their businesses and receive feedback from successful business owners.</p>
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

export default EntrepreneurshipSkill;
