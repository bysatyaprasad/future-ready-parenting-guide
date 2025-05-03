
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HighIncomeRoadmap = () => {
  return (
    <>
      <PageHeader
        title="Step-by-Step High-Income Skills Roadmap"
        description="A comprehensive guide to help your child develop valuable skills that lead to financial independence and multiple income streams."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="prose mx-auto max-w-4xl mb-12">
            <h2 className="text-3xl font-bold mb-4">The Six-Phase Framework for Future Financial Success</h2>
            <p className="text-lg mb-6">
              This framework is designed to progressively build your child's skill portfolio from basic foundations to advanced income-generating abilities. Each phase builds upon the previous one, creating a powerful compounding effect over time.
            </p>
          </div>

          <div className="grid gap-10">
            {/* Phase 1 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 1: Foundation Building (Ages 3-7)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop basic financial awareness through play (saving, spending, earning concepts)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Introduce fundamental digital skills (navigating devices, basic understanding of digital safety)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Foster creativity and problem-solving through structured play activities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop basic communication skills through storytelling and social interaction</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Set up a clear piggy bank to visualize money growing</li>
                      <li>Create a simple chore system with small rewards</li>
                      <li>Use kid-friendly financial apps and games</li>
                      <li>Introduce basic coding concepts through visual programming games</li>
                      <li>Practice public speaking through "show and tell" at home</li>
                      <li>Engage in creative thinking exercises and puzzles</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Focus on making learning enjoyable, not performance. These early years are about creating positive associations with these skill areas.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 2: Skill Exploration (Ages 8-11)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Introduce structured skill development in key areas (coding, communication, financial literacy)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Begin exploring personal interests and strengths to identify potential specialization areas</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop basic project planning and completion skills</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Create first simple money management system</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Establish regular savings from allowance (teach % allocation)</li>
                      <li>Introduce block-based coding platforms (Scratch, Code.org)</li>
                      <li>Start simple online research projects on topics of interest</li>
                      <li>Create a YouTube channel (private/family) to develop communication</li>
                      <li>Participate in group activities to develop teamwork</li>
                      <li>Set up first entrepreneurial project (lemonade stand, craft sales)</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Expose your child to many different skills and observe where they show natural interest and aptitude. Don't force specialization yet.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 3: Skill Development (Ages 12-14)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Begin focusing on 2-3 high-potential skill areas based on interests and aptitude</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Understand compound interest and long-term investing concepts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop deeper technical skills in chosen areas</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Create first portfolio pieces demonstrating skills</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Transition from visual to text-based programming (if technical path)</li>
                      <li>Set up first investment account with parental guidance</li>
                      <li>Create content in area of interest (blog, videos, designs, code)</li>
                      <li>Participate in competitions related to skill areas</li>
                      <li>Create a simple personal website/portfolio</li>
                      <li>Learn the basics of a professional tool in their interest area</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Balance structured learning with autonomy. Provide resources but let your child drive their own development in areas of genuine interest.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 4: Value Creation (Ages 15-16)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Transform skills into actual value creation for others</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Understand market needs and how skills meet those needs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop initial personal brand in specialty area</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Learn fundamentals of turning skills into income</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Create first client projects (even if pro bono)</li>
                      <li>Develop a formal portfolio of work</li>
                      <li>Start networking with professionals in field of interest</li>
                      <li>Create first formal business offering</li>
                      <li>Open a youth business bank account</li>
                      <li>Learn basic sales and marketing principles</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Shift from teaching to mentoring. Your role is now to connect your child to opportunities and resources, but let them lead their own projects.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 5 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 5: Income Generation (Ages 16-18)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Establish first consistent income streams using developed skills</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Understand business fundamentals (pricing, service delivery, client management)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop advanced financial management systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Build professional network in chosen field</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Formalize service offerings with clear pricing</li>
                      <li>Develop client acquisition systems</li>
                      <li>Establish investment accounts and regular contribution schedule</li>
                      <li>Create business systems (contracts, invoicing, project management)</li>
                      <li>Develop online presence to showcase expertise</li>
                      <li>Begin mentoring/teaching others as expertise grows</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Transition to business partner or advisor. Your child should now be taking full ownership of their income generation with you as a consultant.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 6 */}
            <Card>
              <CardHeader className="bg-brand-blue text-white">
                <CardTitle className="text-2xl">Phase 6: Financial Independence Strategy (Age 18+)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Core Objectives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop long-term wealth building strategy with multiple income streams</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Create clear path to financial independence with timeline</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Understand advanced investment principles and asset allocation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                        <span>Develop skill leverage strategy (scaling beyond trading time for money)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Implementation Strategies</h3>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Create personal financial independence roadmap</li>
                      <li>Explore scaling strategies (products, team building, automation)</li>
                      <li>Diversify income streams across different business models</li>
                      <li>Establish clear metrics for financial progress</li>
                      <li>Build systems that generate income without constant time input</li>
                      <li>Consider advanced education only if it directly supports goals</li>
                    </ol>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Key Parent Mindset:</h4>
                      <p>Fully transition to peer. Your adult child now leads their financial journey entirely, with you serving as a sounding board when asked.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-brand-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Implementation Principles for Parents</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Critical Success Factors</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Consistency over intensity</strong> - Regular small learning sessions beat occasional cramming</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Interest-driven learning</strong> - Follow your child's natural curiosity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Real-world application</strong> - Connect skills to actual problems that need solving</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Growth mindset modeling</strong> - Show, don't just tell, by learning new skills yourself</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">Common Pitfalls to Avoid</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Forcing specific paths</strong> - Guide but don't dictate their interests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Over-structuring</strong> - Leave room for exploration and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Comparing to others</strong> - Focus on their progress, not external benchmarks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Delaying implementation</strong> - Start today with age-appropriate activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Start with age-appropriate resources for your child's current development stage.
            </p>
            <Button asChild size="lg">
              <Link to="/resources">Browse Our Age-Specific Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighIncomeRoadmap;
