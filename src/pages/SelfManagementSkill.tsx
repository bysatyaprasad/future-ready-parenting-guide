
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  CalendarCheck, 
  Target, 
  Brain, 
  CheckCircle,
  BookOpen, 
  Download, 
  ArrowRight,
  TrendingUp,
  ListChecks,
  ClipboardList,
  Home
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SelfManagementSkill = () => {
  return (
    <>
      <PageHeader 
        title="Self-Management Skill Guide" 
        description="Help your child develop time management, organization, and self-regulation skills for academic and life success."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Self-Management</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to manage time, organize tasks, set and achieve goals, and regulate emotions and behaviors to maximize productivity and well-being.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700">
                      Core Life Skill
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700">
                      Ages 6+
                    </Badge>
                    <Badge variant="outline" className="bg-indigo-50 border-indigo-200 text-indigo-700">
                      Success Foundation
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Self-management is essential for children to succeed in both academic and personal pursuits. In today's fast-paced world filled with distractions, the ability to organize tasks, manage time effectively, and maintain focus is increasingly valuable. Children who develop strong self-management skills tend to experience less stress, perform better academically, and develop greater independence. These skills form the foundation for success in higher education, careers, and adult responsibilities.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-indigo-50 border-indigo-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-indigo-700 mr-2" />
                          <h4 className="font-semibold text-indigo-700">Academic Success</h4>
                        </div>
                        <p className="text-sm text-gray-700">Studies show that self-management skills are better predictors of academic achievement than IQ. Children with these skills complete homework on time, prepare for tests effectively, and manage long-term projects successfully.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-indigo-50 border-indigo-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-indigo-700 mr-2" />
                          <h4 className="font-semibold text-indigo-700">Future Readiness</h4>
                        </div>
                        <p className="text-sm text-gray-700">Employers consistently rank self-management among the most desirable skills in new hires. Children who master this skill early develop habits that translate directly to workplace success.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <Clock className="h-5 w-5 text-indigo-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Time Management</h4>
                          <p className="text-sm text-gray-600">Understanding how to allocate time appropriately, prioritize tasks, and avoid procrastination.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <ListChecks className="h-5 w-5 text-indigo-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Organization</h4>
                          <p className="text-sm text-gray-600">Keeping physical and digital spaces orderly, tracking assignments and commitments, and developing systems to manage information.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <Target className="h-5 w-5 text-indigo-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Goal Setting</h4>
                          <p className="text-sm text-gray-600">Creating clear, achievable goals and breaking them down into manageable steps with timelines.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-indigo-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Self-Regulation</h4>
                          <p className="text-sm text-gray-600">Managing emotions and behavior, maintaining focus, and overcoming distractions to stay on task.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages6-9" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages6-9">Ages 6-9</TabsTrigger>
                      <TabsTrigger value="ages10-13">Ages 10-13</TabsTrigger>
                      <TabsTrigger value="ages14-18">Ages 14-18</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages6-9" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic organizational habits</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Following simple daily routines with reminders</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Organizing personal belongings in designated places</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Completing simple tasks with minimal supervision</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding the concept of time (hours, minutes, days of week)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Visual Schedule Board</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a visual daily routine chart with pictures showing morning routines, after-school activities, and bedtime routines. Use movable pieces to track completion.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes to create, then use daily</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Poster board, markers, printed pictures, velcro dots</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Timed Clean-Up Games</h5>
                        <p className="text-sm text-gray-600 mb-2">Use a timer to make cleaning up toys or completing simple tasks fun and efficient. Challenge your child to beat their previous times.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>5-10 minutes per session</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Timer or stopwatch, storage bins labeled with pictures</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Simple Responsibility Chart</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a weekly chart with 2-3 simple responsibilities. Use stickers or stamps to mark completed tasks.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20 minutes to create, 5 minutes daily to update</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Chart paper, colorful markers, stickers</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">For this age group, keep expectations simple and provide lots of positive reinforcement. Children are just beginning to develop self-management skills, so be patient and celebrate small wins. Visual cues work much better than verbal instructions at this stage.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages10-13" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building independence and systems</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Managing homework assignments with a planner/calendar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Breaking larger projects into manageable steps</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating and following daily/weekly schedules</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Setting and tracking progress toward simple goals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Managing personal belongings and school materials</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Personal Planner System</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child set up and use a planner (paper or digital) to track homework assignments, activities, and important dates. Teach them to check it daily.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes initial setup, then 5-10 minutes daily</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper planner or digital app, colored pens</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Goal Setting Worksheet</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a simple goal-setting template with your child. Teach them to set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for school projects or personal interests.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45 minutes to create and set initial goals, then weekly check-ins</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Goal worksheet template, calendar for tracking</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Study Space Makeover</h5>
                        <p className="text-sm text-gray-600 mb-2">Work with your child to design and organize an effective study space. Teach them organizational systems for keeping track of papers, supplies, and digital files.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours for setup, then 10 minutes daily maintenance</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Storage containers, file folders, labels, desk organizers</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is a critical age for developing good habits. Provide structure while gradually transferring responsibility to your child. Focus on helping them create systems that work for their learning style. Many children at this age still need reminders, but aim to make them less frequent over time.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages14-18" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing complete self-management</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Managing multiple commitments and deadlines independently</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating effective study plans for exams and major projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Setting and achieving long-term goals with minimal supervision</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Balancing academics, extracurriculars, social life, and rest</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using technology tools effectively for organization and productivity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Self-monitoring progress and adjusting strategies as needed</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Productivity System</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your teen set up a comprehensive digital organization system using tools like Google Calendar, task management apps, and note-taking platforms. Focus on creating a system they can maintain independently.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>2-3 hours initial setup, then ongoing use</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Smartphone/computer, productivity apps</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Project Management Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">For a meaningful project (school, personal or community service), have your teen create a complete project plan with milestones, resources needed, and potential obstacles. Support them in tracking progress and adjusting as needed.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Project duration varies (typically 1-3 months)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Project management template or app</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Weekly Planning Session</h5>
                        <p className="text-sm text-gray-600 mb-2">Teach your teen to conduct a weekly planning session where they review upcoming commitments, set priorities, and schedule their time accordingly. Gradually reduce your involvement as they master this habit.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes weekly</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Calendar, planner or digital equivalent</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Your role is now primarily as a coach rather than a manager. Ask thoughtful questions to help your teen reflect on their systems and strategies. Allow natural consequences for organizational lapses while providing support when asked. These years are critical for establishing self-management habits that will serve them in college and beyond.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="mr-4">
                  <Link to="/skills">
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                    Back to All Skills
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/resources">
                    Explore Related Resources
                  </Link>
                </Button>
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
                    <BookOpen className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Self-Management Guide for Parents</h4>
                      <p className="text-sm text-gray-600 mb-2">Complete strategies to help children develop independence and organization.</p>
                      <Link to="/resources" className="text-sm text-indigo-600 flex items-center hover:text-indigo-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Goal Setting Templates</h4>
                      <p className="text-sm text-gray-600 mb-2">Age-appropriate templates to help children plan and track goals.</p>
                      <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                        <Download className="h-3 w-3 mr-1" /> Download Templates
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Books & Apps</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"Smart but Scattered"</h4>
                        <p className="text-sm text-gray-600">Practical strategies for improving executive function skills</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Todoist</h4>
                        <p className="text-sm text-gray-600">User-friendly task management app with family sharing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <CalendarCheck className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Google Calendar</h4>
                        <p className="text-sm text-gray-600">Shared calendar system for family scheduling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Organization Workshop</h3>
                  <p className="text-sm opacity-90 mb-4">Join our virtual workshop where parents and children learn practical organizational strategies for school success.</p>
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

export default SelfManagementSkill;
