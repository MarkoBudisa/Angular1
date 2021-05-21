import { Component } from '@angular/core';
import { Club } from './models/club';
import { Stadium } from './models/stadium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectone';

  public myStadium1: Stadium = {
    id: 1,
    name: 'Stamford Bridge',
    capacity: 40834,
    openDate: '28. April 1877.',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Stamford_Bridge_Clear_Skies.JPG/450px-Stamford_Bridge_Clear_Skies.JPG',
  };

  public myClub1: Club = {
    id: 1,
    name: 'Chelsea FC',
    yearOfFound: '10. March 1905.',
    country: 'England',
    owner: 'Roman Abramovich',
    colors: 'Blue',
    pictureOfLogo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/270px-Chelsea_FC.svg.png',
    stadium: this.myStadium1,
  };
  public myStadium2: Stadium = {
    id: 2,
    name: 'San Siro',
    capacity: 80018,
    openDate: '19. September 1926.',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2009-08_Derby-_AC_Milan_vs_Inter_at_San_Siro.jpg/465px-2009-08_Derby-_AC_Milan_vs_Inter_at_San_Siro.jpg',
  };

  public myClub2: Club = {
    id: 2,
    name: 'AC Milan',
    yearOfFound: '11. April 1899.',
    country: 'Italy',
    owner: 'Elliott Management Corporation',
    colors: 'Black and red',
    pictureOfLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/195px-Logo_of_AC_Milan.svg.png',
    stadium: this.myStadium2,
  };
  public myStadium3: Stadium = {
    id: 3,
    name: 'Estadio Metropolitano',
    capacity: 68456,
    openDate: '6. September 1994.',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Atletico_Madrid_1_Chelsea_2.jpg/300px-Atletico_Madrid_1_Chelsea_2.jpg',
  };

  public myClub3: Club = {
    id: 3,
    name: 'Club Atlético de Madrid',
    yearOfFound: '26. April 1903.',
    country: 'Spain',
    owner: 'Miguel Ángel Gil Marín',
    colors: 'Red and white',
    pictureOfLogo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/225px-Atletico_Madrid_2017_logo.svg.png',
    stadium: this.myStadium3,
  };
}
