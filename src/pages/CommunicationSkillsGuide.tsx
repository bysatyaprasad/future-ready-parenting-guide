
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, MessageSquare, GraduationCap, CheckSquare, ChevronRight, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CommunicationSkillsGuide = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader
        title="Communication Skills"
        subtitle="Helping children develop effective communication skills for success in a digital world"
      />

      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <MessageSquare size={48} className="text-brand-blue" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Communication Skills Matter</h2>
              <p className="text-gray-600">
                Strong communication skills are essential for success in education, career, and personal relationships. 
                Children who can express themselves clearly and listen effectively have an advantage in every area of life.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Age-Appropriate Communication Development</h2>
          
          <Tabs defaultValue="early" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="early">Ages 3-7</TabsTrigger>
              <TabsTrigger value="middle">Ages 8-12</TabsTrigger>
              <TabsTrigger value="teen">Ages 13-18</TabsTrigger>
            </TabsList>
            
            <TabsContent value="early" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Communication Foundations: Ages 3-7</h3>
                  
                  <div className="grid gap-6">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Key Developmental Milestones</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Expanding vocabulary (from ~900 words at age 3 to ~2,500 at age 7)</li>
                        <li>Learning to take turns in conversation</li>
                        <li>Beginning to understand facial expressions and tone</li>
                        <li>Forming complete sentences and asking questions</li>
                        <li>Starting to understand different perspectives</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-3 text-gray-800">Activities to Develop Communication</h4>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-md mr-3">
                              <GraduationCap className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Storytime Questions</h5>
                              <p className="text-gray-600 text-sm">When reading together, pause to ask open-ended questions like "What do you think will happen next?" This encourages prediction skills and vocabulary development.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-md mr-3">
                              <MessageSquare className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Emotion Charades</h5>
                              <p className="text-gray-600 text-sm">Play a game where you act out different emotions and have your child guess. This helps them recognize emotional cues in communication.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-md mr-3">
                              <CheckSquare className="h-5 w-5 text-orange-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Daily Sharing Circle</h5>
                              <p className="text-gray-600 text-sm">Create a daily ritual where everyone shares something about their day. Keep it short (2-3 minutes per person) and practice listening skills.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Digital Communication for Young Children</h4>
                      <p className="text-gray-700 mb-3">
                        At this age, digital communication should be limited and always supervised. However, you can begin to introduce basic concepts:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Video calls with family members (with your assistance)</li>
                        <li>Taking turns speaking during video conversations</li>
                        <li>Learning that words typed on a screen are a form of communication</li>
                        <li>Understanding that like in-person communication, digital communication should be kind</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="middle" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Expanding Communication Skills: Ages 8-12</h3>
                  
                  <div className="grid gap-6">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Key Developmental Focus</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Developing active listening skills</li>
                        <li>Understanding non-verbal communication cues</li>
                        <li>Adapting communication style to different situations</li>
                        <li>Beginning to understand subtext and inference</li>
                        <li>Growing capacity for empathy in communication</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-3 text-gray-800">Activities to Develop Communication</h4>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-md mr-3">
                              <GraduationCap className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Interview Project</h5>
                              <p className="text-gray-600 text-sm">Have your child prepare questions and interview a family member or friend about their job or a hobby. This builds questioning skills and active listening.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-md mr-3">
                              <MessageSquare className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Perspective-Taking Exercise</h5>
                              <p className="text-gray-600 text-sm">Discuss conflicts from books or shows, analyzing different characters' perspectives. Ask: "Why might they have acted that way? How did they feel?"</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-md mr-3">
                              <CheckSquare className="h-5 w-5 text-orange-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Family Debate Club</h5>
                              <p className="text-gray-600 text-sm">Hold friendly debates on age-appropriate topics. Establish rules like "no interrupting" and "summarize the other person's point before responding."</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Digital Communication Skills</h4>
                      <p className="text-gray-700 mb-3">
                        At this age, children begin to use digital communication more independently, making it crucial to develop healthy habits:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Understanding tone in text messages (what might be misinterpreted)</li>
                        <li>Learning appropriate response times (not everything needs immediate replies)</li>
                        <li>Digital etiquette for different platforms (email vs. texting vs. video calls)</li>
                        <li>Privacy considerations - what information is appropriate to share digitally</li>
                        <li>Beginning to understand digital footprints and permanence of online communication</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="teen" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Advanced Communication Skills: Ages 13-18</h3>
                  
                  <div className="grid gap-6">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Key Developmental Focus</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Developing persuasive communication skills</li>
                        <li>Understanding complex social dynamics in communication</li>
                        <li>Recognizing and navigating conflicts constructively</li>
                        <li>Building professional communication skills</li>
                        <li>Adapting communication style for different audiences</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-3 text-gray-800">Activities to Develop Communication</h4>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-purple-100 p-2 rounded-md mr-3">
                              <GraduationCap className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Mock Job Interview</h5>
                              <p className="text-gray-600 text-sm">Practice professional communication with mock interviews. Provide constructive feedback on body language, clarity, and confidence.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-md mr-3">
                              <MessageSquare className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Conflict Resolution Scenarios</h5>
                              <p className="text-gray-600 text-sm">Create hypothetical conflicts and practice using "I" statements, active listening, and compromise to resolve them constructively.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-md mr-3">
                              <CheckSquare className="h-5 w-5 text-orange-700" />
                            </div>
                            <div>
                              <h5 className="font-medium mb-1">Public Speaking Practice</h5>
                              <p className="text-gray-600 text-sm">Encourage presentations on topics of interest, starting with family as the audience and gradually expanding to larger groups when comfortable.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-medium text-lg mb-2 text-gray-800">Digital Communication Mastery</h4>
                      <p className="text-gray-700 mb-3">
                        Teenagers need to develop sophisticated digital communication skills for both personal and future professional success:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Understanding how to manage digital reputation and personal brand</li>
                        <li>Learning professional email etiquette and formal digital communication</li>
                        <li>Setting healthy boundaries with digital communication (work/life balance)</li>
                        <li>Navigating complex social dynamics on different platforms</li>
                        <li>Critical awareness of manipulation tactics in digital communication</li>
                        <li>Understanding legal implications of certain types of digital communication</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Communication Skills Resources</h2>
          </div>
          
          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-md mr-3">
                    <FileText className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h5 className="font-medium">Active Listening: The Foundation of Connection</h5>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Badge variant="outline" className="mr-2 bg-purple-50 text-purple-700 border-purple-700">Ages 8-12</Badge>
                      <span>10 min read</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Learn the techniques that help children become better listeners and stronger communicators.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read Article
                </Button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-md mr-3">
                    <BookOpen className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h5 className="font-medium">Digital Communication Guidelines</h5>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Badge variant="outline" className="mr-2 bg-purple-50 text-purple-700 border-purple-700">Ages 13-18</Badge>
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Essential rules and boundaries for teens navigating social media and digital interactions.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Read Guide
                </Button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-2 rounded-md mr-3">
                    <CheckSquare className="h-5 w-5 text-orange-700" />
                  </div>
                  <div>
                    <h5 className="font-medium">Communication Milestones Checklist</h5>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Badge variant="outline" className="mr-2 bg-purple-50 text-purple-700 border-purple-700">All Ages</Badge>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Track your child's communication development with this age-appropriate checklist.</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Checklist
                </Button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-md mr-3">
                    <GraduationCap className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h5 className="font-medium">Family Communication Exercises</h5>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Badge variant="outline" className="mr-2 bg-purple-50 text-purple-700 border-purple-700">All Ages</Badge>
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Weekly activities to strengthen family bonds through better communication.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Activities
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Expert Insights</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <p className="text-gray-600 italic mb-4">
              "Communication skills are not just about speaking well—they're about connecting with others in meaningful ways. For children, developing these skills early creates a foundation for success in education, relationships, and eventually the workplace."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Dr. Emily Chen</p>
                <p className="text-sm text-gray-500">Child Development Specialist</p>
              </div>
            </div>
          </div>
          
          <Button asChild variant="default" className="bg-brand-blue hover:bg-blue-700">
            <Link to="/resources">
              Browse Communication Resources
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-4">
            Download this complete guide for offline reference
          </p>
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50">
            <Download className="mr-2 h-4 w-4" />
            Download Communication Skills Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationSkillsGuide;
