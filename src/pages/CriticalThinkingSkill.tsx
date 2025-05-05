
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  GraduationCap,
  FileText,
  MessageSquare,
  Search,
  PuzzlePiece
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CriticalThinkingSkill = () => {
  return (
    <>
      <PageHeader 
        title="Critical Thinking Skill Guide" 
        description="Help your child develop strong reasoning skills to analyze information, solve problems, and make sound decisions."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Critical Thinking</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to think clearly and rationally, understanding the logical connection between ideas and examining problems in an organized way.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Core Skill
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Ages 7+
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Future-Ready
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Critical thinking is essential in a world filled with information, both true and false. Children who can think critically can tell fact from opinion, spot problems in arguments, and make better decisions. This skill helps them in school subjects like math and science, but also in daily life situations like choosing friends, avoiding scams, and solving problems.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-purple-700 mr-2" />
                          <h4 className="font-semibold text-purple-700">School Success</h4>
                        </div>
                        <p className="text-sm text-gray-700">Students with strong critical thinking skills perform 30% better on problem-solving tests and show higher achievement across all subjects.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Lightbulb className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Future Job Readiness</h4>
                        </div>
                        <p className="text-sm text-gray-700">93% of employers rate critical thinking as "very important" when hiring, ranking it above specific technical skills.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Search className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Analysis</h4>
                          <p className="text-sm text-gray-600">Breaking down complex information into smaller parts to understand how they connect.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Logical Reasoning</h4>
                          <p className="text-sm text-gray-600">Using rules of thinking to draw sensible conclusions from information.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Questioning</h4>
                          <p className="text-sm text-gray-600">Asking "how" and "why" questions to deepen understanding and reveal assumptions.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Problem Solving</h4>
                          <p className="text-sm text-gray-600">Finding solutions through systematic approaches rather than guesswork.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages7-9" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages7-9">Ages 7-9</TabsTrigger>
                      <TabsTrigger value="ages10-12">Ages 10-12</TabsTrigger>
                      <TabsTrigger value="ages13-16">Ages 13-16</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages7-9" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic reasoning skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sorting and categorizing objects or ideas by different features</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Spotting simple patterns and making basic predictions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Telling the difference between fact and make-believe</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Asking "why" and "how" questions about things they observe</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Spot the Difference Games</h5>
                        <p className="text-sm text-gray-600 mb-2">Use pictures with subtle differences to help your child practice careful observation and attention to detail.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10-15 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Spot the difference puzzles (available online or in activity books)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Fact or Opinion Sorting</h5>
                        <p className="text-sm text-gray-600 mb-2">Cut out simple statements from magazines or write your own. Have your child sort them into "facts" and "opinions."</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper strips with statements, two containers for sorting</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, keep activities playful and short. Praise effort, not just correct answers. When your child asks questions, avoid giving immediate answers. Instead ask, "What do you think?" to encourage them to reason through problems themselves.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages10-12" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Expanding logical reasoning abilities</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding cause and effect relationships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying problems and brainstorming multiple solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing when information is missing to make a decision</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to identify bias and unreliable sources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Making predictions based on evidence</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">News Detective</h5>
                        <p className="text-sm text-gray-600 mb-2">Select age-appropriate news articles and have your child identify the main facts, any opinions, and questions they still have about the topic.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>25-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Kid-friendly news articles, highlighters</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Logic Puzzles</h5>
                        <p className="text-sm text-gray-600 mb-2">Introduce simple logic puzzles like Sudoku for beginners, grid logic puzzles, or Mystery Grid games that require deductive reasoning.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Age-appropriate logic puzzle books or printables</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Problem-Solution Journal</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create a journal where they identify everyday problems and brainstorm multiple solutions, then evaluate each solution's pros and cons.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial setup: 30 minutes, then 10-15 minutes per entry</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Notebook, colored pens</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, children benefit from discussing their thinking process. Regularly ask "How did you figure that out?" When watching TV shows or movies together, discuss characters' choices and alternative solutions they could have tried. Encourage friendly debates about age-appropriate topics at the dinner table.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages13-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing sophisticated analysis skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying logical fallacies in arguments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Evaluating the credibility of information sources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Considering multiple perspectives on complex issues</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing systematic approaches to complex problems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing how emotions can influence thinking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Testing hypotheses with evidence</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Media Analysis Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Have teens compare how different news sources cover the same event. Identify facts vs. opinions, potential bias, and missing information.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours (can be spread over multiple days)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to different news sources, analysis worksheet</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Structured Debates</h5>
                        <p className="text-sm text-gray-600 mb-2">Select age-appropriate controversial topics and have teens research and present arguments for positions they may not personally agree with.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Research: 1-2 hours, Debate: 30-45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Research resources, debate format guidelines</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Decision Analysis Exercise</h5>
                        <p className="text-sm text-gray-600 mb-2">For important decisions, teach teens to create a decision matrix that weighs different options against multiple criteria that matter to them.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Spreadsheet or paper grid</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teens are developing their own worldviews. Focus on teaching the process of critical thinking rather than pushing specific conclusions. Create a safe space where they can question ideas without fear of judgment. When they make decisions you disagree with, ask them to explain their reasoning rather than immediately criticizing.</p>
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
                    <BookOpen className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Critical Thinking Roadmap</h4>
                      <p className="text-sm text-gray-600 mb-2">Detailed guide to developing reasoning skills from early childhood through teens.</p>
                      <Link to="/resources" className="text-sm text-purple-600 flex items-center hover:text-purple-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Thinking Questions Toolkit</h4>
                      <p className="text-sm text-gray-600 mb-2">Questions to help children analyze situations and think more deeply.</p>
                      <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
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
                        <Brain className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Brain It On!</h4>
                        <p className="text-sm text-gray-600">Physics puzzles that require creative thinking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"What Do You Do With an Idea?"</h4>
                        <p className="text-sm text-gray-600">Children's book about the power of thinking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-2 mr-3">
                        <GraduationCap className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Khan Academy: Logic</h4>
                        <p className="text-sm text-gray-600">Free online lessons for teens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Connect With Other Parents</h3>
                  <p className="text-sm opacity-90 mb-4">Join our monthly virtual workshops where parents share strategies for developing critical thinking skills at home.</p>
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

export default CriticalThinkingSkill;
