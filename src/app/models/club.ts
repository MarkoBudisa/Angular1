import { Stadium } from './stadium';

export interface Club {
  id: number;
  name: string;
  yearOfFound: string;
  country: string;
  owner: string;
  colors: string;
  pictureOfLogo: string;
  stadium: Stadium;
}
