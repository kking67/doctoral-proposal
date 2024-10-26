import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProposalDashboard from './pages/proposal-dashboard';
import CostEstimates from './pages/cost-estimates';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProposalDashboard />} />
        <Route path="/cost-estimates" element={<CostEstimates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
