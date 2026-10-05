// Demo data from the corrected prototype (today = Wed 7 Oct 2026).
// TODO(Angela): replace with the API (EntriesService, WeeksService) — hand-written.

export interface DemoEntry {
  time: string;
  text: string;
  tags: string[];
}

export const DEFAULT_TAGS = [
  'Development', 'Debugging', 'Learning', 'Meeting', 'Documentation',
  'Design', 'Research', 'Testing', 'Admin', 'Other',
];

export const TODAY_ENTRIES: DemoEntry[] = [
  { time: '2h 00', text: 'Connected the Express API to MongoDB', tags: ['Development'] },
  { time: '1h 30', text: 'Tested the first three routes and fixed CORS errors', tags: ['Testing', 'Debugging'] },
];

export const WEEK_DAYS: { day: string; date: string; total: string; entries: DemoEntry[] }[] = [
  {
    day: 'Mon', date: '5 Oct', total: '5h 00',
    entries: [
      { time: '2h 00', text: 'Set up the project repository', tags: ['Development'] },
      { time: '3h 00', text: 'Read the Express documentation', tags: ['Learning'] },
    ],
  },
  {
    day: 'Tue', date: '6 Oct', total: '4h 45',
    entries: [
      { time: '3h 15', text: 'Built the Express server', tags: ['Development'] },
      { time: '1h 30', text: 'Daily team sync', tags: ['Meeting'] },
    ],
  },
  { day: 'Wed', date: '7 Oct', total: '3h 30', entries: TODAY_ENTRIES },
  { day: 'Thu', date: '8 Oct', total: '—', entries: [] },
  { day: 'Fri', date: '9 Oct', total: '—', entries: [] },
];

export const TIME_BY_TAG: { tag: string; time: string; percent: number; color: string }[] = [
  { tag: 'Development', time: '7h 15', percent: 54.7, color: '#1B2A5C' },
  { tag: 'Learning', time: '3h 00', percent: 22.6, color: '#FFD84A' },
  { tag: 'Meeting', time: '1h 30', percent: 11.3, color: '#6B7490' },
  { tag: 'Testing', time: '1h 30', percent: 11.3, color: '#B9C1D4' },
];
