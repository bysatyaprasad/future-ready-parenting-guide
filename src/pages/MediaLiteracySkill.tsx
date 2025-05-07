
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Eye, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  TrendingUp,
  MessageSquare,
  Search,
  Brain,
  Home
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MediaLiteracySkill = () => {
  return (
    <>
      <PageHeader 
        title="Media Literacy Skill Guide" 
        description="Help your child develop critical thinking skills to navigate media, identify credible information, and become responsible digital citizens."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Media Literacy</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to access, analyze, evaluate, and create media in various forms, while understanding the role and influence of media in society.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Digital Age Skill
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Ages 8+
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 border-purple-200 text-purple-700">
                      Critical Thinking
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">In today's digital world, children are surrounded by media messages from an early age. Media literacy empowers them to think critically about the information they consume, distinguish fact from fiction, recognize bias, and make informed decisions. Beyond just protecting children from harmful content, these skills help them become thoughtful creators and consumers of media, preparing them to navigate an increasingly complex information landscape throughout their lives.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-purple-700 mr-2" />
                          <h4 className="font-semibold text-purple-700">Information Protection</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children with strong media literacy skills are 60% less likely to spread misinformation online and better equipped to protect themselves from scams and manipulation.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-purple-700 mr-2" />
                          <h4 className="font-semibold text-purple-700">Digital Citizenship</h4>
                        </div>
                        <p className="text-sm text-gray-700">Media literate children develop stronger critical thinking skills and become more responsible, ethical participants in digital communities.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Eye className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Message Analysis</h4>
                          <p className="text-sm text-gray-600">Understanding how media messages are constructed and identifying their purpose.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Search className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Source Evaluation</h4>
                          <p className="text-sm text-gray-600">Assessing the credibility and reliability of information sources.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <Brain className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Critical Questioning</h4>
                          <p className="text-sm text-gray-600">Asking key questions about media content, including who created it, why, and what perspectives might be missing.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <MessageSquare className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Creation & Communication</h4>
                          <p className="text-sm text-gray-600">Using media tools effectively and responsibly to create and share content.</p>
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
                      <TabsTrigger value="ages14-18">Ages 14-18</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="ages8-10" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building media awareness</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Distinguishing between fact and fiction in media content</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing advertisements and their purpose</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding that media messages are created by people with specific goals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating simple media messages (photos with captions, short videos)</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Advertisement Detective</h5>
                        <p className="text-sm text-gray-600 mb-2">Look through magazines or watch TV with your child and identify advertisements. Discuss how ads try to convince people to buy products and what techniques they use (bright colors, catchy music, famous people).</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Magazines, TV access, or online videos</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Fact vs. Fiction Game</h5>
                        <p className="text-sm text-gray-600 mb-2">Create a game where you present statements or images to your child and they determine if they're real or made up. Discuss clues that help them decide.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>15-20 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Prepared statements/images (mix of factual and fictional)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Photo Story Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create a simple story using 5-7 photos with captions. Discuss how changing the order or captions can change the story's meaning.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Camera/smartphone, paper for captions or digital tool</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on building awareness that media is created by people with specific purposes. Use simple, concrete examples and make discussions fun rather than scary. Watch media together whenever possible and ask open-ended questions like "What do you notice about this?" or "Why do you think they made this show/ad?"</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages11-13" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building critical analysis</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying different types of media and their purposes (inform, entertain, persuade)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing bias and different perspectives in news stories</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding how images can be altered and context can change meaning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating more complex media content with clear messages</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to evaluate source credibility with guidance</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">News Comparison</h5>
                        <p className="text-sm text-gray-600 mb-2">Look at how the same news story is reported by different sources. Identify differences in headlines, images used, facts included or omitted, and language choices. Discuss why these differences might exist.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to different news sources covering the same story</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Reality Check Challenge</h5>
                        <p className="text-sm text-gray-600 mb-2">Show your child before and after photos of edited media images. Discuss how and why images are altered and how this affects viewers' perceptions and self-image.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Before/after examples of photo editing (easily found online)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Mini-Documentary Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child create a short video or presentation about a topic they're interested in. Focus on presenting balanced information and citing sources.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Several sessions over 1-2 weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Camera/smartphone, simple editing tools, research materials</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">This is a critical age as children begin spending more time online independently. Focus on developing analytical skills they can apply across platforms. When discussing potentially misleading content, avoid simply telling them what to think—instead, give them tools to evaluate content for themselves. The ESCAPE method is useful: Evidence, Source, Context, Audience, Purpose, Execution.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages14-18" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-purple-100 text-purple-700 hover:bg-purple-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing media expertise</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Independently verifying information using multiple credible sources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding how media shapes culture, politics, and social values</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Identifying manipulation techniques, including in sophisticated formats</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Creating media content with clear purpose and audience awareness</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding personal data tracking and digital privacy implications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Analyzing how algorithms shape information exposure</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Misinformation Analysis Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Have your teen select a viral story or claim and trace its origins, fact-check it using credible sources, and document how it spread. Create a report on their findings, including techniques used to make false information seem credible.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Research spans 1-2 weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Internet access, fact-checking resources</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Digital Footprint Audit</h5>
                        <p className="text-sm text-gray-600 mb-2">Work with your teen to analyze their digital presence. Review privacy settings on their social media accounts, discuss data collection practices, and explore how their online activity shapes what content algorithms show them.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to teen's social media accounts and privacy settings</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Media Creation with a Purpose</h5>
                        <p className="text-sm text-gray-600 mb-2">Challenge your teen to create media content (video, podcast, blog post) about a social issue they care about. Focus on researching thoroughly, presenting balanced information, and crafting effective messages for their target audience.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Several sessions over 2-3 weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Recording equipment, editing software, research resources</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this stage, your role shifts to being a discussion partner rather than a guide. Ask thought-provoking questions and be willing to engage in debates about media topics. This age group benefits from exploring the deeper systems behind media creation and distribution, including economic models, political influences, and technological factors like algorithms. Encourage critical thinking while respecting their growing independence as media consumers and creators.</p>
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
                    <BookOpen className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Media Literacy Guide for Parents</h4>
                      <p className="text-sm text-gray-600 mb-2">Step-by-step strategies for teaching children to navigate digital information responsibly.</p>
                      <Link to="/resources" className="text-sm text-purple-600 flex items-center hover:text-purple-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Search className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Fact-Checking Toolkit</h4>
                      <p className="text-sm text-gray-600 mb-2">Age-appropriate resources for verifying information and identifying reliable sources.</p>
                      <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                        <Download className="h-3 w-3 mr-1" /> Download Toolkit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">Recommended Sites & Apps</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <Search className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Common Sense Media</h4>
                        <p className="text-sm text-gray-600">Reviews and guidance for age-appropriate media</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Media Smarts</h4>
                        <p className="text-sm text-gray-600">Free digital literacy activities and games</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-2 mr-3">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Newsela</h4>
                        <p className="text-sm text-gray-600">Current events at adjustable reading levels</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Digital Citizenship Workshop</h3>
                  <p className="text-sm opacity-90 mb-4">Join our interactive online sessions where children learn to navigate the digital world safely and responsibly.</p>
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

export default MediaLiteracySkill;
