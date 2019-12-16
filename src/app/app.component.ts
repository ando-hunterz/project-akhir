import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('home <=> login, homepage <=> add, homepage <=> group, homepage <=> search, search <=> profile, search <=> group', [
        style({ position: 'relative', height: '86vh' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('0.5s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ]),
       transition('login <=> homepage, home <=> regist, regist <=> login, profile <=> update, homepage <=> about, homepage <=> search', [
        style({ position: 'relative', height: '150vh' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0})]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity:0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ]),
       transition('homepage <=> detail, homepage <=> profile, profile <=> group, group <=> add, profile <=> add, add <=> about', [
        style({ position: 'relative', height: '100vh' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ]),
       transition('add <=> search, group <=> about, profile <=> about, homepage <=> search, search <=> about', [
        style({ position: 'relative', height: '100vh' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ]),
       transition('detail <=> search, group <=> detail, detail <=> add, detail <=> about, detail <=> profile', [
        style({ position: 'relative', height: '100vh' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ]),
    ])
  ]

})

export class AppComponent {
  title = 'Mahasiswa App';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
