import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() CloseSideNavigation = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleClose(){
    this.CloseSideNavigation.emit();
  }

}
