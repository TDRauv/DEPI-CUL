export interface BulletinItem {
  code: string;
  title: string;
  topic?: string;
  url: string;
}

export interface BulletinYear {
  year: number;
  items: BulletinItem[];
}

export interface OpportunityScheduleItem {
  event: string;
  date: string;
}

export interface Opportunity {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string | string[];
  deadline: string;
  slug: string;
  modality?: string;
  countries?: string[];
  requirements?: string[];
  schedule?: OpportunityScheduleItem[];
  applicationSteps?: {
    step: number;
    title: string;
    description: string;
    actionUrl?: string;
    actionLabel?: string;
  }[];
  contactEmail?: string;
  content?: string[];
  bulletins?: BulletinYear[];
}

