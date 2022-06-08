import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from 'src/app/Helpers/menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	@Input() menuList : any;
  @Input() verticalMenuStatus : boolean;

	constructor(  private router: Router,
                public menuItems: MenuItems) { }

	ngOnInit() {
	}

	//render to the crm page
	onClick(){
		var first = location.pathname.split('/')[1];
      if(first == 'horizontal'){
         this.router.navigate(['/horizontal/dashboard/crm']);
      }else {
         this.router.navigate(['/dashboard/crm']);
      }
	}

	/**
     * addMenuItem is used to add a new menu into menu list.
     */
    addMenuItem(): void {
      this.menuItems.add({
         state: 'pages',
         name: 'GENE MENU',
         type: 'sub',
         icon: 'trending_flat',
         children: [
            {state: 'blank', name: 'SUB MENU1'},
            {state: 'blank', name: 'SUB MENU2'}
         ]
      });
   }

   logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/Login']);
  }

}
