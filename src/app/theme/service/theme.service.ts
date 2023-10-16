import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ThemeModule} from "../theme.module";
import {Theme} from "../theme.model";

@Injectable({
  providedIn: ThemeModule
})
export class ThemeService {

  themes: Theme[] = [
    {
      name: 'emerald',
      type: 'light'
    },
    {
      name: 'dark',
      type: 'dark'
    }
  ]

  private themeSubject$ = new BehaviorSubject<Theme>(this.themes[0]);

  constructor() { }

  get theme$() {
    return this.themeSubject$.asObservable();
  }

  get theme(): Theme{
    return this.themeSubject$.getValue();
  }

  switchTheme(type: string) {
    this.themes.forEach(t => {
      if (t.type === type) {
        this.themeSubject$.next(t);
      }
    });
  }
}
