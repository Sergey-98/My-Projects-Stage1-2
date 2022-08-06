export type Car = {
  name: string;
  color: string;
  id: number;
};

export type UpdateDataResponse = {
  name: string;
  color: string;
};

export type CreateDataResponse = {
  name: string;
  color: string;
};

export type Winners = {
  id: number;
  wins: number;
  time: number;
}