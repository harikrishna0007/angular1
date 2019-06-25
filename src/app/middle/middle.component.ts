import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {


newArray = [{
 icon: "icon-screen-desktop",
 paragraph : "This theme will look great on any device, no matter the size!",
 headder : "Fully Responsive"
},
{
  icon: "icon-layers",
 paragraph : "Featuring the latest build of the new Bootstrap 4 framework!",
 headder : "Bootstrap 4 Ready"
},
{
  icon: "icon-check",
 paragraph : "Featuring the latest build of the new Bootstrap 4 framework!",
 headder : "Easy to Use" 
}

];
  constructor() { }

  ngOnInit() {
  }

}
