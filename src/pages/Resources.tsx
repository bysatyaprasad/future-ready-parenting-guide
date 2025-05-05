import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ResourcesFilter from '../components/ResourcesFilter';
import ResourceCard from '../components/ResourceCard';
import ArticleContent from '../components/ArticleContent';
import { resources } from '../constants/resourcesData';
import { useNavigate, useLocation } from 'react-router-dom';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Skills');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All Ages');
  const [selectedType, setSelectedType] = useState('All Types');

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'All Skills' || resource.category === selectedCategory;
    const ageGroupMatch = selectedAgeGroup === 'All Ages' || resource.ageGroup === selectedAgeGroup;
    const typeMatch = selectedType === 'All Types' || resource.type === selectedType;
    return categoryMatch && ageGroupMatch && typeMatch;
  });

  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there's an article ID in the URL
    const searchParams = new URLSearchParams(location.search);
    const articleId = searchParams.get('id');
    
    if (articleId) {
      const article = resources.find(r => r.id === parseInt(articleId));
      if (article) {
        setSelectedArticle(article);
      }
    } else {
      setSelectedArticle(null);
    }
  }, [location.search]);

  const handleArticleSelect = (id) => {
    navigate(`/resources?id=${id}`);
  };

  const handleBackToResources = () => {
    navigate('/resources');
  };

  // Add full content to specific resources
  const getArticleWithContent = (article) => {
    if (!article) return null;
    
    const articleContent = {
      ...article,
      content: getResourceContent(article.id)
    };
    
    return articleContent;
  };

  // Return to the resources list view if no article is selected
  if (!selectedArticle) {
    return (
      <div className="container mx-auto py-8 px-4">
        <PageHeader
          title="Resources"
          description="Explore our expert-curated resources to help your child build valuable skills for their future"
        />
        
        <ResourcesFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedAgeGroup={selectedAgeGroup}
          setSelectedAgeGroup={setSelectedAgeGroup}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} onClick={() => handleArticleSelect(resource.id)}>
              <ResourceCard
                title={resource.title}
                description={resource.description}
                type={resource.type}
                readTime={resource.readTime}
                ageGroup={resource.ageGroup}
                category={resource.category}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show the selected article
  return (
    <ArticleContent 
      article={getArticleWithContent(selectedArticle)}
      onBack={handleBackToResources}
    />
  );
};

// Function to get content for specific resource IDs
const getResourceContent = (id) => {
  switch (id) {
    case 1:
      return `
        <h2>Understanding Digital Literacy</h2>
        <p>Digital literacy encompasses the skills and knowledge necessary to effectively navigate, evaluate, and create content using digital technologies. For parents, fostering digital literacy in children means not just teaching them how to use devices, but helping them develop critical thinking skills about the information they encounter online.</p>
        
        <h3>Why Digital Literacy Matters</h3>
        <p>In today's interconnected world, digital literacy has become as essential as traditional literacy. Children who develop strong digital skills early on are better positioned to:</p>
        <ul>
          <li>Safely navigate online environments</li>
          <li>Critically evaluate information sources</li>
          <li>Protect their personal data and privacy</li>
          <li>Take advantage of educational and career opportunities</li>
          <li>Become responsible digital citizens</li>
        </ul>
        
        <h3>Key Components of Digital Literacy</h3>
        <p><strong>Technical Proficiency:</strong> Understanding how to use devices, software, and online platforms effectively.</p>
        <p><strong>Information Literacy:</strong> The ability to find, evaluate, and use information from digital sources critically.</p>
        <p><strong>Media Literacy:</strong> Understanding how digital media works, including recognizing bias, manipulation, and the construction of messages.</p>
        <p><strong>Digital Citizenship:</strong> Knowing how to behave responsibly and safely online, including understanding digital footprints.</p>
        <p><strong>Communication Skills:</strong> Effectively communicating and collaborating in digital environments.</p>
        
        <h3>How Parents Can Foster Digital Literacy</h3>
        <p>Start early with age-appropriate exposure to technology. For young children, this might mean guided use of educational apps. As children grow older, gradually introduce more complex tools and concepts.</p>
        <p>Model good digital habits yourself. Children learn by watching their parents, so demonstrate healthy technology use, critical thinking about online information, and respect for others in digital spaces.</p>
        <p>Engage in co-learning activities. Explore new technologies together and discuss what you find online. This creates opportunities for teaching moments about evaluating information, recognizing advertising, and understanding privacy concerns.</p>
        <p>Encourage critical thinking by asking questions when children encounter information online: "How do we know this is true?" "Who created this content and why?" "What might be missing from this story?"</p>
        
        <h3>Digital Literacy by Age Group</h3>
        <p><strong>Ages 3-5:</strong> Focus on basic device navigation, simple educational apps, and understanding the difference between the digital and physical worlds.</p>
        <p><strong>Ages 6-9:</strong> Introduce basic internet safety, supervised online research skills, and discussions about digital citizenship.</p>
        <p><strong>Ages 10-13:</strong> Develop critical evaluation of online content, understanding of digital footprints, and responsible social media use.</p>
        <p><strong>Ages 14-18:</strong> Advanced information literacy, media creation skills, privacy management, and preparation for digital aspects of higher education and careers.</p>
        
        <h3>Conclusion</h3>
        <p>Digital literacy is not a one-time lesson but an ongoing process of learning and adaptation as technologies evolve. By actively engaging with your children's digital education, you help them develop the skills they need to thrive in an increasingly digital world. Remember that the goal is not to shield children from technology, but to empower them to use it wisely, critically, and responsibly.</p>
      `;
    case 2:
      return `
        <h2>Building Financial Intelligence in Children</h2>
        <p>Financial intelligence is more than just knowing how to count money or balance a checkbook. It encompasses a broad range of skills and knowledge that help individuals make informed decisions about resources and achieve financial well-being. For parents, nurturing financial intelligence in children lays the groundwork for their future financial success and independence.</p>
        
        <h3>The Importance of Early Financial Education</h3>
        <p>Research consistently shows that money habits and attitudes begin forming in early childhood. By age seven, many children have already developed basic concepts about money and value. Starting financial education early helps children:</p>
        <ul>
          <li>Develop healthy money habits and attitudes</li>
          <li>Build confidence in handling financial decisions</li>
          <li>Learn delayed gratification and impulse control</li>
          <li>Understand the connection between work and earning</li>
          <li>Prepare for financial independence in adulthood</li>
        </ul>
        
        <h3>Core Components of Financial Intelligence</h3>
        <p><strong>Money Basics:</strong> Understanding what money is, how it works, and its different forms in today's world (cash, cards, digital payments).</p>
        <p><strong>Earning:</strong> Comprehending how money is earned through work, entrepreneurship, and investments.</p>
        <p><strong>Spending:</strong> Making thoughtful decisions about purchases, understanding needs vs. wants, and comparing value.</p>
        <p><strong>Saving:</strong> Delaying gratification, setting financial goals, and accumulating resources for future needs.</p>
        <p><strong>Sharing:</strong> Developing generosity and understanding how money can be used to help others.</p>
        <p><strong>Planning:</strong> Creating budgets, tracking expenses, and making financial plans.</p>
        
        <h3>Age-Appropriate Financial Education</h3>
        <p><strong>Preschool (Ages 3-5):</strong> At this stage, focus on basic concepts. Introduce the idea that money has value and is used to buy things. Use physical coins and bills to teach recognition. Play store or restaurant games to practice simple transactions. Use clear jars for saving to make money visible (unlike digital banking).</p>
        
        <p><strong>Elementary School (Ages 6-10):</strong> Build on basics with more structured learning. Begin allowance systems tied to chores or responsibilities. Help children divide money into saving, spending, and sharing categories. Open a savings account and visit the bank together. Involve children in simple family purchasing decisions to teach comparison shopping.</p>
        
        <p><strong>Middle School (Ages 11-13):</strong> Introduce more complex concepts as abstract thinking develops. Discuss the difference between debit and credit cards. Teach comparison shopping using unit prices and quality considerations. Help set specific saving goals for larger purchases. Introduce the concept of compound interest using calculators or apps to demonstrate growth.</p>
        
        <p><strong>High School (Ages 14-18):</strong> Prepare for financial independence with practical skills. Discuss household budgeting and involve teens in family financial planning where appropriate. Explain income taxes, insurance, and other "adult" financial responsibilities. Teach about credit scores, loans, and the danger of debt. If possible, help teens get work experience through part-time jobs.</p>
        
        <h3>Practical Strategies for Parents</h3>
        <p><strong>Use Everyday Moments:</strong> Grocery shopping, bill paying, and other routine activities can become teachable moments about money management.</p>
        
        <p><strong>Be Transparent (Appropriately):</strong> While you don't need to share every financial detail, letting children see how you make money decisions helps them understand real-world application.</p>
        
        <p><strong>Make It Hands-On:</strong> Experiential learning through allowances, savings accounts, and budgeting for special events makes financial concepts tangible.</p>
        
        <p><strong>Use Technology Wisely:</strong> Many apps and online tools can help make financial education engaging and relevant to digital-native children.</p>
        
        <p><strong>Model Good Habits:</strong> Children learn from watching you. Demonstrate healthy financial behaviors in your own life.</p>
        
        <h3>Conclusion</h3>
        <p>Building financial intelligence in children is a progressive, ongoing process that evolves as they grow. By intentionally teaching age-appropriate concepts and providing opportunities for practical application, parents can equip their children with the knowledge, skills, and attitudes needed for financial success throughout life. Remember that mistakes are part of learning - creating a safe environment for financial education means allowing children to make small financial mistakes and learn from them while the stakes are still low.</p>
      `;
    case 3:
      return `
        <h2>Effective Communication Skills for Children</h2>
        <p>Communication is the foundation of human connection and success in every area of life. For children, developing strong communication skills early on provides advantages in education, social relationships, emotional well-being, and future career prospects. As parents, you play the most critical role in nurturing these essential skills.</p>
        
        <h3>Why Communication Skills Matter</h3>
        <p>Effective communication encompasses much more than just speaking clearly. It includes listening actively, expressing thoughts and feelings appropriately, reading nonverbal cues, and adapting communication styles to different situations and audiences. Children with strong communication skills experience:</p>
        <ul>
          <li>Greater academic success</li>
          <li>Healthier peer relationships</li>
          <li>Improved emotional regulation</li>
          <li>Higher self-confidence</li>
          <li>Better conflict resolution abilities</li>
          <li>Enhanced critical thinking</li>
        </ul>
        
        <h3>Core Communication Skills for Children</h3>
        <p><strong>Active Listening:</strong> The ability to fully concentrate, understand, respond, and remember what is being said. This involves both verbal acknowledgment and nonverbal cues like eye contact and nodding.</p>
        
        <p><strong>Verbal Expression:</strong> Articulating thoughts, needs, and feelings clearly and appropriately. This includes vocabulary development, sentence construction, and tone management.</p>
        
        <p><strong>Nonverbal Communication:</strong> Understanding and using body language, facial expressions, gestures, and spatial distance to enhance communication.</p>
        
        <p><strong>Emotional Literacy:</strong> Recognizing, naming, and expressing emotions in healthy ways. This connects closely with communication since emotional awareness impacts how we express ourselves.</p>
        
        <p><strong>Question-Asking:</strong> Formulating and asking effective questions to gather information, clarify understanding, and demonstrate engagement.</p>
        
        <p><strong>Empathetic Communication:</strong> Considering others' perspectives and feelings when communicating, and adapting messages accordingly.</p>
        
        <h3>Age-Appropriate Communication Development</h3>
        <p><strong>Toddlers and Preschoolers (Ages 2-5):</strong> This is a period of rapid language acquisition. Focus on building vocabulary through reading, conversation, and play. Teach basic conversation turns - speaking and listening in alternation. Help children name their emotions ("I see you're feeling frustrated"). Encourage asking questions and praise their curiosity.</p>
        
        <p><strong>Early Elementary (Ages 6-9):</strong> Children begin developing more complex communication skills. Practice storytelling with beginning, middle, and end to develop narrative skills. Teach basic conflict resolution language ("I feel... when you... I need..."). Introduce the concept of different communication styles for different situations (speaking to friends vs. teachers). Begin exploring how tone and body language affect messages.</p>
        
        <p><strong>Pre-teens (Ages 10-12):</strong> As social worlds expand, communication skills become more nuanced. Discuss and practice perspective-taking in communication. Introduce more sophisticated emotional vocabulary. Teach about digital communication etiquette as children begin using technology more independently. Practice summarizing information and giving clear directions.</p>
        
        <p><strong>Teenagers (Ages 13-18):</strong> Focus on refining communication for greater independence. Discuss and practice assertive (not aggressive or passive) communication. Explore how to respectfully disagree and engage in constructive debate. Develop public speaking and presentation skills. Emphasize responsible digital communication and the permanence of online messages.</p>
        
        <h3>Practical Strategies for Parents</h3>
        <p><strong>Model Good Communication:</strong> Children learn primarily by observing you. Demonstrate active listening, clear expression, and respectful dialogue in your own interactions.</p>
        
        <p><strong>Create Communication-Rich Environments:</strong> Prioritize family meals, car rides, and other times for conversation without digital distractions. Ask open-ended questions that can't be answered with just "yes" or "no."</p>
        
        <p><strong>Read Together:</strong> Regular reading exposes children to rich vocabulary and narrative structures. Discuss stories to practice comprehension and expression.</p>
        
        <p><strong>Play Communication Games:</strong> Activities like "20 Questions," storytelling games, or even structured debates make skill-building fun.</p>
        
        <p><strong>Validate and Encourage:</strong> When children share thoughts or feelings, acknowledge their communication efforts even if the delivery isn't perfect.</p>
        
        <p><strong>Provide Feedback Thoughtfully:</strong> If you need to correct communication, focus on specific behaviors rather than general criticism ("Try looking at me when we talk" instead of "You're not listening").</p>
        
        <h3>Supporting Children with Communication Challenges</h3>
        <p>Some children face additional challenges with communication due to temperament, language delays, learning differences, or other factors. If you're concerned about your child's communication development:</p>
        <ul>
          <li>Consult with pediatricians and teachers about typical developmental milestones</li>
          <li>Consider evaluation by speech-language pathologists if warranted</li>
          <li>Maintain patience and provide extra support and practice</li>
          <li>Focus on progress rather than comparison to peers</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Communication skills develop gradually over childhood and adolescence, with each stage building upon earlier foundations. By intentionally nurturing these skills through modeling, practice, and feedback, parents can help children become confident, effective communicators. Remember that communication styles vary across cultures and families – the goal is not perfection but helping children express themselves authentically and understand others effectively.</p>
      `;
    case 4:
      return `
        <h2>Digital Citizenship: Raising Responsible Online Citizens</h2>
        <p>Digital citizenship encompasses the norms of appropriate, responsible behavior with regard to technology use. As children spend increasingly more time in digital environments, teaching them to navigate these spaces ethically, safely, and productively has become a crucial part of modern parenting.</p>
        
        <h3>Why Digital Citizenship Matters</h3>
        <p>The online world is not separate from "real life" - it's an extension of it. Children's digital actions have real consequences for themselves and others. Developing good digital citizenship helps children:</p>
        <ul>
          <li>Stay safe from online risks and predators</li>
          <li>Protect their personal information and future opportunities</li>
          <li>Build positive digital reputations</li>
          <li>Engage respectfully with diverse perspectives</li>
          <li>Contribute positively to online communities</li>
          <li>Develop healthy habits around technology use</li>
        </ul>
        
        <h3>Key Elements of Digital Citizenship</h3>
        <p><strong>Digital Privacy and Security:</strong> Understanding how to protect personal information, create strong passwords, recognize scams, and maintain privacy settings.</p>
        
        <p><strong>Digital Footprints and Reputation:</strong> Recognizing that online actions leave lasting traces that can impact future opportunities, and making mindful choices about what to share.</p>
        
        <p><strong>Digital Etiquette:</strong> Following the "golden rule" online by communicating respectfully, considering context and audience, and avoiding behaviors like cyberbullying or trolling.</p>
        
        <p><strong>Information Literacy:</strong> Evaluating online information critically, identifying misinformation, verifying sources, and understanding how algorithms shape what we see.</p>
        
        <p><strong>Balanced Use:</strong> Developing healthy habits around screen time, recognizing signs of overuse, and maintaining a balance between online and offline activities.</p>
        
        <p><strong>Digital Rights and Responsibilities:</strong> Understanding both freedoms (expression, access to information) and obligations (respecting intellectual property, reporting harmful content) in digital spaces.</p>
        
        <h3>Teaching Digital Citizenship by Age</h3>
        <p><strong>Ages 5-7:</strong> At this early stage, focus on basic concepts with close supervision. Teach that digital devices are tools for specific purposes, not unlimited entertainment. Begin conversations about permission before sharing information. Introduce the concept that not everything online is true. Emphasize treating others kindly online just like in person.</p>
        
        <p><strong>Ages 8-10:</strong> As independent use increases, build on foundations with more concrete rules. Create family media agreements with clear expectations about permitted sites and apps. Teach about personal information and what should never be shared (address, school name, passwords). Discuss how to recognize advertising vs. content. Introduce the concept of digital footprints in simple terms - "Once something is online, it's hard to completely remove it."</p>
        
        <p><strong>Ages 11-13:</strong> As social media interest grows, address more complex issues. Discuss cyberbullying in depth - how to recognize it, respond to it, and why it's harmful. Teach critical evaluation of news and information sources. Explore how photos can be altered and not everything represents reality. Discuss digital footprints in more depth, including how future employers or schools might view their online presence.</p>
        
        <p><strong>Ages 14-18:</strong> Prepare teens for increased independence with nuanced discussions. Address sexting, online relationships, and legal consequences of certain online behaviors. Discuss digital ethics in depth - plagiarism, copyright, and proper attribution. Explore how to be an "upstander" when witnessing problematic behavior online. Help teens audit and manage their digital footprint across platforms.</p>
        
        <h3>Practical Strategies for Parents</h3>
        <p><strong>Start Early:</strong> Begin conversations about digital citizenship before children have independent access to devices and the internet.</p>
        
        <p><strong>Model Good Behavior:</strong> Demonstrate healthy technology habits, respectful online communication, and critical consumption of information.</p>
        
        <p><strong>Use Teachable Moments:</strong> When digital issues arise in news or family experiences, use them as springboards for discussion rather than lectures.</p>
        
        <p><strong>Create Family Media Agreements:</strong> Collaboratively establish clear guidelines about technology use that evolve as children mature.</p>
        
        <p><strong>Maintain Open Communication:</strong> Ensure children feel comfortable coming to you with questions or concerns about their online experiences without fear of punishment.</p>
        
        <p><strong>Use Tools Appropriately:</strong> Parental controls and monitoring software can be useful, especially for younger children, but should gradually give way to self-regulation as maturity develops.</p>
        
        <h3>When Problems Arise</h3>
        <p>Despite best efforts, children may encounter difficulties online. If your child experiences or participates in cyberbullying, encounters inappropriate content, or makes a digital mistake:</p>
        <ul>
          <li>Respond calmly without shame or blame</li>
          <li>Document harmful content before it's deleted</li>
          <li>Report serious issues to appropriate authorities (schools, platforms, or law enforcement)</li>
          <li>Focus on learning and moving forward rather than punishment</li>
          <li>Seek professional help if issues significantly impact mental health</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Digital citizenship education is not a one-time conversation but an ongoing dialogue that evolves with technology and your child's development. By proactively addressing these topics, you help children develop the judgment, ethics, and skills they need to thrive in digital environments. The goal isn't to instill fear but to empower children to harness technology's benefits while minimizing risks and contributing positively to our shared digital world.</p>
      `;
    case 5:
      return `
        <h2>Critical Thinking Skills: Raising Children Who Can Think for Themselves</h2>
        <p>Critical thinking—the ability to analyze information objectively and make reasoned judgments—is perhaps the most essential skill for success in the 21st century. In a world inundated with information, children who can evaluate claims, detect bias, solve problems creatively, and make thoughtful decisions have a significant advantage in academics, careers, and life.</p>
        
        <h3>Why Critical Thinking Matters</h3>
        <p>Critical thinking is far more than academic intelligence. It's a way of approaching the world that helps children:</p>
        <ul>
          <li>Evaluate the reliability of information in an era of misinformation</li>
          <li>Make sound decisions based on evidence rather than emotion</li>
          <li>Solve complex problems innovatively</li>
          <li>Resist manipulation by media, peers, or marketing</li>
          <li>Form independent opinions while remaining open to new evidence</li>
          <li>Connect concepts across different subjects and situations</li>
        </ul>
        
        <h3>Core Components of Critical Thinking</h3>
        <p><strong>Analysis:</strong> Breaking information into component parts and examining how they relate to each other and to an overall structure or purpose.</p>
        
        <p><strong>Evaluation:</strong> Assessing claims, arguments, and evidence based on criteria such as credibility, relevance, and logical coherence.</p>
        
        <p><strong>Inference:</strong> Drawing conclusions based on evidence and reasoning, while recognizing assumptions and considering alternatives.</p>
        
        <p><strong>Metacognition:</strong> Thinking about one's own thinking processes—recognizing biases, monitoring comprehension, and reflecting on reasoning.</p>
        
        <p><strong>Open-mindedness:</strong> Willingness to consider different perspectives, revise opinions based on new evidence, and admit when one's initial judgment was incorrect.</p>
        
        <p><strong>Problem-solving:</strong> Applying analytical skills systematically to address challenges, generate options, and implement solutions.</p>
        
        <h3>Developing Critical Thinking by Age</h3>
        <p><strong>Ages 3-5:</strong> During these formative years, focus on building foundational skills through play and exploration. Encourage curiosity with open-ended "why" and "how" questions. Provide toys that invite problem-solving, like puzzles and building blocks. Play classification games to practice sorting and categorizing ("Which animals can fly? Which can swim?"). Introduce basic perspective-taking ("How do you think Teddy feels when...?").</p>
        
        <p><strong>Ages 6-9:</strong> As children enter school, build on natural curiosity with more structured critical thinking. Use literature to identify assumptions in stories ("Why did the character think that would happen?"). Practice evidence-gathering for simple claims ("How do we know the dinosaurs existed?"). Introduce the concept that sources of information vary in reliability. Play games that require strategy, like chess or Mastermind.</p>
        
        <p><strong>Ages 10-13:</strong> During these pivotal years, help children apply critical thinking to increasingly complex content. Teach media literacy skills for evaluating news, advertising, and online information. Practice identifying logical fallacies in age-appropriate examples. Encourage comparison and contrast of different perspectives on issues. Introduce the scientific method and conduct simple experiments together.</p>
        
        <p><strong>Ages 14-18:</strong> As teens develop abstract reasoning abilities, deepen critical analysis skills for adult contexts. Discuss complex ethical dilemmas that don't have clear right/wrong answers. Analyze how selection and omission of facts shapes narratives in media and history. Encourage teens to question their own assumptions and biases. Practice evaluating the methodology of studies and statistics they encounter.</p>
        
        <h3>Practical Strategies for Parents</h3>
        <p><strong>Ask Thought-Provoking Questions:</strong> Instead of providing immediate answers, respond to children's questions with "What do you think?" or "How could we find out?" Follow up their responses with deeper questions like "What makes you think that?" or "What might be another explanation?"</p>
        
        <p><strong>Embrace Uncertainty:</strong> Model comfort with not knowing everything and show how to seek answers. Use phrases like "That's an interesting question. I'm not sure, but let's explore it together."</p>
        
        <p><strong>Discuss Current Events:</strong> Age-appropriately examine news stories by asking questions like "Who created this information and why?", "What evidence supports this claim?", and "What different perspectives exist on this issue?"</p>
        
        <p><strong>Analyze Media:</strong> While watching movies or advertisements, discuss techniques used to influence emotions and opinions. Help children identify manipulation tactics and hidden messages.</p>
        
        <p><strong>Encourage Debate and Discussion:</strong> Have family discussions where children must support their opinions with reasoning and evidence. Sometimes assign them to argue for positions they don't personally hold to practice perspective-taking.</p>
        
        <p><strong>Provide Decision-Making Opportunities:</strong> Allow children to make age-appropriate decisions and evaluate the outcomes. This might range from choosing between activities for younger children to more significant decisions for teens.</p>
        
        <p><strong>Celebrate Thoughtful Mistakes:</strong> When children make errors in reasoning, treat these as valuable learning opportunities rather than failures. Help them analyze what went wrong in their thinking process.</p>
        
        <h3>Overcoming Challenges to Critical Thinking</h3>
        <p>Several factors can impede critical thinking development:</p>
        <ul>
          <li><strong>Information Overload:</strong> Teach children strategies for filtering and processing information without becoming overwhelmed.</li>
          <li><strong>Confirmation Bias:</strong> Help children recognize their tendency to favor information that confirms existing beliefs.</li>
          <li><strong>Emotional Reasoning:</strong> Practice distinguishing between emotional reactions and objective analysis.</li>
          <li><strong>Black-and-White Thinking:</strong> Introduce nuance and help children become comfortable with complexity and "gray areas."</li>
          <li><strong>Social Pressure:</strong> Foster the confidence to think independently even when peers or social media suggest otherwise.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Critical thinking is not an innate talent but a skill set that develops through practice and guidance. By intentionally fostering these abilities from early childhood through adolescence, parents equip children with intellectual tools that serve them throughout life. The goal isn't to raise cynical children who question everything, but thoughtful individuals who can navigate information wisely, solve problems effectively, and form well-reasoned judgments. In a rapidly changing world with increasing automation, critical thinking remains uniquely human—and increasingly valuable.</p>
      `;
    case 6:
      return `
        <h2>Building Creativity and Innovation Skills in Children</h2>
        <p>Creativity is far more than artistic talent—it's the ability to generate original ideas, make novel connections between existing concepts, and develop innovative solutions to problems. In a world of rapid technological change and complex challenges, creative thinking has become one of the most valuable skills a child can develop for future success.</p>
        
        <h3>Why Creativity and Innovation Matter</h3>
        <p>Many of today's children will eventually work in jobs that don't yet exist, using technologies not yet invented, solving problems we cannot currently anticipate. Beyond career advantages, creative thinking offers children:</p>
        <ul>
          <li>Enhanced problem-solving abilities in all areas of life</li>
          <li>Greater adaptability to change and uncertainty</li>
          <li>Improved emotional expression and self-understanding</li>
          <li>Increased confidence in their unique perspectives</li>
          <li>The ability to find meaning and possibility in challenges</li>
          <li>Deeper engagement with learning across subjects</li>
        </ul>
        
        <h3>The Building Blocks of Creative Thinking</h3>
        <p><strong>Curiosity:</strong> The desire to explore, question, and understand the world. This drives the creative process and fuels intrinsic motivation.</p>
        
        <p><strong>Imagination:</strong> The ability to form mental images and concepts not present to the senses or not previously experienced.</p>
        
        <p><strong>Divergent Thinking:</strong> Generating many possible ideas and solutions rather than focusing on one "correct" answer.</p>
        
        <p><strong>Convergent Thinking:</strong> Evaluating and refining creative ideas to identify the most promising options.</p>
        
        <p><strong>Risk-Taking:</strong> The willingness to try new approaches, make mistakes, and learn from them.</p>
        
        <p><strong>Persistence:</strong> Working through obstacles and setbacks rather than abandoning creative pursuits.</p>
        
        <h3>Nurturing Creativity by Age</h3>
        <p><strong>Ages 2-5:</strong> Young children are naturally creative thinkers who haven't yet internalized societal limitations. Provide unstructured play time with open-ended materials (blocks, dress-up clothes, art supplies). Encourage sensory exploration through different textures, sounds, and materials. Read books that play with language, imagery, and imagination. Allow for "messy" creative activities without focusing on perfect outcomes. Ask open-ended questions like "What else could this become?" or "What do you think happens next?"</p>
        
        <p><strong>Ages 6-9:</strong> As children enter formal education, help them maintain creative confidence while gaining technical skills. Balance structured activities with plenty of free exploration time. Introduce basic creative problem-solving: "How many different ways could we use this object?" Provide opportunities to create stories, art, music, and inventions. Begin teaching that mistakes are valuable parts of the creative process. Expose children to diverse creative expressions from various cultures.</p>
        
        <p><strong>Ages 10-13:</strong> Support creativity during years when conformity pressures often intensify. Introduce more sophisticated creative thinking techniques like SCAMPER (Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse). Connect creativity to real-world problem-solving in science, technology, and community issues. Encourage deeper development of creative interests with appropriate materials and instruction. Discuss how famous innovators persisted through failures.</p>
        
        <p><strong>Ages 14-18:</strong> Help teens apply creativity to increasing independence and identity development. Support self-directed creative projects with genuine audiences (websites, community events, competitions). Discuss the ethics of innovation and responsible creation. Connect creative thinking to career exploration and future possibilities. Encourage cross-disciplinary projects that combine arts, sciences, technology, and humanities.</p>
        
        <h3>Practical Strategies for Parents</h3>
        <p><strong>Create a Creativity-Friendly Environment:</strong> Provide both physical space (materials, tools, work areas) and psychological space (time, freedom from overscheduling, acceptance of mess and noise) for creative expression.</p>
        
        <p><strong>Value Process Over Product:</strong> Focus praise on effort, experimentation, and original thinking rather than on perfect results: "I noticed how you tried three different approaches to solve that problem."</p>
        
        <p><strong>Ask Better Questions:</strong> Instead of "What is it?" ask "Tell me about what you created." Replace "Why did you do that?" with "What inspired this idea?" Emphasize open-ended questions that have multiple possible answers.</p>
        
        <p><strong>Model Creative Thinking:</strong> Let children see you engaging in creative pursuits, thinking aloud through problems, taking creative risks, and responding constructively to setbacks.</p>
        
        <p><strong>Limit Screen Time:</strong> While digital tools can enhance creativity, excessive passive screen time can reduce the cognitive space needed for original thinking. Balance technology use with plenty of unplugged creative time.</p>
        
        <p><strong>Expose Children to Diverse Influences:</strong> Visit museums, attend performances, explore nature, and experience different cultures to provide rich sensory input and novel perspectives that fuel creative connections.</p>
        
        <p><strong>Teach Creative Thinking Techniques:</strong> Introduce specific methods like brainstorming, mind mapping, lateral thinking, and design thinking as children mature.</p>
        
        <h3>Overcoming Barriers to Creativity</h3>
        <p>Several common obstacles can hinder creative development:</p>
        <ul>
          <li><strong>Fear of Failure:</strong> Help children reframe "failures" as experiments and learning opportunities.</li>
          <li><strong>Perfectionism:</strong> Encourage rough drafts, prototypes, and "good enough" starting points.</li>
          <li><strong>Overscheduling:</strong> Ensure children have unstructured time for mind-wandering and play.</li>
          <li><strong>Excessive Criticism:</strong> Create psychologically safe spaces where unusual ideas aren't immediately judged.</li>
          <li><strong>Reward Systems:</strong> Be cautious with external rewards for creativity, which can diminish intrinsic motivation.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Creativity isn't a fixed trait but a capacity that can be developed through environment, practice, and mindset. By nurturing creative thinking from early childhood through adolescence, parents prepare children not just for specific careers but for a lifetime of innovation, adaptation, and finding their unique contributions to the world. The most valuable gift we can give children isn't a particular creative skill, but the confidence that they are capable of generating new ideas and the persistence to develop those ideas into meaningful innovations.</p>
      `;
    case 7:
      return `
        <h2>Resilience and Adaptability: Essential Skills for an Uncertain Future</h2>
        <p>Resilience—the ability to recover from setbacks, adapt to change, and keep going in the face of adversity—has emerged as one of the most important skills for children to develop in our rapidly changing world. As parents, fostering resilience prepares children not just to survive life's inevitable challenges, but to thrive because of them.</p>
        
        <h3>Why Resilience and Adaptability Matter</h3>
        <p>Today's children face a future characterized by uncertainty, technological disruption, and complex global challenges. Beyond these large-scale issues, they will also navigate personal setbacks, disappointments, and transitions. Resilient children:</p>
        <ul>
          <li>Recover more quickly from adversity and trauma</li>
          <li>Adapt more successfully to change and transition</li>
          <li>Experience better mental health outcomes</li>
          <li>Develop stronger problem-solving abilities</li>
          <li>Build deeper relationships and social supports</li>
          <li>Achieve greater academic and career success</li>
          <li>Find meaning and purpose even in difficult circumstances</li>
        </ul>
        
        <h3>Key Components of Resilience</h3>
        <p><strong>Self-Efficacy:</strong> The belief in one's ability to influence outcomes and succeed in specific situations. This is not false confidence, but a realistic sense of personal capability.</p>
        
        <p><strong>Emotional Regulation:</strong> The ability to recognize, understand, and manage emotions effectively, particularly during stressful situations.</p>
        
        <p><strong>Optimistic Thinking:</strong> A hopeful outlook that sees challenges as temporary and specific rather than permanent and pervasive,
