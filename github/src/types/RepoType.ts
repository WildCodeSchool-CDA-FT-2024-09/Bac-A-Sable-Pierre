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
  label: string;
};

export interface RepoDetail {
  id: string;
  name: string;
  url: string;
  status: {
    id: number;
    label: string;
  };
  langs: {
    id: number;
    label: string;
  }[];
}
