export type Freelancer = {
  id: number;
  name: string;
  rating: number;
  views: number;
  post: string;
  description: string;
  payRate: { amount: number; type: "monthly" | "day" };
  hyssscore: number;
  skills: string[];
  profileImage?: string;
};
