export interface RepoCardProps {
  id: string;
  name: string;
  url: string;
  status: string;
  langs: { id: number; label: string }[];
}
