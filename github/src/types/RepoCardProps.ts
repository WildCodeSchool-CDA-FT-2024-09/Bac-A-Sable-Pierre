export interface RepoCardProps {
  id: string;
  name: string;
  url: string;
  isPrivate: number;
  status: string;
  langs: { id: number; label: string }[];
}
