import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, ExternalLink, Info, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TEAL = '#00857a';

type Program = {
  school: string;
  creditHours: number;
  costPerCredit: number | string;
  totalCost: number | string;
  programUrl: string;
  notes?: string;
};

const programs: Program[] = [
  {
    school: "Boise State University",
    creditHours: 60,
    costPerCredit: "478.00-579.00",
    totalCost: "28,680-34,740",
    programUrl: "https://www.boisestate.edu/education-edd-et/",
  },
  {
    school: "University of South Carolina",
    creditHours: 60,
    costPerCredit: 572.25,
    totalCost: 34335,
    programUrl: "https://www.sc.edu/study/colleges_schools/education/study/areas/learning_design_technology/doctor_of_ed/index.php",
  },
  {
    school: "Arcadia University",
    creditHours: 51,
    costPerCredit: 1070,
    totalCost: 54570,
    programUrl: "http://catalog.arcadia.edu/preview_program.php?catoid=20&poid=3530&returnto=770&_gl=1*1umhpqy*_gcl_au*Njc2MzU2NzI0LjE3Mjk4NjU0MjY.*_ga*MTExNzg3NzE2OS4xNzI5ODY1NDI2*_ga_VWR0XB3Y5C*MTcyOTg4Mzk1MS4zLjEuMTcyOTg4Mzk5NS4xNi4wLjA.",
    notes: "*In-person option possible",
  },
  {
    school: "Arizona State University",
    creditHours: 90,
    costPerCredit: 576,
    totalCost: "34,560-51,840",
    programUrl: "https://asuonline.asu.edu/online-degree-programs/graduate/edd-leadership-and-innovation/",
    notes: "*Up to 30 master's credits may transfer",
  },
];

export default function CostEstimates() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <Button
        onClick={() => navigate('/')}
        variant="outline"
        className="mb-6 text-white hover:text-white"
        style={{ backgroundColor: TEAL }}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Proposal
      </Button>

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Program Cost Estimates</h1>
        <h2 className="text-xl text-gray-600">Doctoral Programs in Educational Technology/Leadership</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {programs.map((program) => (
          <ProgramCard key={program.school} program={program} />
        ))}
      </div>

      <footer className="text-center text-sm text-gray-500">
        <p>*Costs are estimated per the associated website as of 10.25.2024</p>
      </footer>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <School className="h-6 w-6" style={{ color: TEAL }} />
          {program.school}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <dl className="space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <dt className="font-semibold">Credit Hours Required:</dt>
            <dd>{program.creditHours} credits</dd>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <dt className="font-semibold">Cost per Credit Hour:</dt>
            <dd>${formatCurrency(program.costPerCredit)}</dd>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <dt className="font-semibold">Approximate Total:</dt>
            <dd className="text-lg font-bold" style={{ color: TEAL }}>
              ${formatCurrency(program.totalCost)}
            </dd>
          </div>
        </dl>
        {program.notes && (
          <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
            <Info className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: TEAL }} />
            <span>{program.notes}</span>
          </div>
        )}
        
        <Button
          onClick={() => window.open(program.programUrl, '_blank')}
          className="w-full text-white hover:text-white"
          style={{ backgroundColor: TEAL }}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Program Details
        </Button>
      </CardContent>
    </Card>
  );
}

function formatCurrency(value: string | number): string {
  if (typeof value === 'string') return value;
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
