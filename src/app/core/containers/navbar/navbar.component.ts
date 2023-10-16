import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../../theme/service/theme.service";
import {Theme} from "../../../theme/theme.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: { "class": "navbar navbar-expand-lg bg-base-100 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-80"}
})
export class NavbarComponent implements OnInit{

  theme!:Theme;
  switchForTheme!: FormControl<boolean>;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.theme = this.themeService.theme;
    this.switchForTheme = new FormControl<boolean>(this.theme.type === 'light', {nonNullable: true});
  }

  switchTheme() {
    this.themeService.switchTheme(this.switchForTheme.value ? 'dark' : 'light');
  }
}
