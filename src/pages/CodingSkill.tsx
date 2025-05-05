
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Brain, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  Puzzle,
  GraduationCap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CodingSkill = () => {
  return (
    <>
      <PageHeader 
        title="Coding & Technical Skills Guide" 
        description="Help your child develop programming abilities and computational thinking for a technology-driven future."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Coding & Technical Skills</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to understand and use programming languages, computational thinking, and technical problem-solving to create digital solutions and interact confidently with technology.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Future-Ready Skill
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Ages 8+
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Digital Creator
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Coding is much more than a technical skill—it's a powerful way of thinking that helps children break down complex problems, identify patterns, and create step-by-step solutions. In our increasingly digital world, coding literacy provides children with the ability to understand and participate in creating technology rather than just consuming it. Even for children who don't pursue programming careers, the computational thinking skills developed through coding transfer to many other areas and prepare them for a future where technology will be even more integrated into daily life.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Future Employment</h4>
                        </div>
                        <p className="text-sm text-gray-700">By 2030, an estimated 85% of jobs will require digital skills, with coding literacy becoming as fundamental as reading and writing.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Brain className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Cognitive Development</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children who learn coding show significant improvements in problem-solving, mathematical reasoning, and logical thinking skills.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Puzzle className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Computational Thinking</h4>
                          <p className="text-sm text-gray-600">Breaking down problems into smaller parts and identifying patterns and steps needed to solve them.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Code className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Programming Fundamentals</h4>
                          <p className="text-sm text-gray-600">Understanding basic programming concepts like sequences, loops, conditionals, and variables.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Digital Creation</h4>
                          <p className="text-sm text-gray-600">Using coding to create games, animations, websites, or applications to solve problems.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Debugging & Persistence</h4>
                          <p className="text-sm text-gray-600">Finding and fixing errors in code and developing a growth mindset when faced with challenges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages8-10" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages8-10">Ages 8-10</TabsTrigger>
                      <TabsTrigger value="ages11-13">Ages 11-13</TabsTrigger>
                      <TabsTrigger value="ages14-16">Ages 14-16</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages8-10" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building coding awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding that computers follow specific instructions (algorithms)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using block-based coding to create simple sequences and loops</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating basic animations and simple interactive games</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying and fixing simple errors in code</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">ScratchJr Storytelling</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create an interactive story using ScratchJr (a simplified version of Scratch designed for younger children).</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Tools: ScratchJr app on tablet</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Unplugged Algorithm Activities</h5>
                        <p className="text-sm text-gray-600 mb-2">Practice computational thinking without a computer. Give your child step-by-step instructions for everyday tasks (like making a sandwich) and have them identify when steps are missing or out of order.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper, pencil, and items for the chosen activity</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Code.org Hour of Code</h5>
                        <p className="text-sm text-gray-600 mb-2">Try age-appropriate coding activities from Code.org featuring popular characters kids love. These guided tutorials make learning coding concepts fun and accessible.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>60 minutes (can be divided into shorter sessions)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Computer or tablet with internet access</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on making coding playful and creative. No prior technical knowledge is needed from parents—learn alongside your child using the kid-friendly platforms designed for beginners. Limit screen time by balancing digital coding activities with "unplugged" computational thinking games.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages11-13" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building coding proficiency</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using variables, conditionals, and more complex loops</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating more sophisticated games and animations with multiple sprites/objects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding functions and how to use them for efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Introduction to basic HTML and CSS for web creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to plan projects before coding and testing them systematically</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Scratch Game Design</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create a game with multiple levels, scoring system, and interactive features using Scratch's block-based coding platform.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours (spread over multiple sessions)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Computer with internet access, Scratch account</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Simple Website Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Introduce basic HTML and CSS by helping your child create a simple personal website about their interests. Start with just a few pages and simple styling.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>3-4 hours (spread over several days)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Text editor (like Notepad++ or online platforms like Replit), web browser</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Arduino or micro:bit Projects</h5>
                        <p className="text-sm text-gray-600 mb-2">Explore physical computing with simple electronic projects using beginner-friendly boards like micro:bit or Arduino.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours per project</span>
                          <span className="mx-2">•</span>
                          <span>Materials: micro:bit or Arduino starter kit, computer</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, children benefit from more structured learning while still keeping it fun. Consider online courses specifically designed for this age group. Encourage your child to document their code with comments and explain their projects to others, which deepens understanding. If they get frustrated, guide them to break problems into smaller parts rather than giving direct solutions.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages14-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing coding expertise</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Learning text-based programming languages (Python, JavaScript)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding more advanced programming concepts (arrays, objects, classes)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Building full projects with multiple files and components</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using version control systems (like GitHub) for project management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating programs that solve real-world problems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding programming ethics and security basics</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Python Project: Data Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Learn Python by analyzing data sets that interest your teen (sports statistics, music trends, climate data, etc.) and creating visualizations.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>8-10 hours (spread over several weeks)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: Python, Jupyter Notebooks (or simpler alternatives), data sets</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">App Development</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simple mobile app using beginner-friendly platforms like MIT App Inventor or Thunkable that solves a personal or community problem.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10+ hours (project-based learning)</span>
                          <span className="mx-2">•</span>
                          <span>Tools: App development platform, smartphone for testing</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Coding Competition or Hackathon</h5>
                        <p className="text-sm text-gray-600 mb-2">Participate in a youth coding competition or hackathon (in-person or virtual) to build skills under time constraints and learn from peers.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Varies (typically 1-2 days for event, plus preparation time)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Computer, development tools, event registration</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, teens often benefit from connecting with the wider coding community. Look for local coding clubs, online forums, or mentorship opportunities. Encourage your teen to work on projects they're genuinely interested in—whether it's game development, web design, data science, or something else. The most effective learning happens when they're solving problems they care about.</p>
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
                      <h4 className="font-medium text-gray-800 mb-1">Coding Path Guide</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive roadmap for developing coding skills from beginner to advanced.</p>
                      <Link to="/resources" className="text-sm text-blue-600 flex items-center hover:text-blue-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Puzzle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Unplugged Coding Activities</h4>
                      <p className="text-sm text-gray-600 mb-2">Printable activities to develop computational thinking without a computer.</p>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Learning Platforms</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <Code className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Scratch</h4>
                        <p className="text-sm text-gray-600">Visual block-based coding platform (Ages 8-16)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <Code className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">CodeMonkey</h4>
                        <p className="text-sm text-gray-600">Game-based coding courses (Ages 8-14)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-2 mr-3">
                        <GraduationCap className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Khan Academy: Computer Programming</h4>
                        <p className="text-sm text-gray-600">Free interactive coding courses (Ages 13+)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">freeCodeCamp</h4>
                        <p className="text-sm text-gray-600">Comprehensive web development curriculum (Ages 14+)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Coding Bootcamp for Kids</h3>
                  <p className="text-sm opacity-90 mb-4">Our online coding courses are designed specifically for children and taught by experienced educators.</p>
                  <Button variant="secondary" className="w-full">Explore Courses</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingSkill;
