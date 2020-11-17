import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { User } from "../../models/user.interface";
import { UserService } from "../../services";
import { MenuItem } from "./menuitem.model";
// import { Movie } from "../../../feature/contact/contact-list/movie.model";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
//   movies: Movie[] =[  
//     {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
//     {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
//     {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
//     {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
// ] 
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  title = "dynamic-sidebar-menu";
  finalMenu: any[] = [];
  menuLoaded: Boolean;
  menu: MenuItem[];

  user: User;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router, private userService: UserService) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = "";
    this.pushRightClass = "push-right";
    this.user = this.userService.getCurrentUser();
    
    this.menu = [
      {
        id: "1",
        text: "Contact",
        action: undefined,
        icon: "home",
        menuFatherId: undefined,
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "2",
        text: "Manage Contact",
        action: "contacts",
        icon: "home",
        menuFatherId: "1",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "3",
        text: "User Management",
        action: undefined,
        icon: "location_on",
        menuFatherId: undefined,
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "4",
        text: "Manage User",
        action: "ManageUser",
        icon: "phone_enabled",
        menuFatherId: "3",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "5",
        text: "Manage Role",
        action: "/action",
        icon: "voicemail",
        menuFatherId: "3",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "6",
        text: "Manage Option",
        action: "/action",
        icon: "home",
        menuFatherId: "3",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "7",
        text: "Session Activity",
        action: undefined,
        icon: "vpn_key",
        menuFatherId: undefined,
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      {
        id: "8",
        text: "Session Logs",
        action: "sessionlog",
        icon: "sentiment_satisfied_alt",
        menuFatherId: "7",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      
      {
        id: "9",
        text: "Test",
        action: "test",
        icon: "sentiment_satisfied_alt",
        menuFatherId: undefined,
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      },
      
      {
        id: "9",
        text: "Test",
        action: "test",
        icon: "sentiment_satisfied_alt",
        menuFatherId: "9",
        opacity: undefined,
        children: undefined,
        isCollapsed:undefined
      }
      // {
      //   id: "8",
      //   text: "Item2.1.1.1",
      //   action: "/action",
      //   icon: "rss_feed",
      //   menuFatherId: "7",
      //   opacity: undefined,
      //   children: undefined,
      //   isCollapsed:undefined
      // },
      // {
      //   id: "9",
      //   text: "Item3.1",
      //   action: "/action",
      //   icon: "add_circle_outline",
      //   menuFatherId: "3",
      //   opacity: undefined,
      //   children: undefined,
      //   isCollapsed:undefined
      // },
    ];
    this.renderMenu(this.menu);
  }
  renderMenu(menu: MenuItem[]) {
    while (menu.length > 0) {
      menu.forEach((menuItem) => {
        menuItem.children = [];

        if (!menuItem.menuFatherId) {
          const index: number = menu.indexOf(menuItem);
          if (index !== -1) {
            menu.splice(index, 1);
          }
          menuItem.opacity = 0;
          this.finalMenu.push(menuItem);
        } else {
          const father = menuItem.menuFatherId;

          this.serachFather(this.finalMenu, father, menuItem, menu);
        }
      });
    }
    this.menuLoaded = true;
  }

  serachFather(menuArray: MenuItem[], father, menuItem: MenuItem, menu) {
    menuArray.forEach((menuPainted) => {
      if (menuPainted.id === father) {
        menuItem.opacity = menuPainted.opacity + 1;
        menuPainted.children.push(menuItem);

        const index: number = menu.indexOf(menuItem);
        if (index !== -1) {
          menu.splice(index, 1);
        }
      } else {
        this.serachFather(menuPainted.children, father, menuItem, menu);
      }
    });
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }
}
