
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Users, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Download, 
  ArrowRight,
  Target,
  TrendingUp,
  Heart,
  Landmark,
  Languages,
  Home
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const GlobalAwarenessSkill = () => {
  return (
    <>
      <PageHeader 
        title="Global Awareness Skill Guide" 
        description="Help your child develop cultural understanding, appreciate diversity, and become a thoughtful global citizen prepared for an interconnected world."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 mr-3" />
                    <h2 className="text-2xl font-bold">Global Awareness</h2>
                  </div>
                  <p className="text-lg opacity-90">The ability to understand diverse cultures, appreciate global interconnectedness, and engage thoughtfully with worldwide issues and perspectives.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="bg-teal-50 border-teal-200 text-teal-700">
                      Future-Ready Skill
                    </Badge>
                    <Badge variant="outline" className="bg-teal-50 border-teal-200 text-teal-700">
                      Ages 7+
                    </Badge>
                    <Badge variant="outline" className="bg-teal-50 border-teal-200 text-teal-700">
                      Cultural Intelligence
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Why This Skill Matters</h3>
                  <p className="text-gray-600 mb-6">In our increasingly connected world, children who develop global awareness gain a significant advantage both personally and professionally. This skill helps them appreciate cultural differences, understand complex global challenges, and develop empathy for people with different life experiences. Global awareness prepares children to collaborate effectively in diverse environments, think critically about worldwide issues, and adapt to our rapidly changing, interconnected society. By nurturing this skill, we help our children become informed, compassionate global citizens ready to thrive in an international context.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <Card className="bg-teal-50 border-teal-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <Target className="h-5 w-5 text-teal-700 mr-2" />
                          <h4 className="font-semibold text-teal-700">Future Readiness</h4>
                        </div>
                        <p className="text-sm text-gray-700">92% of employers rate cross-cultural competence as essential for career success in the global economy of the future.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-teal-50 border-teal-100">
                      <CardContent className="pt-6">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-teal-700 mr-2" />
                          <h4 className="font-semibold text-teal-700">Social Development</h4>
                        </div>
                        <p className="text-sm text-gray-700">Children with strong global awareness show greater empathy, reduced prejudice, and more sophisticated problem-solving skills when addressing complex issues.</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Components</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-teal-100 p-2 rounded-full mr-3">
                          <Users className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Cultural Understanding</h4>
                          <p className="text-sm text-gray-600">Appreciating diverse cultures, traditions, and perspectives from around the world.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-teal-100 p-2 rounded-full mr-3">
                          <Globe className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Global Interconnectedness</h4>
                          <p className="text-sm text-gray-600">Understanding how events, economies, and environmental issues around the world affect one another.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-teal-100 p-2 rounded-full mr-3">
                          <Heart className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Empathy & Perspective-Taking</h4>
                          <p className="text-sm text-gray-600">Considering different viewpoints and developing compassion for others' experiences.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-teal-100 p-2 rounded-full mr-3">
                          <Landmark className="h-5 w-5 text-teal-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">Responsible Action</h4>
                          <p className="text-sm text-gray-600">Taking informed steps to contribute positively to global issues on a local or larger scale.</p>
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
                      <Badge className="mr-3 bg-teal-100 text-teal-700 hover:bg-teal-200">Foundation Stage</Badge>
                      <span className="text-gray-500 text-sm">Building global curiosity</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Locating major countries, continents, and oceans on a map or globe</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing that people around the world have both similarities and differences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding basic cultural elements like traditional food, clothing, and celebrations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Showing curiosity about other places and how people live</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">World Map Exploration</h5>
                        <p className="text-sm text-gray-600 mb-2">Place a world map or globe in your home and regularly explore it together. Mark places your family has connections to, where foods you eat come from, or locations of stories you read.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>10-15 minutes, 2-3 times per week</span>
                          <span className="mx-2">•</span>
                          <span>Materials: World map/globe, stickers or pins</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Cultural Food Adventure</h5>
                        <p className="text-sm text-gray-600 mb-2">Choose a country each month to explore through its cuisine. Cook a simple traditional dish together, learn about its origins, and discuss how the ingredients reflect the country's geography and history.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours per cultural cooking session</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Recipe ingredients, information about the dish's origin</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Stories From Around the World</h5>
                        <p className="text-sm text-gray-600 mb-2">Read children's books featuring diverse characters and settings from different countries. Discuss similarities and differences between the characters' lives and your child's experiences.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>20-30 minutes, several times per week</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Diverse children's books (available at libraries)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">At this age, focus on building curiosity and positive interest in the world. Keep discussions simple and concrete, using visual aids when possible. Emphasize commonalities across cultures (like how all children play and learn) while celebrating unique traditions and practices. Avoid stereotypes by exposing children to diverse examples within each culture.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages10-13" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-teal-100 text-teal-700 hover:bg-teal-200">Development Stage</Badge>
                      <span className="text-gray-500 text-sm">Building global understanding</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding how geography influences culture and way of life</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing that products we use come from all over the world</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Learning about global challenges like environmental issues or access to education</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Beginning to understand different perspectives on global events</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Showing interest in learning words or phrases from other languages</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Product Journey Map</h5>
                        <p className="text-sm text-gray-600 mb-2">Choose everyday items (clothes, electronics, food) and trace where they come from. Create a map showing the journey from raw materials to finished products, discussing the people involved and environmental impacts.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>45-60 minutes per product</span>
                          <span className="mx-2">•</span>
                          <span>Materials: World map, markers, information about product origins</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Global Issues Research Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Help your child research a global issue they're interested in (water access, endangered animals, etc.). Create a presentation or poster that explains the issue, how it affects people around the world, and possible solutions.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Multiple sessions over 1-2 weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Research resources, presentation materials</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Global Music & Arts Exploration</h5>
                        <p className="text-sm text-gray-600 mb-2">Explore music, dance, or visual arts from different cultures. Learn about the history and significance of these art forms, then try creating something inspired by them.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>1-2 hours per cultural exploration</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Music recordings, art materials, instructional videos</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Children at this age are ready to explore more complex global connections and issues. Encourage critical thinking by asking questions like "Why might people in different parts of the world have different opinions about this?" When discussing global challenges, balance honesty about problems with hope and examples of positive action. This helps children feel empowered rather than overwhelmed.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="ages14-18" className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="mr-3 bg-teal-100 text-teal-700 hover:bg-teal-200">Advanced Stage</Badge>
                      <span className="text-gray-500 text-sm">Developing active global citizenship</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Analyzing complex global issues from multiple perspectives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Understanding historical contexts that shape current global relations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Recognizing media bias in international news coverage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Developing informed opinions on global issues based on reliable information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Taking action on global issues through advocacy, volunteering, or thoughtful consumption</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Communicating effectively across cultural differences</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Recommended Activities</h4>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Global News Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Have your teen follow a global event through news sources from different countries and perspectives. Discuss how coverage differs and what factors might influence these differences.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>30-45 minutes weekly for several weeks</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Access to international news sources (most available online)</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Global Action Project</h5>
                        <p className="text-sm text-gray-600 mb-2">Support your teen in identifying a global issue they care about and taking meaningful action. This could include raising awareness, fundraising, volunteering virtually with an international organization, or changing personal habits that impact the issue.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Ongoing project over several months</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Varies based on project</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h5 className="font-semibold mb-2">Cultural Exchange or Language Learning</h5>
                        <p className="text-sm text-gray-600 mb-2">Encourage your teen to learn a new language or participate in virtual cultural exchanges with peers from other countries through schools, community organizations, or online platforms designed for cultural exchange.</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Regular ongoing commitment (varies by program)</span>
                          <span className="mx-2">•</span>
                          <span>Materials: Language learning resources or access to exchange programs</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                      <h5 className="font-semibold mb-2">Parent Note:</h5>
                      <p className="text-sm">Teens are ready for nuanced discussions about complex global issues. Encourage them to form their own opinions while teaching them to evaluate information sources critically. This age group benefits from connecting global awareness to their future goals and interests—whether that's through travel opportunities, career exploration in global fields, or understanding how global trends may affect their future. Support their initiatives to take action on issues they care about, even if they start small.</p>
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
                    <BookOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Global Citizen's Guide for Families</h4>
                      <p className="text-sm text-gray-600 mb-2">Practical ideas for nurturing global awareness in everyday family life.</p>
                      <Link to="/resources" className="text-sm text-teal-600 flex items-center hover:text-teal-800">
                        Read full article <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Cultural Activities Collection</h4>
                      <p className="text-sm text-gray-600 mb-2">Age-appropriate activities exploring cultures from around the world.</p>
                      <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                        <Download className="h-3 w-3 mr-1" /> Download Collection
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
                      <div className="bg-teal-100 rounded-lg p-2 mr-3">
                        <BookOpen className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">"Children Just Like Me"</h4>
                        <p className="text-sm text-gray-600">Book series showing daily life of children worldwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">National Geographic Kids</h4>
                        <p className="text-sm text-gray-600">Articles and videos about global cultures and issues</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3">
                        <Languages className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Duolingo</h4>
                        <p className="text-sm text-gray-600">Free, game-based language learning platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Virtual Cultural Exchange</h3>
                  <p className="text-sm opacity-90 mb-4">Join our monthly online sessions where children connect with peers from different countries to learn about each other's daily lives and cultures.</p>
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

export default GlobalAwarenessSkill;
