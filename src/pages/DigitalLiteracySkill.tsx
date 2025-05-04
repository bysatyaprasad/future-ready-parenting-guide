
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  ShieldCheck, 
  Brain, 
  Lightbulb, 
  Dna, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  GraduationCap,
  FileSpreadsheet
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DigitalLiteracySkill = () => {
  return (
    <>
      <PageHeader 
        title="Digital Literacy Skill Guide" 
        description="A comprehensive roadmap to develop essential digital skills for future success, broken down by age and ability level."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Laptop className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Digital Literacy</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to use information and communication technologies to find, evaluate, create, and communicate information, requiring both cognitive and technical skills.</p>
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
                  <p className="text-gray-600 mb-6">Digital literacy has evolved from a specialized skill to a fundamental requirement for educational and career success. Today's children will enter a workforce where nearly every role requires some level of digital proficiency. Beyond employability, digital literacy enables lifelong learning, informed citizenship, and safe navigation of increasingly digital social spaces.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Career Impact</h4>
                        </div>
                        <p className="text-sm text-gray-700">Over 80% of middle-skill jobs now require digital proficiency. Digitally literate individuals earn 18% more on average than those with limited digital skills.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="h-5 w-5 text-purple-700 mr-2" />
                          <h4 className="font-semibold text-purple-700">Educational Advantage</h4>
                        </div>
                        <p className="text-sm text-gray-700">Students with strong digital literacy show 27% better information retention and 35% higher engagement in learning across all subjects.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <ShieldCheck className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Digital Safety & Security</h4>
                          <p className="text-sm text-gray-600">Understanding online risks, protecting personal information, and navigating digital spaces safely.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Information Literacy</h4>
                          <p className="text-sm text-gray-600">Finding, evaluating, and using online information effectively and ethically.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Digital Creation</h4>
                          <p className="text-sm text-gray-600">Using digital tools to create content, express ideas, and solve problems.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Dna className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Computational Thinking</h4>
                          <p className="text-sm text-gray-600">Understanding basic principles of how digital systems work and breaking down problems logically.</p>
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
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic awareness and comfort</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic device navigation (touchscreens, mouse control, simple keyboard use)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding of internet safety fundamentals (not sharing personal information)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognition of digital vs. physical experiences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Simple creative expression with digital tools (drawing apps, voice recording)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Storytelling</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create a simple digital story using pictures and recorded narration.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Apps: Book Creator, StoryKit</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Internet Safety Superhero</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a character who protects personal information and discuss what information should be kept private.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper, coloring supplies, or digital drawing tool</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on creating positive associations with technology through highly supervised, time-limited experiences. Quality matters more than quantity—choose educational content that encourages interaction rather than passive consumption.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages8-11" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Exploration Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing competence and critical thinking</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Competent use of search engines with growing evaluation of sources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic understanding of digital footprints and online reputation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Introduction to visual programming concepts (block-based coding)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creation of multimedia content (presentations, simple videos)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding of basic cybersecurity practices (strong passwords)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Fact Detective Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Research a topic of interest using multiple sources, then identify which information appears reliable and why.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to safe search engines, evaluation worksheet</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Block Coding Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simple animation or game using visual programming blocks to develop computational thinking.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Scratch, Code.org</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Citizenship Scenarios</h5>
                        <p className="text-sm text-gray-600 mb-2">Discuss and role-play responses to common online situations involving privacy, communication, and information sharing.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Scenario cards, discussion guide</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is an ideal age to establish healthy technology habits. Create a family technology agreement that covers usage limits, approved applications, and digital citizenship expectations. Begin more substantive conversations about online information quality and reliability.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages12-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Mastery Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing advanced skills and ethical awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sophisticated information evaluation and lateral reading strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced digital creation skills (video editing, graphic design basics)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding of algorithm bias and filter bubbles</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Strategic management of digital identity and privacy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Deeper understanding of how technology affects well-being</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Introduction to text-based programming and more advanced computational concepts</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Media Analysis Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Analyze how the same news story is covered across different platforms and identify potential biases or perspectives.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>90 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to various news sources, analysis template</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Personal Website/Portfolio Development</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simple personal portfolio showcasing interests, achievements, and digital creations using user-friendly website builders.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>3-4 hours (multiple sessions)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Wix, WordPress, Google Sites</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Well-being Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Track technology use for one week, analyze patterns, and develop a personal plan for healthy digital habits.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Ongoing (1 week)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Screen time tracking tools, reflection journal</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">App Development Introduction</h5>
                        <p className="text-sm text-gray-600 mb-2">Design and create a simple mobile application that solves a personal or community problem.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10+ hours (project-based)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: MIT App Inventor, Thunkable</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, focus on transitioning from protection to preparation. Teens need increasing independence with technology, but also need deeper discussions about digital ethics, identity, and future implications of their digital choices. Partner with them rather than policing them.</p>
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
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Digital Literacy Article</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive guide to building digital skills from early childhood.</p>
                      <Link to="/resources" className="text-sm text-blue-600 flex items-center hover:text-blue-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileSpreadsheet className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Progress Tracking Template</h4>
                      <p className="text-sm text-gray-600 mb-2">Monitor your child's digital skill development with this simple tool.</p>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
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
                        <Lightbulb className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">ScratchJr</h4>
                        <p className="text-sm text-gray-600">Visual coding for ages 5-7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Google's Be Internet Awesome</h4>
                        <p className="text-sm text-gray-600">Digital citizenship program for ages 8-12</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Common Sense Media</h4>
                        <p className="text-sm text-gray-600">Age-appropriate media recommendations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Canva for Education</h4>
                        <p className="text-sm text-gray-600">Digital creation tool for all ages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Need Personalized Guidance?</h3>
                  <p className="text-sm opacity-90 mb-4">Get a customized digital literacy development plan based on your child's specific age, interests, and current abilities.</p>
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

export default DigitalLiteracySkill;
