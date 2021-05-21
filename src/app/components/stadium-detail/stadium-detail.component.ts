import { Component, Input, OnInit } from '@angular/core';
import { Stadium } from 'src/app/models/stadium';

@Component({
  selector: 'app-stadium-detail',
  templateUrl: './stadium-detail.component.html',
  styleUrls: ['./stadium-detail.component.css'],
})
export class StadiumDetailComponent implements OnInit {
  @Input() stadium: Stadium = {
    id: 0,
    name: '',
    capacity: 0,
    openDate: '',
    picture: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
