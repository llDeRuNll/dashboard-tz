export const workQueueTabs = [
  { id: 'active', label: 'Active' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Completed' },
]

export const workQueueItems = {
  active: [
    {
      id: 'WQ-392',
      name: 'Renewal review',
      owner: 'J. McKay',
      due: 'Today',
      priority: 'High',
    },
    {
      id: 'WQ-404',
      name: 'Broker outreach',
      owner: 'A. Wong',
      due: 'Tomorrow',
      priority: 'Medium',
    },
  ],
  upcoming: [
    {
      id: 'WQ-410',
      name: 'Loss run analysis',
      owner: 'K. Patel',
      due: 'Mar 12',
      priority: 'Low',
    },
  ],
  completed: [
    {
      id: 'WQ-377',
      name: 'Pricing review',
      owner: 'S. Ortega',
      due: 'Mar 02',
      priority: 'Completed',
    },
  ],
}

export const portfolioGoals = [
  { id: 'premium', label: 'Premium Target', value: 72, detail: '$7.2M / $10M' },
  { id: 'retention', label: 'Retention', value: 88, detail: '88% / 90%' },
  { id: 'growth', label: 'Growth Accounts', value: 64, detail: '64 / 100' },
]

export const quickActions = [
  { id: 'new-submission', label: 'New Submission' },
  { id: 'request-info', label: 'Request Info' },
  { id: 'schedule-call', label: 'Schedule Call' },
  { id: 'create-brief', label: 'Create Brief' },
]

export const marketNews = [
  {
    id: 'news-1',
    title: 'Construction rates soften in Q2',
    source: 'MarketWatch',
    time: '2h ago',
  },
  {
    id: 'news-2',
    title: 'Transportation capacity tightens',
    source: 'Insurance Journal',
    time: '6h ago',
  },
  {
    id: 'news-3',
    title: 'Mid-market appetite expands',
    source: 'Carrier Insights',
    time: '1d ago',
  },
]

export const accounts = [
  {
    id: 'AC-118',
    name: 'Summit Logistics',
    segment: 'Transportation',
    triage: 'Priority',
    status: 'In Review',
    owner: 'R. Meyers',
    premium: '$1.8M',
  },
  {
    id: 'AC-224',
    name: 'Northbridge Health',
    segment: 'Healthcare',
    triage: 'Watch',
    status: 'Pending Docs',
    owner: 'J. Alvarez',
    premium: '$2.3M',
  },
  {
    id: 'AC-306',
    name: 'Blue Peak Manufacturing',
    segment: 'Manufacturing',
    triage: 'Standard',
    status: 'Quoted',
    owner: 'M. Santos',
    premium: '$980K',
  },
  {
    id: 'AC-412',
    name: 'Crescent Retail Group',
    segment: 'Retail',
    triage: 'Priority',
    status: 'Bound',
    owner: 'L. Kim',
    premium: '$3.1M',
  },
]

export const accountDetails = {
  name: 'Summit Logistics',
  industry: 'Transportation & Warehousing',
  location: 'Dallas, TX',
  broker: 'Evergreen Partners',
  renewal: 'Aug 30, 2024',
  performanceMetrics: [
    { id: 'loss-ratio', label: 'Loss Ratio', value: '42%', trend: 'down' },
    { id: 'exposure', label: 'Exposure Change', value: '+8%', trend: 'up' },
    { id: 'premium', label: 'Premium at Risk', value: '$1.8M', trend: 'flat' },
  ],
  policies: [
    { id: 'auto', name: 'Auto Liability', limit: '$5M', status: 'Active' },
    { id: 'cargo', name: 'Cargo', limit: '$2M', status: 'Renewal' },
    { id: 'workers', name: 'Workers Comp', limit: '$1M', status: 'Active' },
  ],
  compliance: [
    { id: 'safety', label: 'Safety Program', status: 'On Track' },
    { id: 'claims', label: 'Claims Review', status: 'Needs Review' },
    { id: 'audits', label: 'Audit Completion', status: 'Complete' },
  ],
  winnability: {
    score: 76,
    drivers: [
      { id: 'pricing', label: 'Pricing Competitiveness', value: 82 },
      { id: 'relationship', label: 'Broker Relationship', value: 70 },
      { id: 'service', label: 'Service History', value: 78 },
    ],
    recommendations: [
      'Offer multi-year stability on Auto Liability.',
      'Highlight safety tech investments in proposal.',
      'Schedule leadership call with broker.',
    ],
  },
  communications: [
    {
      id: 'msg-1',
      sender: 'Jordan McKay',
      summary: 'Requested updated loss runs and fleet changes.',
      time: 'Today, 9:42 AM',
      attachments: ['loss-runs.pdf'],
    },
    {
      id: 'msg-2',
      sender: 'Nina Brooks',
      summary: 'Broker shared renewal timeline and expectations.',
      time: 'Yesterday, 4:18 PM',
      attachments: ['timeline.docx', 'notes.txt'],
    },
  ],
  policiesTable: [
    {
      id: 'PL-2201',
      line: 'Auto Liability',
      premium: '$920K',
      status: 'Active',
      renewal: 'Aug 30, 2024',
    },
    {
      id: 'PL-2202',
      line: 'Cargo',
      premium: '$460K',
      status: 'Renewal',
      renewal: 'Aug 30, 2024',
    },
    {
      id: 'PL-2203',
      line: 'Workers Comp',
      premium: '$420K',
      status: 'Active',
      renewal: 'Aug 30, 2024',
    },
  ],
}
