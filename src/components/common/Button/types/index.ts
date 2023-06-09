export type ButtonComponentTypes = {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};
