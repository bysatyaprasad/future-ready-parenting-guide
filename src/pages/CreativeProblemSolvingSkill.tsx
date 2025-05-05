
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  GraduationCap,
  FileText,
  Puzzle,
  Wand,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CreativeProblemSolvingSkill = () => {
  return (
    <>
      <PageHeader 
        title="Creative Problem Solving Skill Guide" 
        description="Help your child develop the ability to find unique solutions to challenges through innovative thinking and creative approaches."
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
                    <h2 className="text-2xl font-bold">Creative Problem Solving</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to tackle challenges with originality, flexibility, and imagination to develop innovative solutions when standard approaches don't work.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700">
                      Innovation Skill
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Ages 5+
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Future-Ready
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">In a world of rapid change and complex challenges, the ability to find new solutions is becoming more valuable than memorizing existing answers. Creative problem-solving helps children approach difficulties with confidence rather than fear. This skill enables them to adapt when plan A doesn't work, see opportunities where others see roadblocks, and develop the resilience needed for school success and future careers.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-orange-50 border-orange-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-orange-700 mr-2" />
                          <h4 className="font-semibold text-orange-700">Innovation Edge</h4>
                        </div>
                        <p className="text-sm text-gray-700">85% of employers rank creative problem solving as the top skill they look for in new graduates, regardless of the job field.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-yellow-50 border-yellow-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Rocket className="h-5 w-5 text-yellow-700 mr-2" />
                          <h4 className="font-semibold text-yellow-700">Future-Proofing</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children with creative problem-solving skills are better equipped for the 65% of future jobs that don't exist today but will require innovation.</p>
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
                          <h4 className="font-semibold text-gray-800">Ideation</h4>
                          <p className="text-sm text-gray-600">Generating many possible solutions without judgment.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Wand className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Flexibility</h4>
                          <p className="text-sm text-gray-600">Approaching problems from different angles and adapting when needed.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Puzzle className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Connection-Making</h4>
                          <p className="text-sm text-gray-600">Combining different ideas or knowledge areas in new ways.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <Rocket className="h-5 w-5 text-orange-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Implementation</h4>
                          <p className="text-sm text-gray-600">Turning creative ideas into practical solutions through testing and improving.</p>
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
                      <Badge className="mr-3 bg-orange-100 text-orange-700 hover:bg-orange-200">Discovery Stage</Badge>
                      <span className="text-gray-500 text-sm">Building imagination and exploration</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Finding multiple uses for everyday objects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating simple inventions by combining materials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Solving basic problems through trial and error</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to ask "what if" questions</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Magic Box Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Fill a box with random household items (paper clips, rubber bands, cardboard tubes, etc.). Present a simple challenge like "create something that can move" or "build a house for a toy" using only these materials.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Box with random items, scissors, tape</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">"What Else Could It Be?" Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Show your child an everyday object like a paper plate, and take turns imagining what else it could become (a steering wheel, a flying saucer, a hat, etc.).</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10-15 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Everyday objects</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on encouraging exploration without worrying about practical outcomes. Be careful not to judge their ideas too quickly with phrases like "that won't work." Instead, use encouraging language like "I'm interested to see what happens when you try that." Embrace mess and accept that creative activities are rarely tidy.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages8-11" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Connection Stage</Badge>
                      <span className="text-gray-500 text-sm">Linking ideas and developing processes</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Generating multiple solutions to defined problems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Combining ideas from different contexts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Testing and refining solutions based on feedback</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying when conventional solutions aren't working</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to develop step-by-step creative processes</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Rube Goldberg Machine</h5>
                        <p className="text-sm text-gray-600 mb-2">Challenge your child to create a simple Rube Goldberg machine - a chain reaction that performs a simple task in a complicated way, using household items.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours (can be spread over multiple days)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Dominoes, marbles, cardboard tubes, etc.</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Reverse Brainstorming</h5>
                        <p className="text-sm text-gray-600 mb-2">Instead of asking "How can we solve this problem?" ask "How could we make this problem worse?" Then reverse those ideas to find solutions.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper, markers</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Invention Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Present a real-world problem (like "how to remember to water plants" or "how to organize school supplies") and have your child design an invention to solve it.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Craft supplies, recycled materials</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Children at this age begin comparing their ideas to others. Emphasize that the most creative solutions often come when we combine different people's ideas rather than competing. Introduce the concept of "yes, and..." where they build on others' ideas instead of dismissing them. Create a home environment where unusual questions and impractical ideas are welcomed.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages12-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-green-100 text-green-700 hover:bg-green-200">Implementation Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing meaningful and practical creative solutions</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using structured creative processes for complex problems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Balancing creativity with practicality in solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Overcoming creative blocks and persisting through failures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Analyzing which creative approaches work best for different types of problems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Building on others' ideas to create stronger solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Prototyping and testing solutions in real-world contexts</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Design Thinking Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Introduce teens to the five-step design thinking process (Empathize, Define, Ideate, Prototype, Test) and apply it to solve a real problem in your home or community.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Multiple sessions of 1-2 hours each</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Varies based on project</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Cross-Pollination Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Have teens take principles or ideas from one field they're interested in (like sports, music, or gaming) and apply them to solve a problem in a completely different area.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Research materials, notebook</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Resource Constraint Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Set a challenge where teens must solve a problem with very limited resources or specific constraints, forcing them to think more creatively.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1 hour</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Limited set of materials based on challenge</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teens are ready for more complex creative challenges with real-world impact. Encourage them to find problems they genuinely care about. Help them connect with mentors who use creative problem solving in their careers. When they face setbacks, remind them that the most innovative breakthroughs often come after multiple failures.</p>
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
                      <h4 className="font-medium text-gray-800 mb-1">Creativity Toolkit</h4>
                      <p className="text-sm text-gray-600 mb-2">Simple techniques to help children break out of conventional thinking patterns.</p>
                      <Link to="/resources" className="text-sm text-orange-600 flex items-center hover:text-orange-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Idea Generation Cards</h4>
                      <p className="text-sm text-gray-600 mb-2">Printable cards with creative thinking prompts for different ages.</p>
                      <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Quick Creative Exercises</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">"What If" Game</h4>
                      <p className="text-sm text-gray-600">Ask questions like "What if cars could fly?" or "What if we could talk to animals?" Have children explore all the possibilities.</p>
                      <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">5-10 minutes</Badge>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Random Word Connection</h4>
                      <p className="text-sm text-gray-600">Pick two unrelated words (like "banana" and "shoe") and challenge your child to create a story, invention, or solution that connects them.</p>
                      <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">15 minutes</Badge>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Upside Down Drawing</h4>
                      <p className="text-sm text-gray-600">Turn a picture upside down and try to draw it. This forces the brain to see shapes and lines differently rather than drawing what we think we know.</p>
                      <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">20 minutes</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Creativity Challenges</h3>
                  <p className="text-sm opacity-90 mb-4">Get our monthly creative challenge delivered to your inbox with age-appropriate prompts and activities for your child.</p>
                  <Button variant="secondary" className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeProblemSolvingSkill;
