export const platform = { name: 'SportBrief', tagline: 'Sports UGC Marketplace' }

export const roles = {
  brand: {
    id: 'b1',
    role: 'brand',
    name: 'Peak Performance Co.',
    email: 'brand@sportbrief.com',
    password: 'demo123',
    company: 'Peak Performance Co.',
    industry: 'Sports Nutrition',
  },
  creator: {
    id: 'c1',
    role: 'creator',
    name: 'Marcus Chen',
    email: 'creator@sportbrief.com',
    password: 'demo123',
    sport: 'Basketball',
    verified: true,
    followers: '48K',
    rating: 4.9,
  },
  admin: {
    id: 'a1',
    role: 'admin',
    name: 'Platform Admin',
    email: 'admin@sportbrief.com',
    password: 'demo123',
  },
}

export const stats = {
  brand: { activeBriefs: 4, pendingApps: 12, awaitingApproval: 3, spent: '$24,800' },
  creator: { applications: 6, activeGigs: 2, earnings: '$8,420', approvalRate: '94%' },
  admin: { brands: 86, creators: 1240, verifiedCreators: 892, gmv: '$1.2M' },
}

export const briefs = [
  {
    id: 'br1',
    title: 'Pre-workout launch — 30s Reels',
    brand: 'Peak Performance Co.',
    sport: 'CrossFit',
    budget: '$2,500',
    deadline: 'Mar 28, 2026',
    slots: 3,
    applicants: 18,
    status: 'open',
    deliverables: '2× vertical Reels, 1× story set',
    requirements: 'Verified athlete, gym setting, product visible in first 3s',
  },
  {
    id: 'br2',
    title: 'Running shoe wear-test series',
    brand: 'Stride Labs',
    sport: 'Running',
    budget: '$4,000',
    deadline: 'Apr 5, 2026',
    slots: 2,
    applicants: 24,
    status: 'open',
    deliverables: '3× TikTok, 1× long-form review',
    requirements: 'Sub-4 marathon or equivalent, outdoor footage',
  },
  {
    id: 'br3',
    title: 'Youth basketball camp promo',
    brand: 'Hoops Academy',
    sport: 'Basketball',
    budget: '$1,800',
    deadline: 'Mar 20, 2026',
    slots: 1,
    applicants: 9,
    status: 'filled',
    deliverables: '1× 60s promo, 5× photo assets',
    requirements: 'College or pro experience, youth coaching background',
  },
  {
    id: 'br4',
    title: 'Recovery drink — post-game UGC',
    brand: 'Peak Performance Co.',
    sport: 'Soccer',
    budget: '$3,200',
    deadline: 'Apr 12, 2026',
    slots: 4,
    applicants: 31,
    status: 'open',
    deliverables: '2× Reels, raw B-roll pack',
    requirements: 'Active league player, locker room or pitch setting',
  },
]

export const applications = [
  { id: 'ap1', brief: 'Pre-workout launch — 30s Reels', creator: 'Marcus Chen', sport: 'Basketball', followers: '48K', status: 'accepted', applied: 'Mar 10' },
  { id: 'ap2', brief: 'Pre-workout launch — 30s Reels', creator: 'Sofia Reyes', sport: 'CrossFit', followers: '22K', status: 'pending', applied: 'Mar 11' },
  { id: 'ap3', brief: 'Pre-workout launch — 30s Reels', creator: 'Jake Morrison', sport: 'Football', followers: '91K', status: 'pending', applied: 'Mar 11' },
  { id: 'ap4', brief: 'Recovery drink — post-game UGC', creator: 'Elena Park', sport: 'Soccer', followers: '35K', status: 'pending', applied: 'Mar 12' },
  { id: 'ap5', brief: 'Running shoe wear-test series', creator: 'Marcus Chen', sport: 'Basketball', followers: '48K', status: 'shortlisted', applied: 'Mar 9' },
]

export const deliverables = [
  { id: 'd1', brief: 'Youth basketball camp promo', creator: 'Tyler Brooks', submitted: 'Mar 14', status: 'pending_review', type: 'Video', revision: 0 },
  { id: 'd2', brief: 'Pre-workout launch — 30s Reels', creator: 'Marcus Chen', submitted: 'Mar 15', status: 'revision_requested', type: 'Reels', revision: 1 },
  { id: 'd3', brief: 'Recovery drink — post-game UGC', creator: 'Elena Park', submitted: 'Mar 13', status: 'approved', type: 'Reels', revision: 0 },
  { id: 'd4', brief: 'Winter training series', creator: 'Sofia Reyes', submitted: 'Mar 8', status: 'paid', type: 'TikTok', revision: 0 },
]

export const payments = [
  { id: 'p1', brief: 'Winter training series', creator: 'Sofia Reyes', amount: '$2,200', status: 'completed', date: 'Mar 9' },
  { id: 'p2', brief: 'Recovery drink — post-game UGC', creator: 'Elena Park', amount: '$3,200', status: 'processing', date: 'Mar 15' },
  { id: 'p3', brief: 'Youth basketball camp promo', creator: 'Tyler Brooks', amount: '$1,800', status: 'held_escrow', date: '—' },
  { id: 'p4', brief: 'Pre-workout launch — 30s Reels', creator: 'Marcus Chen', amount: '$2,500', status: 'pending_approval', date: '—' },
]

export const creators = [
  { id: 'cr1', name: 'Marcus Chen', sport: 'Basketball', verified: true, followers: '48K', rating: 4.9, gigs: 24 },
  { id: 'cr2', name: 'Sofia Reyes', sport: 'CrossFit', verified: true, followers: '22K', rating: 4.8, gigs: 18 },
  { id: 'cr3', name: 'Jake Morrison', sport: 'Football', verified: true, followers: '91K', rating: 4.7, gigs: 31 },
  { id: 'cr4', name: 'Elena Park', sport: 'Soccer', verified: true, followers: '35K', rating: 5.0, gigs: 12 },
  { id: 'cr5', name: 'Ryan Walsh', sport: 'Running', verified: false, followers: '8K', rating: 4.5, gigs: 3 },
]

export const activity = [
  { time: '2 min ago', event: 'Elena Park submitted Reels for Recovery drink brief' },
  { time: '18 min ago', event: 'Jake Morrison applied to Pre-workout launch brief' },
  { time: '1 hr ago', event: 'Stride Labs posted new brief: Running shoe wear-test' },
  { time: '3 hr ago', event: 'Payment released to Sofia Reyes — $2,200' },
  { time: '5 hr ago', event: 'Marcus Chen verified as basketball creator' },
]

export const statusLabels = {
  open: 'Open',
  filled: 'Filled',
  pending: 'Pending',
  accepted: 'Accepted',
  shortlisted: 'Shortlisted',
  pending_review: 'Pending review',
  revision_requested: 'Revision requested',
  approved: 'Approved',
  paid: 'Paid',
  completed: 'Completed',
  processing: 'Processing',
  held_escrow: 'In escrow',
  pending_approval: 'Awaiting approval',
}
