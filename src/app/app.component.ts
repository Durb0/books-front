import {Component, HostBinding, OnInit} from '@angular/core';
import {ThemeService} from "./theme/service/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "class": "bg-base-200 transition ease-in-out flex flex-col max-w-screen min-h-screen overflow-overlay",
  }
})
export class AppComponent implements OnInit{

  constructor(
    private themeService: ThemeService
  ) {
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      document.documentElement.setAttribute('data-theme', theme.name);
    });
  }


}
