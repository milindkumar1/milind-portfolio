export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Neural Network",
    year: 2024,
    description:
      "I built a neural network from scratch using Python and NumPy. The neural network is trained on ....",
    url: "https://example.com/",
  },
];
