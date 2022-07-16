export interface IData {
  brand: string;
  name: string;
  img: string;
  gender: string;
  stock: number;
  material: string;
  color: string;
  releaseYear: number;
  isPopular: string;
}

export interface IFilters {
  filterByBrend: string[] | [];
  filterByGender: string[] | [];
  filterByMaterial: string[] | [];
  filterByColor: string[] | [];
  filterByQuantity: number[] | [];
  filterByRelease: number[] | [];
  isPopular?: string[] | [];
}
export interface ISet {
  dataS: string;
}
export interface IDataForBuild {
  data?: Array<IData>;
  length: number;
}
