export type Status = {
  id: number;
  label: string;
};

export type Lang = {
  id: number;
  label: string;
};

export type Repo = {
  id: string;
  isPrivate: number;
  name: string;
  url: string;
  status: Status;
  langs: Lang[];
};
