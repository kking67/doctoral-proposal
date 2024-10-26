import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { BookOpen, Target, Briefcase, LineChart, Gift, Lightbulb, Brain, Flag, DollarSign, Unlock, Ruler } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProposalDashboard() {
  const TEAL = '#00857a';
  const navigate = useNavigate();
  
  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Doctoral Sponsorship Proposal: Kelly King</h1>
        <h2 className="text-xl text-gray-600">Educational Technology/Leadership</h2>
      </div>

      {/* Objective Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6" style={{ color: TEAL }} />
            <span>Objective</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            I am seeking company sponsorship for a doctoral program in Educational Technology. This opportunity will empower me to enhance my expertise 
            in leveraging educational technologies and AI to create comprehensive professional development and clinical 
            care solutions for autism intervention and IDD care professionals. I believe the knowledge and skills gained 
            through a doctoral program will significantly advance my contributions to our company's strategic goals, particularly 
            in the expansion of AI tools for professional development and competency-building.
          </p>
        </CardContent>
      </Card>

      {/* Role Alignment */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" style={{ color: TEAL }} />
            <span>Alignment with Role and Responsibilities</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            As an AI & Innovation Specialist, I contribute to initiatives that integrate AI solutions into clinical 
            competency offerings. Key responsibilities include AI-powered tool development, collaboration with 
            cross-functional teams, and enhancing internal processes and content creation workflows. A doctoral program in Educational 
            Technology aligns directly with these tasks by equipping me with cutting-edge research 
            and methodologies in instructional technology, learning design, AI-enhanced learning, and leadership.
          </p>
          
          <div>
            <p className="font-bold mb-2">The doctoral program will provide insights and methodologies that are directly applicable to:</p>
            <div className="space-y-6 mt-4">
              <div className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5" style={{ color: TEAL }} />
                  <h3 className="font-semibold">GenAI First Mindset</h3>
                </div>
                <p className="text-gray-700">
                  Deepening my understanding of educational technology and instructional design will enable me to 
                  enhance the integration of AI tools into our clinical competency and training offerings. This 
                  directly supports our company's AI-first strategic approach and aligns with our corporate goal 
                  of embedding AI-first solutions into key processes (e.g., Care360, CR Advance).
                </p>
              </div>

              <div className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Unlock className="h-5 w-5" style={{ color: TEAL }} />
                  <h3 className="font-semibold">Unlock the Potential of the EDU Segment</h3>
                </div>
                <p className="text-gray-700">
                  By leveraging technology and AI, I can assist in the company's goal to deliver on an EDU plan includes expanding the CR Institute and SILAS 
                  integrations. Pursuing a doctoral program in Educational Technology will provide the necessary expertise 
                  to drive and enhance these initiatives, focusing on effective integration of digital learning 
                  platforms and scaling education solutions for professionals in autism and IDD care.
                </p>
              </div>

              <div className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5" style={{ color: TEAL }} />
                  <h3 className="font-semibold">Improve Customer Experience and Employee Development</h3>
                </div>
                <p className="text-gray-700">
                  By acquiring advanced knowledge in instructional technologies and AI, I will help drive 
                  initiatives to improve training, user experience for our clients, and employee development. 
                  This will ultimately contribute to our goal of securing high client satisfaction and 
                  improving employee experience.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits to Company */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-6 w-6" style={{ color: TEAL }} />
            <span>Benefits to the Company</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">By sponsoring this doctoral program, CentralReach will benefit from:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5" style={{ color: TEAL }} />
                <h3 className="text-lg font-semibold">Enhanced Innovation in Training Solutions</h3>
              </div>
              <p className="text-gray-700">
                Developing AI-driven, data-backed training solutions to advance clinical competencies for behavior analysts and educators.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-5 w-5" style={{ color: TEAL }} />
                <h3 className="text-lg font-semibold">Research-Driven Insights</h3>
              </div>
              <p className="text-gray-700">
                Leveraging research findings to improve the scalability and effectiveness of training programs, such as the integration of Care Co Pilot and CR Advance.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Flag className="h-5 w-5" style={{ color: TEAL }} />
                <h3 className="text-lg font-semibold">Improved Strategic Execution</h3>
              </div>
              <p className="text-gray-700">
                Supporting corporate goals of scaling CentralReach software platforms and advancing the AI-first initiatives across the company by staying at the forefront of educational technology trends.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Ruler className="h-5 w-5" style={{ color: TEAL }} />
                <h3 className="text-lg font-semibold">Measurable Contributions</h3>
              </div>
              <p className="text-gray-700">
                Direct, measurable contributions to our company's strategic goals and emphasis on clinician-guided thought leadership.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" style={{ color: TEAL }} />
            <span>Request</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            I am requesting financial support to pursue this doctoral program, including tuition coverage and related educational expenses. I've attached cost estimates for the programs to which I've applied. This investment will yield ongoing returns through enhanced innovation, improved product offerings, and strengthened market position.
          </p>
          
          <div 
            onClick={() => navigate('/cost-estimates')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-90 transition-colors cursor-pointer" 
            style={{ backgroundColor: TEAL, color: 'white' }}
          >
            <DollarSign className="h-4 w-4" />
            View Cost Estimates
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
