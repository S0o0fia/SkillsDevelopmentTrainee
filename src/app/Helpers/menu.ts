import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
   {
    state: 'AllAvaiblabeCourses',
    name: 'All Avaiblabe Courses',
    type: 'link',
    icon: 'library_books',
  } ,
  {
    state: 'RegistedCourses',
    name: 'Registed Courses',
    type: 'link',
    icon: 'library_book',
  }
  ,
  {
    state: 'Profile',
    name: 'Profile',
    type: 'button',
    icon: 'person_pin',
  }
  ,
  {
    state: 'Logout',
    name: 'Logout',
    type: 'button',
    icon: 'exit_to_app',
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  add(menu:any) {
    MENUITEMS.push(menu);
  }
}
