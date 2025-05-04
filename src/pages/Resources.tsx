
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ResourceCard from '@/components/ResourceCard';
import ResourcesFilter from '@/components/ResourcesFilter';
import ArticleContent from '@/components/ArticleContent';
import { BookOpen } from 'lucide-react';
import { resourceTypes, ageGroups, skillCategories } from '@/constants/resourcesData';

// Define high-quality articles focused on helping Indian parents
const futureReadyArticles = [
  {
    id: 1,
    title: "Building Digital Literacy from Age 5: A Parent's Step-by-Step Guide",
    description: "Learn how to introduce digital skills to young children in a healthy, balanced way that prepares them for future careers while protecting their development.",
    content: `
      <h2>Why Digital Literacy Matters</h2>
      
      <p>In today's rapidly evolving technological landscape, digital literacy has become as fundamental as reading and writing. For parents navigating this new terrain, the question isn't whether to introduce digital skills, but <strong>how and when</strong> to do so effectively.</p>
      
      <p>Early exposure to digital concepts helps children develop a natural fluency with technology that will serve them throughout their educational and professional lives. Research shows that children who develop basic digital skills before age 8 demonstrate greater confidence and adaptability with new technologies later in life.</p>
      
      <h2>Age-Appropriate Digital Skills Development</h2>
      
      <h3>Ages 5-7: Foundation Stage</h3>
      
      <p>At this stage, focus on creating a positive relationship with technology through:</p>
      
      <ul>
        <li><strong>Guided screen time:</strong> Limit to 30-60 minutes daily of educational content that encourages interaction and problem-solving, not passive consumption.</li>
        <li><strong>Basic navigation skills:</strong> Teach simple touchscreen navigation, mouse control, and keyboard awareness through educational games.</li>
        <li><strong>Digital storytelling:</strong> Use apps that allow children to create simple stories with pictures and voice recording.</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Sit with your child during their technology time. Ask questions about what they're doing and learning. This not only monitors usage but reinforces that technology is a tool for learning, not just entertainment.</p>
      </div>
      
      <h3>Ages 8-10: Exploration Stage</h3>
      
      <p>As children develop reading skills and logical thinking abilities, introduce:</p>
      
      <ul>
        <li><strong>Visual programming:</strong> Platforms like Scratch Jr allow children to create simple animations and games by arranging visual blocks, teaching fundamental programming concepts without typing code.</li>
        <li><strong>Digital citizenship:</strong> Begin conversations about online safety, privacy, and appropriate behavior.</li>
        <li><strong>Creative digital tools:</strong> Introduce simple photo editing, digital drawing, and audio recording to nurture creativity.</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Create a family project that uses digital skills, such as making a digital family recipe book or a photo story about a recent holiday. This makes learning contextual and meaningful.</p>
      </div>
      
      <h2>Balancing Digital and Physical Development</h2>
      
      <p>While developing digital skills is important, maintaining a balance with physical activity and face-to-face social interaction remains crucial. For every hour of digital skill development:</p>
      
      <ul>
        <li>Schedule at least two hours of physical play or outdoor activity</li>
        <li>Ensure regular social interaction with peers in non-digital settings</li>
        <li>Incorporate hands-on crafts and activities that develop fine motor skills</li>
      </ul>
      
      <h2>Practical Implementation for Indian Parents</h2>
      
      <h3>Weekly Schedule Template</h3>
      
      <p>Create a balanced weekly schedule that might include:</p>
      
      <ul>
        <li><strong>Monday & Wednesday:</strong> 30 minutes of educational apps or games focusing on math or language</li>
        <li><strong>Tuesday & Thursday:</strong> 30 minutes of creative digital activities (drawing, storytelling)</li>
        <li><strong>Friday:</strong> 30 minutes of early coding concepts through visual programming</li>
        <li><strong>Weekend:</strong> Family digital project (45-60 minutes) such as creating a digital story together</li>
      </ul>
      
      <p>Complement this with daily reading, outdoor play, and family conversation to ensure holistic development.</p>
      
      <h2>Resources You Can Use Today</h2>
      
      <p>To get started, explore these age-appropriate resources:</p>
      
      <ul>
        <li>ScratchJr (free app for visual coding concepts)</li>
        <li>Khan Academy Kids (free educational content)</li>
        <li>Google's "Be Internet Awesome" program (digital citizenship)</li>
        <li>Osmo (combines physical elements with digital learning)</li>
      </ul>
      
      <h2>Measuring Progress</h2>
      
      <p>Rather than focusing on specific technical skills, look for these developmental indicators:</p>
      
      <ul>
        <li>Increased confidence in trying new digital tools</li>
        <li>Ability to explain their digital creation process</li>
        <li>Appropriate awareness of online safety concepts</li>
        <li>Balanced interest in both digital and non-digital activities</li>
      </ul>
      
      <p>By following this approach, you'll help your child develop the digital foundation they need while ensuring their overall development stays on track.</p>
      
      <h2>Next Steps</h2>
      
      <p>Begin with just 2-3 activities per week, observing which ones capture your child's interest. Remember that consistency matters more than intensity—short, regular sessions will yield better results than occasional long ones.</p>
    `,
    type: "Article",
    readTime: "7 min",
    ageGroup: "Ages 5-10",
    category: "Digital Skills",
  },
  {
    id: 2,
    title: "Financial Literacy Fundamentals: Teaching Money Management from Ages 3-8",
    description: "Early financial literacy creates a foundation for lifelong financial health. Learn age-appropriate activities and conversations to start now.",
    content: `
      <h2>Why Early Financial Literacy Matters</h2>
      
      <p>Financial habits and attitudes toward money begin forming as early as age three. Research shows that children whose parents actively teach financial concepts demonstrate better money management skills as adults and are more likely to become financially independent.</p>
      
      <p>For parents in India, where traditional values around money often emphasize saving and careful spending, incorporating these lessons early creates a powerful foundation that combines cultural wisdom with modern financial literacy.</p>
      
      <h2>Age-Appropriate Financial Literacy</h2>
      
      <h3>Ages 3-5: Introduction to Money Concepts</h3>
      
      <p>At this stage, focus on basic recognition and simple concepts:</p>
      
      <ul>
        <li><strong>Money recognition:</strong> Introduce different coins and notes, helping children identify and sort them</li>
        <li><strong>Pretend play:</strong> Create simple store scenarios where children can practice "buying" items</li>
        <li><strong>Saving visualization:</strong> Use clear jars (not piggy banks) so children can see money accumulating</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Label three clear jars as "Spend," "Save," and "Share." When your child receives money, help them divide it among the jars. This introduces the concept that not all money is for immediate spending.</p>
      </div>
      
      <h3>Ages 6-8: Building Core Financial Habits</h3>
      
      <p>As children develop greater understanding, introduce these concepts:</p>
      
      <ul>
        <li><strong>Earning and effort connection:</strong> Create a simple age-appropriate chore system with small monetary rewards</li>
        <li><strong>Delayed gratification:</strong> Help children save for small items they want, tracking progress visually</li>
        <li><strong>Need vs. want discussions:</strong> During shopping trips, have conversations about which items are needs versus wants</li>
        <li><strong>Basic budgeting:</strong> For special events like birthdays, give children a small budget to manage</li>
      </ul>
      
      <h2>Practical Activities for Indian Parents</h2>
      
      <h3>1. Festival Budget Planning</h3>
      
      <p>During festivals like Diwali or Pongal, give children a small budget for decorations or small gifts. Help them:</p>
      <ul>
        <li>List what they want to buy</li>
        <li>Research costs (through catalogs or online)</li>
        <li>Make decisions based on their limited budget</li>
        <li>Track their spending</li>
      </ul>
      
      <h3>2. Market Math Game</h3>
      
      <p>When visiting local markets:</p>
      <ul>
        <li>Give children a specific shopping task ("Find 5 oranges for under 100 rupees")</li>
        <li>Have them compare prices between vendors</li>
        <li>Let them handle the payment transaction (under supervision)</li>
        <li>Calculate the change they should receive before the vendor does</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>After market visits, discuss how comparing prices helped save money, reinforcing that taking time to make thoughtful decisions has financial benefits.</p>
      </div>
      
      <h3>3. The "Power of Compound Interest" Demonstration</h3>
      
      <p>For slightly older children (7-8):</p>
      <ul>
        <li>Offer two options: 10 rupees today or 11 rupees tomorrow</li>
        <li>If they choose to wait, increase the offer by 10% each day for a week</li>
        <li>Use a chart to show how money grows through patience</li>
        <li>Connect this to how savings accounts work</li>
      </ul>
      
      <h2>Conversations That Matter</h2>
      
      <p>Beyond activities, regular conversations about money help normalize financial discussions:</p>
      
      <h3>When receiving gifts:</h3>
      <p>"What would you like to do with this money? How much would you like to save for something special later?"</p>
      
      <h3>During shopping:</h3>
      <p>"We have a budget of X rupees for groceries today. Can you help me make sure we stay within our budget?"</p>
      
      <h3>When they want something:</h3>
      <p>Instead of an immediate yes or no, try: "That's not in our budget right now. Would you like to save your pocket money toward it?"</p>
      
      <h2>Progress Indicators</h2>
      
      <p>Look for these signs that financial literacy is developing:</p>
      
      <ul>
        <li>Child begins asking whether something is a "need" or a "want"</li>
        <li>Demonstrates willingness to wait and save for desired items</li>
        <li>Shows interest in how parents make money decisions</li>
        <li>Begins to understand the connection between work and earnings</li>
      </ul>
      
      <h2>Next Steps</h2>
      
      <p>Start with just one activity this week. The "three jars" system is an excellent beginning point as it creates a visual and practical foundation for all future money discussions. Remember that your own money behaviors are being observed and internalized, so model the financial habits you hope to instill.</p>
    `,
    type: "Article",
    readTime: "6 min",
    ageGroup: "Ages 3-8",
    category: "Financial Skills",
  },
  {
    id: 3,
    title: "Developing Critical Thinking Skills in Children: A Practical Approach for Ages 8-14",
    description: "Learn how to foster analytical thinking, problem-solving abilities, and sound judgment in your child through everyday activities and structured exercises.",
    content: `
      <h2>Why Critical Thinking Is Essential for Future Success</h2>
      
      <p>In today's information-rich world, the ability to analyze, evaluate, and form independent judgments has become more valuable than technical skills alone. Critical thinking enables children to:</p>
      
      <ul>
        <li>Distinguish reliable information from misinformation</li>
        <li>Solve complex problems creatively</li>
        <li>Make sound decisions independently</li>
        <li>Adapt to changing circumstances and technologies</li>
      </ul>
      
      <p>For children in their developmental years, ages 8-14 represent a crucial window when abstract thinking abilities begin to form and can be significantly strengthened through proper guidance.</p>
      
      <h2>Age-Appropriate Critical Thinking Development</h2>
      
      <h3>Ages 8-10: Foundation Building</h3>
      
      <p>At this stage, children are ready to move beyond simple memorization to understanding underlying principles:</p>
      
      <ul>
        <li><strong>Ask "why" and "how" questions:</strong> When your child shares information, gently probe deeper with questions that encourage explanation</li>
        <li><strong>Introduce basic logical puzzles:</strong> Sudoku, simple logic grid puzzles, and pattern recognition games</li>
        <li><strong>Encourage prediction:</strong> While reading stories, pause to ask what might happen next and why they think so</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Create a "Question of the Day" ritual at dinner time that requires analysis rather than factual recall. For example: "If you could change one rule at school, what would it be and why?"</p>
      </div>
      
      <h3>Ages 11-14: Developing Analytical Rigor</h3>
      
      <p>As abstract thinking capabilities mature:</p>
      
      <ul>
        <li><strong>Introduce comparison and evaluation:</strong> Help them analyze different perspectives on topics of interest</li>
        <li><strong>Teach basic research skills:</strong> Guide them in evaluating information sources for reliability</li>
        <li><strong>Encourage independent problem-solving:</strong> When challenges arise, ask "What do you think would work?" before offering solutions</li>
        <li><strong>Introduce ethical dilemmas:</strong> Discuss scenarios that have no perfect answer to develop nuanced thinking</li>
      </ul>
      
      <h2>Practical Activities for Parents</h2>
      
      <h3>1. The "What If" Game</h3>
      
      <p>During family time or car rides, pose hypothetical scenarios that require creative problem-solving:</p>
      <ul>
        <li>"What if we had to communicate without words for a full day?"</li>
        <li>"What if we could only use electricity for 2 hours each day?"</li>
        <li>"What if smartphones hadn't been invented?"</li>
      </ul>
      <p>Ask follow-up questions about their reasoning and encourage them to consider different perspectives and consequences.</p>
      
      <h3>2. News Analysis Exercise</h3>
      
      <p>Once weekly, select an age-appropriate news story and guide your child through these questions:</p>
      <ul>
        <li>What are the key facts presented?</li>
        <li>Is there information missing that would help us understand better?</li>
        <li>Who might benefit from this situation?</li>
        <li>Are there different ways to view this issue?</li>
        <li>If you could ask the people involved one question, what would it be?</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Start with topics that interest your child naturally—sports, entertainment, or technology—before moving to more complex news topics.</p>
      </div>
      
      <h3>3. Reverse Engineering Challenge</h3>
      
      <p>Select everyday household items and challenge your child to:</p>
      <ul>
        <li>Identify all the component parts</li>
        <li>Hypothesize how it was made</li>
        <li>Consider how it could be improved</li>
        <li>Think about why specific design decisions were made</li>
      </ul>
      <p>This exercise develops systems thinking and helps children understand that products are solutions to specific problems.</p>
      
      <h3>4. Family Decision Matrix</h3>
      
      <p>For appropriate family decisions (weekend activities, holiday planning), create a simple decision matrix:</p>
      <ul>
        <li>List options across the top</li>
        <li>List criteria down the side (cost, time required, enjoyment factor, etc.)</li>
        <li>Score each option against criteria</li>
        <li>Discuss the results together</li>
      </ul>
      <p>This introduces systematic decision-making and the idea that important choices should balance multiple factors.</p>
      
      <h2>Navigating Common Challenges</h2>
      
      <h3>When critical thinking leads to questioning authority:</h3>
      <p>Distinguish between respectful questioning and defiance. Praise thoughtful questions while maintaining appropriate boundaries around behavior.</p>
      
      <h3>When children become overwhelmed by too many options:</h3>
      <p>Teach structured decision-making tools and the concept that perfect solutions rarely exist—the goal is making well-reasoned choices.</p>
      
      <h2>Progress Indicators</h2>
      
      <p>Look for these signs of developing critical thinking:</p>
      
      <ul>
        <li>Asks increasingly complex questions</li>
        <li>Considers multiple perspectives before forming opinions</li>
        <li>Identifies assumptions in arguments or explanations</li>
        <li>Shows greater comfort with ambiguity and nuance</li>
        <li>Provides reasoning for their conclusions without prompting</li>
      </ul>
      
      <h2>Next Steps</h2>
      
      <p>Begin by incorporating the "What If" game into your weekly family discussions. This simple activity requires no preparation but immediately exercises key critical thinking muscles. Remember that modeling these thinking skills yourself—by thinking aloud through your own decision processes—is one of the most powerful teaching methods available.</p>
    `,
    type: "Article",
    readTime: "8 min",
    ageGroup: "Ages 8-14",
    category: "Critical Thinking",
  },
  {
    id: 4,
    title: "Communication Skills for Future Leaders: Building Your Child's Verbal Excellence (Ages 10-16)",
    description: "Strong communication skills are consistently ranked among the top qualities employers seek. Learn how to develop these essential abilities in your teen or pre-teen.",
    content: `
      <h2>Why Communication Skills Determine Future Success</h2>
      
      <p>While technical skills may open doors to opportunities, communication skills determine how far your child will go through those doors. Research consistently shows that regardless of field or industry, strong communicators:</p>
      
      <ul>
        <li>Advance more quickly in their careers</li>
        <li>Lead more effective teams</li>
        <li>Negotiate better compensation</li>
        <li>Build stronger professional networks</li>
        <li>Adapt more successfully to changing environments</li>
      </ul>
      
      <p>For children ages 10-16, communication skills development coincides with significant identity formation and increasing social awareness, making this an optimal window for building these capabilities.</p>
      
      <h2>Core Communication Competencies by Age</h2>
      
      <h3>Ages 10-12: Building Fundamental Expression</h3>
      
      <p>Focus on developing these foundational skills:</p>
      
      <ul>
        <li><strong>Clear articulation:</strong> Speaking in complete, structured thoughts</li>
        <li><strong>Active listening:</strong> Demonstrating understanding of others' perspectives</li>
        <li><strong>Basic presentation skills:</strong> Organizing ideas with a beginning, middle, and end</li>
        <li><strong>Appropriate social communication:</strong> Adapting communication to different contexts</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Institute a weekly "presentation night" where each family member shares something they've learned for 2-3 minutes, followed by questions. Start in the safety of family before expanding to other settings.</p>
      </div>
      
      <h3>Ages 13-16: Developing Persuasive Communication</h3>
      
      <p>As social dynamics become more complex, focus on:</p>
      
      <ul>
        <li><strong>Persuasive argumentation:</strong> Supporting opinions with evidence and reasoning</li>
        <li><strong>Emotional intelligence:</strong> Reading social cues and adapting communication accordingly</li>
        <li><strong>Conflict resolution:</strong> Expressing disagreement constructively</li>
        <li><strong>Digital communication:</strong> Understanding tone and impact in written communication</li>
        <li><strong>Public speaking confidence:</strong> Managing anxiety and connecting with audiences</li>
      </ul>
      
      <h2>Practical Development Activities</h2>
      
      <h3>1. The "Elevator Pitch" Challenge</h3>
      
      <p>Have your child practice explaining complex topics in just 60 seconds:</p>
      <ul>
        <li>Choose topics they're passionate about or subjects they're studying</li>
        <li>Set a timer for 60 seconds</li>
        <li>Challenge them to explain the key points clearly to someone unfamiliar with the topic</li>
        <li>Provide constructive feedback on clarity, organization, and engagement</li>
      </ul>
      <p>This exercise develops concise thinking, prioritization of information, and audience awareness.</p>
      
      <h3>2. Structured Debate Practice</h3>
      
      <p>For older children (13-16), introduce formal debate structures:</p>
      <ul>
        <li>Select topics relevant to their interests or current events</li>
        <li>Assign positions that may differ from their personal views</li>
        <li>Establish time limits for arguments and rebuttals</li>
        <li>Teach the importance of supporting assertions with evidence</li>
        <li>Practice respectful disagreement techniques</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-l-brand-blue">
        <p class="font-semibold mb-2">Implementation Tip:</p>
        <p>Begin with lighthearted topics ("Pizza is better than burgers") before moving to more substantive issues. The goal is to develop the skills of structured argument, not to create conflict.</p>
      </div>
      
      <h3>3. The Active Listening Circle</h3>
      
      <p>This family activity develops the often-overlooked listening component of communication:</p>
      <ul>
        <li>Each person shares something about their day or a topic of interest</li>
        <li>The next person must first accurately summarize what the previous person said before adding their own contribution</li>
        <li>If the summary isn't accurate, the original speaker clarifies</li>
        <li>Continue around the circle</li>
      </ul>
      <p>This exercise demonstrates how rare good listening is and how it forms the foundation of effective communication.</p>
      
      <h3>4. Video Self-Assessment</h3>
      
      <p>For children 12 and older:</p>
      <ul>
        <li>Record them giving a short presentation on a topic of their choice</li>
        <li>Watch it together, looking specifically for:
          <ul>
            <li>Filler words ("um," "like," etc.)</li>
            <li>Body language and eye contact</li>
            <li>Voice modulation and pacing</li>
            <li>Organization of thoughts</li>
          </ul>
        </li>
        <li>Identify 1-2 specific areas for improvement</li>
        <li>Re-record after practice to demonstrate progress</li>
      </ul>
      <p>Self-observation is powerful for developing awareness of communication habits that might otherwise go unnoticed.</p>
      
      <h2>Communication in the Digital Age</h2>
      
      <p>As digital communication becomes increasingly important, help your child:</p>
      
      <ul>
        <li>Understand how tone can be misinterpreted in written messages</li>
        <li>Practice professional email etiquette</li>
        <li>Recognize the permanence of digital communication</li>
        <li>Develop awareness of how their online communication shapes their digital identity</li>
      </ul>
      
      <h3>Exercise: Email Etiquette Practice</h3>
      
      <p>Have your child draft emails for different scenarios:</p>
      <ul>
        <li>Requesting information from a teacher</li>
        <li>Applying for a volunteer opportunity</li>
        <li>Resolving a misunderstanding with a friend</li>
        <li>Thanking someone for an opportunity or gift</li>
      </ul>
      <p>Review together, discussing appropriate formality, clarity, and tone for each situation.</p>
      
      <h2>Progress Indicators</h2>
      
      <p>Look for these signs of developing communication skills:</p>
      
      <ul>
        <li>Decreased use of filler words and vague language</li>
        <li>Increased comfort with public speaking opportunities</li>
        <li>More effective resolution of peer conflicts</li>
        <li>Improved ability to explain complex concepts simply</li>
        <li>Greater awareness of how their communication affects others</li>
      </ul>
      
      <h2>Next Steps</h2>
      
      <p>Begin with the Elevator Pitch Challenge this week, focusing on a topic your child knows well. Record the first attempt, provide constructive feedback, allow practice time, then record again to demonstrate improvement. This concrete experience of progress will motivate further development.</p>
      
      <p>Remember that communication skills develop through practice in real contexts. Look for authentic opportunities—family discussions, ordering at restaurants, explaining a concept to a younger sibling—to reinforce these skills in daily life.</p>
    `,
    type: "Article",
    readTime: "7 min",
    ageGroup: "Ages 10-16",
    category: "Communication Skills",
  },
  {
    id: 5,
    title: "Cultivating Creativity: Nurturing Innovative Thinking in Children of All Ages",
    description: "Creativity is the foundation of innovation and problem-solving. Learn practical ways to foster creative thinking that will benefit your child's future career and life skills.",
    type: "Article",
    readTime: "6 min",
    ageGroup: "All Ages",
    category: "Creativity",
  },
  {
    id: 6,
    title: "Entrepreneurial Mindset for Teens: Building Business Fundamentals from Age 14",
    description: "Help your teenager develop the entrepreneurial thinking that can lead to future business success and financial independence through practical at-home projects.",
    type: "Article",
    readTime: "9 min",
    ageGroup: "Ages 14-18",
    category: "Entrepreneurship",
  },
  {
    id: 7,
    title: "Social Intelligence: The Most Overlooked Skill for Future Success",
    description: "Learn how developing strong social intelligence helps children build networks, collaborate effectively, and navigate complex social environments in their future careers.",
    type: "Article",
    readTime: "7 min",
    ageGroup: "Ages 8-16",
    category: "Social Skills",
  },
  {
    id: 8,
    title: "Teaching Resilience: Helping Your Child Build Mental Strength for Future Challenges",
    description: "Resilience is a critical predictor of long-term success. Discover research-backed approaches to help your child develop this essential quality.",
    type: "Article",
    readTime: "8 min",
    ageGroup: "All Ages",
    category: "Emotional Intelligence",
  },
  {
    id: 9,
    title: "The Maker Mindset: Hands-On Projects That Develop Future-Ready Skills",
    description: "Practical projects that combine digital and physical creation to develop the problem-solving abilities and creative confidence needed for tomorrow's careers.",
    type: "Guide",
    readTime: "10 min",
    ageGroup: "Ages 8-14",
    category: "Creativity",
  },
  {
    id: 10,
    title: "Coding Fundamentals: When and How to Start Based on Your Child's Age",
    description: "A practical roadmap for introducing programming concepts at different developmental stages, with specific resources and activities for each age group.",
    type: "Guide",
    readTime: "12 min",
    ageGroup: "Ages 5-16",
    category: "Digital Skills",
  },
  {
    id: 11,
    title: "Future-Proof Career Planning: Industries and Skills with Growing Demand",
    description: "An evidence-based overview of career fields expected to grow over the next decade and the foundational skills children should develop now to prepare.",
    type: "Article",
    readTime: "9 min",
    ageGroup: "Ages 12-18",
    category: "Career Planning",
  },
  {
    id: 12,
    title: "Investment Basics for Teens: Starting the Wealth-Building Journey Early",
    description: "Age-appropriate ways to teach adolescents about investing, compound growth, and long-term financial planning that set the foundation for future financial independence.",
    type: "Guide",
    readTime: "8 min",
    ageGroup: "Ages 13-18",
    category: "Financial Skills",
  },
  {
    id: 13,
    title: "The Self-Directed Learning Advantage: Teaching Your Child to Take Ownership of Their Education",
    description: "How to foster independent learning skills that will serve your child throughout their academic journey and professional life.",
    type: "Article",
    readTime: "7 min",
    ageGroup: "Ages 10-18",
    category: "Learning Skills",
  },
  {
    id: 14,
    title: "Building Effective Study Habits: A Science-Based Approach for Academic Excellence",
    description: "Research-backed techniques that help students learn more efficiently, retain information better, and perform at their best in academic settings.",
    type: "Checklist",
    readTime: "6 min",
    ageGroup: "Ages 8-18",
    category: "Learning Skills",
  },
  {
    id: 15,
    title: "AI Literacy for Parents and Children: Understanding the Technology Shaping the Future",
    description: "What parents need to know about artificial intelligence and how to prepare children to work effectively with AI tools in their future careers.",
    type: "Article",
    readTime: "8 min",
    ageGroup: "All Ages",
    category: "Digital Skills",
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<typeof futureReadyArticles[0] | null>(null);
  const [currentArticleIndex, setCurrentArticleIndex] = useState<number | null>(null);

  const filteredResources = futureReadyArticles.filter(resource => {
    const searchMatch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const typeMatch = selectedType === "All" || resource.type === selectedType;
    const ageMatch = selectedAge === "All Ages" || resource.ageGroup === selectedAge;
    const categoryMatch = selectedCategory === "All Skills" || resource.category === selectedCategory;
    
    return searchMatch && typeMatch && ageMatch && categoryMatch;
  });

  const handleArticleClick = (article: typeof futureReadyArticles[0], index: number) => {
    setSelectedArticle(article);
    setCurrentArticleIndex(index);
    window.scrollTo(0, 0);
  };

  const handleBackToResources = () => {
    setSelectedArticle(null);
    setCurrentArticleIndex(null);
  };

  const handleNextArticle = () => {
    if (currentArticleIndex !== null && currentArticleIndex < filteredResources.length - 1) {
      const nextArticle = filteredResources[currentArticleIndex + 1];
      setSelectedArticle(nextArticle);
      setCurrentArticleIndex(currentArticleIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousArticle = () => {
    if (currentArticleIndex !== null && currentArticleIndex > 0) {
      const prevArticle = filteredResources[currentArticleIndex - 1];
      setSelectedArticle(prevArticle);
      setCurrentArticleIndex(currentArticleIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <PageHeader 
        title="Future-Ready Learning Resources" 
        description="Expert guidance to help your child develop essential skills for financial independence and career success in tomorrow's world."
      >
        {!selectedArticle && (
          <ResourcesFilter 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedAge={selectedAge}
            setSelectedAge={setSelectedAge}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            resourceTypes={resourceTypes}
            ageGroups={ageGroups}
            skillCategories={skillCategories}
          />
        )}
      </PageHeader>
      
      <section className="section-padding">
        <div className="container-custom">
          {selectedArticle ? (
            <ArticleContent 
              article={selectedArticle} 
              onBack={handleBackToResources}
              onNext={handleNextArticle}
              onPrevious={handlePreviousArticle}
              hasNext={currentArticleIndex !== null && currentArticleIndex < filteredResources.length - 1}
              hasPrevious={currentArticleIndex !== null && currentArticleIndex > 0}
            />
          ) : (
            filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <div key={index} onClick={() => handleArticleClick(resource, index)} className="cursor-pointer">
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
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
