export interface Project {
  id: string;
  num: string;
  category: string;
  source: string;
  title: string;
  summary: string;
  tags: string[];
  linkText: string;
  linkUrl: string;
  liveUrl?: string;
  isExternal: boolean;
  borderColor: 'border-primary' | 'border-secondary';
  badgeColor?: string;
  hideWebsiteButton?: boolean;
  deepDive: {
    tagline: string;
    architecture: string;
    highlights: string[];
    role: string;
    period: string;
    stackDetails: { category: string; tools: string[] }[];
    interactiveType?: 'terminal' | 'vision' | 'analytics' | 'kanban' | 'network' | 'nutrition';
  };
}

export interface TelemetryStat {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}
