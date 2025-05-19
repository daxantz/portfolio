export type Project = {
  id: number;
  image: image;
  title: string;
  skills: string[];
};

type image = {
  path: string;
  width: number;
  height: number;
};
