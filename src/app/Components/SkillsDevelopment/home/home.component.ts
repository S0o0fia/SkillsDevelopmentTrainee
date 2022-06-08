import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItems } from 'src/app/Helpers/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	currentUrl            : any;
	root                  : any = 'ltr';
	layout                : any = 'ltr';
	currentLang           : any = 'en';
	customizerIn          : boolean = false;
	showSettings          : boolean = false;
	chatpanelOpen         : boolean = false;
	sidenavOpen           : boolean = true;
	isMobile              : boolean = false;
	isFullscreen          : boolean = false;
	collapseSidebarStatus : boolean;
	header                : string;
	dark                  : boolean;
	compactSidebar        : boolean;
	isMobileStatus        : boolean;
	sidenavMode           : string = 'side';
	popupDeleteResponse   : any;
	sidebarColor          : any;
	url                   : string;
	windowSize            : number;
	private _routerEventsSubscription  : Subscription;
	private _router                    : Subscription;
	@ViewChild('sidenav',{static : true}) sidenav;

	sideBarFilterClass : any = [
		{
			sideBarSelect  :"sidebar-color-1",
			colorSelect    :"sidebar-color-dark"
		},
		{
			sideBarSelect  :"sidebar-color-2",
			colorSelect    :"sidebar-color-primary",
		},
		{
			sideBarSelect  :"sidebar-color-3",
			colorSelect    :"sidebar-color-accent"
		},
		{
			sideBarSelect  :"sidebar-color-4",
			colorSelect    :"sidebar-color-warn"
		},
		{
			sideBarSelect  :"sidebar-color-5",
			colorSelect    :"sidebar-color-green"
		}
	]

	headerFilterClass : any = [
		{
			headerSelect  :"header-color-1",
			colorSelect   :"header-color-dark"
		},
		{
			headerSelect  :"header-color-2",
			colorSelect   :"header-color-primary"
		},
		{
			headerSelect  :"header-color-3",
			colorSelect   :"header-color-accent"
		},
		{
			headerSelect  :"header-color-4",
			colorSelect   :"header-color-warning"
		},
		{
			headerSelect  :"header-color-5",
			colorSelect   :"header-color-green"
		}
	]

	chatList : any [] = [
		{
			image : "assets/img/user-1.jpg",
			name: "John Smith",
			chat : "Lorem ipsum simply dummy",
			mode : "online"
		},
		{
			image : "assets/img/user-2.jpg",
			name: "Amanda Brown",
			chat : "Lorem ipsum simply dummy",
			mode : "online"
		},
		{
			image : "assets/img/user-3.jpg",
			name: "Justin Randolf",
			chat : "Lorem ipsum simply dummy",
			mode : "offline"
		},
		{
			image : "assets/img/user-4.jpg",
			name: "Randy SunSung",
			chat : "Lorem ipsum simply dummy",
			mode : "online"
		},
		{
			image : "assets/img/user-5.jpg",
			name: "Lisa Myth",
			chat : "Lorem ipsum simply dummy",
			mode : "online"
		},
	]

	constructor(
					public menuItems: MenuItems,
					private router: Router,
					private activatedRoute: ActivatedRoute ) {


	}

	ngOnInit() {
	}

	ngOnDestroy() {
		this._router.unsubscribe();
	}

	/**
	  *As router outlet will emit an activate event any time a new component is being instantiated.
	  */
	onActivate(e, scrollContainer) {
		scrollContainer.scrollTop = 0;
	}

	/**
	  * toggleFullscreen method is used to show a template in fullscreen.
	  */
	toggleFullscreen() {

	}

	/**
	  * customizerFunction is used to open and close the customizer.
	  */
	customizerFunction() {
		this.customizerIn = !this.customizerIn;
	}

	/**
	  * addClassOnBody method is used to add a add or remove class on body.
	  */
	addClassOnBody(event) {
		var body = document.body;
		if(event.checked){
			body.classList.add("dark-theme-active");
		}else{
			body.classList.remove('dark-theme-active');
		}
	}

	/**
	  * changeRTL method is used to change the layout of template.
	  */
	changeRTL(isChecked) {
		if(isChecked){
			this.layout = "rtl"
		}
		else {
			this.layout = "ltr"
		}
	}

	/**
	  * toggleSidebar method is used a toggle a side nav bar.
	  */
	toggleSidebar() {

	}

	/**
	  * logOut method is used to log out the  template.
	  */
	logOut() {

	}

	/**
	  * onDelete function is used to open the delete dialog.
	  */
	onDelete(cart){
		}

	/**
	  * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
	  */
	getPopupDeleteResponse(response:any,cart){

	}

	/**
	  * sidebarFilter function filter the color for sidebar section.
	  */
	sidebarFilter(selectedFilter){
		for(var i = 0; i<this.sideBarFilterClass.length; i++){
			document.getElementById('main-app').classList.remove(this.sideBarFilterClass[i].colorSelect);
			if(this.sideBarFilterClass[i].colorSelect == selectedFilter.colorSelect){
				document.getElementById('main-app').classList.add(this.sideBarFilterClass[i].colorSelect);
			}
		}
		document.querySelector('.radius-circle').classList.remove('radius-circle');
		document.getElementById(selectedFilter.sideBarSelect).classList.add('radius-circle');
	}

	/**
	  * headerFilter function filter the color for header section.
	  */
	headerFilter(selectedFilter) {
		for(var i = 0; i<this.headerFilterClass.length; i++){
			document.getElementById('main-app').classList.remove(this.headerFilterClass[i].colorSelect);
			if(this.headerFilterClass[i].colorSelect == selectedFilter.colorSelect){
				document.getElementById('main-app').classList.add(this.headerFilterClass[i].colorSelect);
			}
		}
		document.querySelector('.radius-active').classList.remove('radius-active');
		document.getElementById(selectedFilter.headerSelect).classList.add('radius-active');
	}

	/**
	  *chatMenu method is used to toggle a chat menu list.
	  */
	chatMenu() {
		document.getElementById("gene-chat").classList.toggle("show-chat-list");
	}

	/**
	  * onChatOpen method is used to open a chat window.
	  */
	onChatOpen() {
		document.getElementById('chat-open').classList.toggle('show-chat-window');
	}

	/**
	  * onChatWindowClose method is used to close the chat window.
	  */
	chatWindowClose(){
		document.getElementById("chat-open").classList.remove("show-chat-window");
	}

	collapseSidebar(event){


	}

	//onResize method is used to set the side bar according to window width.
	onResize(event){
		this.windowSize = event.target.innerWidth;
		this.resizeSideBar();
	}

	//customizeSidebar method is used to change the side bar behaviour.
	customizeSidebar(){


	}

	//To resize the side bar according to window width.
	resizeSideBar(){

	}
}
