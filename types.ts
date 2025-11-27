export enum TaskStatus {
  RECRUITING = '招募中',
  IN_PROGRESS = '进行中',
  COMPLETED = '已完成',
}

export enum TaskDifficulty {
  EASY = '初级',
  MEDIUM = '中级',
  HARD = '高级',
}

export interface ProjectTask {
  id: string;
  title: string;
  category: string;
  topic: string;
  language: string;
  difficulty: TaskDifficulty;
  deadline: string;
  status: TaskStatus;
  description: string;
}

export interface Term {
  id: string;
  term: string;
  translation: string;
  category: string;
  example: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  type: 'Online' | 'Offline' | 'PDF';
  targetLevel: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  partner: string;
  type: string;
  stats: string;
  imageUrl: string;
}