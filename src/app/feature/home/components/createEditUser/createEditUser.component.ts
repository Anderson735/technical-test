import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createEditUser',
  templateUrl: './createEditUser.component.html',
  styleUrls: ['./createEditUser.component.scss'],
})
export class CreateEditUserComponent implements OnInit {
  public foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor() {}

  ngOnInit() {}
}
