
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  BookOpen, 
  Brain, 
  CheckCircle, 
  Clock, 
  Download, 
  ArrowRight,
  Target,
  TrendingUp,
  Sparkles,
  BookMarked,
  RotateCw,
  Home
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AdaptiveLearningSkill = () => {
  return (
    <>
      <PageHeader 
        title="Adaptive Learning Skill Guide" 
        description="Help your child develop the ability to learn continuously, adapt to new information, and thrive in an ever-changing world."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Adaptive Learning</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to learn effectively, adapt to new information, develop metacognitive strategies, and continuously grow in understanding and skills.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Future-Ready Skill
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Ages 7+
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                      Lifelong Development
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">In today's rapidly changing world, the ability to learn continuously and adapt to new information is perhaps the most valuable skill we can help our children develop. Adaptive learning goes beyond memorizing facts—it's about understanding how to learn effectively, developing strategies for acquiring new knowledge, and being able to adjust one's thinking when presented with new evidence. Children who master this skill become lifelong learners who can thrive in any environment and adapt to technologies, careers, and challenges that don't even exist yet.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Future Adaptability</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children today will work in jobs that don't yet exist using technologies not yet invented. Adaptive learning enables them to continuously evolve their skills throughout life.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-blue-700 mr-2" />
                          <h4 className="font-semibold text-blue-700">Academic Success</h4>
                        </div>
                        <p className="text-sm text-gray-700">Students with strong adaptive learning skills show 40% better academic performance across subjects and are better equipped to handle increasingly complex concepts.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Metacognition</h4>
                          <p className="text-sm text-gray-600">Understanding how one learns best and being able to monitor and direct one's own learning process.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Sparkles className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Learning Strategies</h4>
                          <p className="text-sm text-gray-600">Developing effective techniques for acquiring, processing, and retaining new information.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <RotateCw className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Adaptability</h4>
                          <p className="text-sm text-gray-600">Being willing to revise understanding when presented with new information and apply knowledge to new contexts.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <BookMarked className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Knowledge Integration</h4>
                          <p className="text-sm text-gray-600">Connecting new information with existing knowledge and across different subject areas.</p>
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
                      <TabsTrigger value="ages10-13">Ages 10-13</TabsTrigger>
                      <TabsTrigger value="ages14-18">Ages 14-18</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages7-9" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building learning awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing when they understand something vs. when they're confused</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying basic learning preferences (visual, auditory, hands-on)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Asking questions when they don't understand</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Learning from mistakes with guidance</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Learning Style Exploration</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child explore different ways to learn the same information (reading about it, watching videos, hands-on activities) and discuss which methods helped them understand best.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes per exploration</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Books, videos, hands-on activity supplies</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Thinking Aloud Practice</h5>
                        <p className="text-sm text-gray-600 mb-2">Model "thinking aloud" when you're solving problems or learning something new. Then encourage your child to verbalize their own thinking process while tackling a challenge.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10-15 minutes, several times per week</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Age-appropriate puzzles or problems</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Knowledge Connection Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Play a game where you name a topic, and your child tries to connect it to something they already know. Take turns making these connections more creative and complex.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: None needed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, children are just beginning to understand how thinking and learning work. Focus on making their learning processes visible through discussion and reflection. Celebrate curiosity and questions rather than just correct answers. Use phrases like "I notice you learned that by..." to help them become aware of their learning strategies.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages10-13" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building learning strategies</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using basic learning strategies intentionally (note-taking, summarizing, visualization)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Planning approaches to learning tasks before beginning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing when a strategy isn't working and trying alternatives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Connecting new information with previously learned concepts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to evaluate the reliability of information sources</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Learning Strategy Toolkit</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a personal "toolkit" of learning strategies with your child. Try different methods like mind mapping, flashcards, teaching others, and visual organizers, then discuss which works best for different types of material.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Initial creation: 1 hour, then ongoing use</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Index cards, notebook, colored pens, digital tools</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Study Experiment</h5>
                        <p className="text-sm text-gray-600 mb-2">For an upcoming test or assignment, have your child try two different study methods and track which produces better results. Discuss why one method might have been more effective.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Multiple study sessions over 1-2 weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Study materials, tracking sheet</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Information Detective</h5>
                        <p className="text-sm text-gray-600 mb-2">Present your child with different sources of information on the same topic (some reliable, some less so). Guide them in evaluating the credibility of each source using criteria like author expertise, evidence provided, and potential bias.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Selected articles, videos, or websites on a common topic</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is an ideal age to help children develop a toolbox of learning strategies. When faced with challenging material, resist the urge to simplify it too much for them. Instead, guide them in applying different strategies to tackle the difficulty. Use questions like, "How could you break this down into smaller parts?" or "What strategy might help you understand this better?"</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages14-18" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing learning independence</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Self-directing learning based on personal interests and goals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using advanced learning strategies flexibly and appropriately</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Critically evaluating information from multiple perspectives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Transferring knowledge and skills across different domains</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Adapting to different learning environments and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Reflecting on personal learning process and continually refining approaches</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Self-Directed Learning Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Encourage your teen to identify something they want to learn that isn't taught in school. Help them create a learning plan including resources, milestones, and ways to demonstrate what they've learned.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Project spans several weeks or months</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Project planning template, relevant learning resources</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Interdisciplinary Connections Journal</h5>
                        <p className="text-sm text-gray-600 mb-2">Have your teen keep a journal where they regularly record connections between different subjects they're studying (how history connects to literature, how math relates to science, etc.).</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes, twice weekly</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Journal or digital document</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Learning From Experts</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your teen identify and reach out to experts in fields that interest them. This could involve email interviews, attending lectures, or finding mentors who can guide more advanced learning.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Varies based on format</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Contact information, prepared questions</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Your role is now primarily as a sounding board and occasional resource provider. Allow teens to take full ownership of their learning process while being available to discuss strategies when they face difficulties. Encourage reflection by asking questions like, "How did you approach that challenge?" or "What would you do differently next time?" Focus on helping them develop confidence in their ability to learn anything they set their minds to.</p>
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
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Learning Strategies Guide</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive guide to effective learning techniques for different subjects and age groups.</p>
                      <Link to="/resources" className="text-sm text-blue-600 flex items-center hover:text-blue-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Brain className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Metacognition Activity Pack</h4>
                      <p className="text-sm text-gray-600 mb-2">Printable activities to help children become more aware of their thinking and learning processes.</p>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        <Download className="h-3 w-3 mr-1" /> Download Pack
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Resources</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"Make It Stick"</h4>
                        <p className="text-sm text-gray-600">Research-based book on effective learning methods</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <Lightbulb className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Khan Academy</h4>
                        <p className="text-sm text-gray-600">Free online learning platform with self-paced courses</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <BookMarked className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Anki</h4>
                        <p className="text-sm text-gray-600">Spaced repetition flashcard system for efficient learning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Learning Workshop</h3>
                  <p className="text-sm opacity-90 mb-4">Join our interactive online workshop to help your child discover their learning style and develop effective study strategies.</p>
                  <Button variant="secondary" className="w-full">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdaptiveLearningSkill;
