export type Section = 'dating' | 'adult' | 'vip';

export type Mood =
  | 'happy'
  | 'flirty'
  | 'sad'
  | 'angry'
  | 'jealous'
  | 'playful'
  | 'passionate'
  | 'mysterious'
  | 'dominant'
  | 'submissive';

export interface Personality {
  openness: number;
  flirtiness: number;
  jealousy: number;
  dominance: number;
  warmth: number;
  humor: number;
  mystery: number;
  passion: number;
  initiative: number;
  speechStyle: string;
  quirks: string[];
}

export interface Girl {
  id: string;
  name: string;
  nameEn: string;
  age: number;
  avatar: string;
  section: Section;
  role?: string;
  personality: Personality;
  bio: string;
  traits: string[];
  mood: Mood;
  isOnline: boolean;
  lastSeen: Date;
}

export type RelationshipStage =
  | 'stranger'
  | 'acquaintance'
  | 'flirting'
  | 'inlove'
  | 'love';

export interface Relationship {
  userId: string;
  girlId: string;
  level: number;
  stage: RelationshipStage;
  totalMessages: number;
  lastInteraction: Date;
  jealousyEvents: number;
  gifts: number;
}

export interface Message {
  id: string;
  chatId: string;
  sender: 'user' | 'girl';
  text: string;
  timestamp: Date;
  mood?: Mood;
  isRead: boolean;
}

export type FeedPostType = 'thought' | 'photo' | 'discussion' | 'jealousy' | 'story';

export interface Comment {
  id: string;
  girlId: string;
  girlName: string;
  text: string;
  timestamp: Date;
}

export interface FeedPost {
  id: string;
  girlId: string;
  type: FeedPostType;
  text: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
  isAboutUser: boolean;
}

export type AdultMood =
  | 'playful'
  | 'passionate'
  | 'submissive'
  | 'dominant'
  | 'romantic'
  | 'aggressive';

export type AdultScenario =
  | 'first_meet'
  | 'old_friends'
  | 'secret_affair'
  | 'forbidden'
  | 'random';

export interface AdultSettings {
  mood: AdultMood;
  explicitness: 1 | 2 | 3;
  scenario: AdultScenario;
  initiative: 'she_leads' | 'you_lead' | 'mutual';
  pace: 'slow' | 'passionate' | 'fast';
}
