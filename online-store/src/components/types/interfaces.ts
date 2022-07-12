export interface IData {
  brand?: string;
  name?: string;
  img?: string;
  gender?: string;
  stock?: number;
  material?: string;
  color?: string;
  releaseYear?: string;
  isPopular?: string;
}

export interface IFilters {
  filterByBrend?: string[];
  filterByGender?: string[];
  filterByMaterial?: string[];
  filterByColor?: string[];
  filterByQuantity?: number[];
  filterByRelease?: string[];
  isPopular?: string[];
}
