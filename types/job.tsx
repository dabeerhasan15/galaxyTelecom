export type Job = {
  id: number;
  title: string;
  company: string;
  isHiring: boolean;
  location: string;
  rating: number;
  description: string;
  positions: string[];
  payRate: { amount: number; type: "monthly" | "day" };
  dates: string;
  skills: string[];
};
