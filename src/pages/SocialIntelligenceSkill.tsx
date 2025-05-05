
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  HandHeart, 
  Brain, 
  Lightbulb, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SocialIntelligenceSkill = () => {
  return (
    <>
      <PageHeader 
        title="Social Intelligence Skill Guide" 
        description="Help your child develop empathy, communication abilities, and relationship skills for personal and professional success."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <HandHeart className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Social Intelligence</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to navigate social situations effectively, build positive relationships, understand others' feelings and perspectives, and collaborate successfully in diverse groups.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-pink-50 border-pink-200 text-pink-700">
                      Core Life Skill
                    </Badge>
                    <Badge variant="outline" className="bg-pink-50 border-pink-200 text-pink-700">
                      Ages 3+
                    </Badge>
                    <Badge variant="outline" className="bg-pink-50 border-pink-200 text-pink-700">
                      Relationship Builder
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">Social intelligence is the foundation for meaningful relationships, effective collaboration, and emotional well-being. While technical skills are important, research consistently shows that it's social skills that most strongly predict long-term success, happiness, and leadership ability. In our increasingly connected world, the ability to understand others, communicate effectively, and work well in teams is more essential than ever—both for personal fulfillment and professional advancement.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-pink-50 border-pink-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-pink-700 mr-2" />
                          <h4 className="font-semibold text-pink-700">Career Success</h4>
                        </div>
                        <p className="text-sm text-gray-700">85% of job success comes from having well-developed social skills, while only 15% comes from technical knowledge and abilities.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-pink-50 border-pink-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Brain className="h-5 w-5 text-pink-700 mr-2" />
                          <h4 className="font-semibold text-pink-700">Mental Well-being</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children with strong social skills have better mental health outcomes, reporting 60% less anxiety and depression throughout life.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-pink-100 p-2 rounded-full mr-3">
                          <HandHeart className="h-5 w-5 text-pink-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Empathy</h4>
                          <p className="text-sm text-gray-600">Understanding and sharing the feelings of others, seeing situations from different perspectives.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-pink-100 p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5 text-pink-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Communication</h4>
                          <p className="text-sm text-gray-600">Expressing thoughts and feelings clearly and listening actively to others.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-pink-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-pink-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Social Awareness</h4>
                          <p className="text-sm text-gray-600">Reading social cues, understanding group dynamics, and adapting to different social situations.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-pink-100 p-2 rounded-full mr-3">
                          <Lightbulb className="h-5 w-5 text-pink-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Conflict Resolution</h4>
                          <p className="text-sm text-gray-600">Managing disagreements constructively and finding win-win solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Tabs defaultValue="ages3-6" className="w-full">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold mb-4">Development by Age</h3>
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="ages3-6">Ages 3-6</TabsTrigger>
                      <TabsTrigger value="ages7-11">Ages 7-11</TabsTrigger>
                      <TabsTrigger value="ages12-16">Ages 12-16</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages3-6" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-pink-100 text-pink-700 hover:bg-pink-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building basic social awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing basic emotions in themselves and others</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Learning to take turns and share</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to understand simple social rules and expectations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing language to express feelings</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Emotion Face Cards</h5>
                        <p className="text-sm text-gray-600 mb-2">Create or purchase cards showing different facial expressions. Play games identifying emotions and discussing when people might feel that way.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10-15 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Emotion cards (homemade or purchased)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Story Time with Feelings Focus</h5>
                        <p className="text-sm text-gray-600 mb-2">When reading stories, pause to discuss how characters might be feeling and why. Ask your child what they might do in the same situation.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Children's books with clear emotional themes</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Puppet Play</h5>
                        <p className="text-sm text-gray-600 mb-2">Use puppets or stuffed animals to act out common social scenarios (sharing toys, saying sorry, asking to join in play) and practice appropriate responses.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Puppets or stuffed animals</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Young children learn social skills primarily through observation and guided practice. Model the behaviors you want to see—showing empathy, using kind words, and managing your own emotions. When conflicts arise, use them as teaching moments rather than just stepping in to solve problems.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages7-11" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-pink-100 text-pink-700 hover:bg-pink-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building friendship skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding more complex emotions (pride, disappointment, jealousy)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Forming and maintaining friendships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to handle peer conflicts independently</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing the effect of their words and actions on others</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Working cooperatively in groups</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Friendship Recipe</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a visual "recipe" for being a good friend, listing ingredients (kindness, listening, honesty) and steps for friendship success.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Paper, art supplies</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Perspective-Taking Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Discuss different perspectives using scenarios. Example: "Rahul and Priya both want the last cookie. How might each of them feel? What are different ways they could solve this problem?"</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Scenario cards (homemade)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Cooperative Games</h5>
                        <p className="text-sm text-gray-600 mb-2">Play games that require teamwork rather than competition. Focus on communication and working together toward a common goal.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Cooperative board games or team challenges</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, children become more aware of social hierarchies and begin comparing themselves to peers. Help them understand that friendship challenges are normal and provide guidance for navigating difficult social situations without taking over. Create space for them to discuss social concerns without judgment.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages12-16" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-pink-100 text-pink-700 hover:bg-pink-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing complex social skills</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding subtle social cues and nonverbal communication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Navigating more complex friendship dynamics and group situations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing deeper empathy for different life experiences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Using sophisticated conflict resolution strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding the impacts of digital communication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Respecting differences and showing inclusivity</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Communication Role-Play</h5>
                        <p className="text-sm text-gray-600 mb-2">Practice different communication scenarios through role-play, focusing on assertive (not passive or aggressive) communication styles for difficult situations.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Scenario cards covering common teen social challenges</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Communication Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Analyze sample text messages or social media posts to identify how tone and intent can be misinterpreted. Discuss strategies for clear digital communication.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Sample messages (created examples, not real personal messages)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Community Service Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Participate in volunteer work that involves direct interaction with diverse groups of people to build empathy and understanding of different perspectives.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Varies (typically 2-3 hours per session)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Research local volunteer opportunities appropriate for teens</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teenagers are developing their social identities and may be particularly sensitive to peer acceptance. Respect their growing independence while remaining available for guidance. Be a sounding board without immediately trying to solve their problems. Share your own social experiences and challenges when appropriate to normalize the ups and downs of relationships.</p>
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
                    <BookOpen className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Social Skills Development Guide</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive roadmap for nurturing social intelligence at every age.</p>
                      <Link to="/resources" className="text-sm text-pink-600 flex items-center hover:text-pink-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Conversation Starters Pack</h4>
                      <p className="text-sm text-gray-600 mb-2">Printable cards with age-appropriate questions to build communication skills.</p>
                      <Button variant="outline" size="sm" className="text-pink-600 border-pink-600 hover:bg-pink-50">
                        <Download className="h-3 w-3 mr-1" /> Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Books & Activities</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-yellow-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"My Feelings Friend"</h4>
                        <p className="text-sm text-gray-600">Picture book about emotions (Ages 3-7)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"The Friendship Maze"</h4>
                        <p className="text-sm text-gray-600">Guide for navigating social challenges (Ages 8-12)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">KidSmart Social Skills Program</h4>
                        <p className="text-sm text-gray-600">Interactive online lessons for children</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Social Skills Group Workshop</h3>
                  <p className="text-sm opacity-90 mb-4">Our online workshops help children practice social skills in a supportive environment through games and activities.</p>
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

export default SocialIntelligenceSkill;
