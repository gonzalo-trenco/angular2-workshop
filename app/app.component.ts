import { Component } from '@angular/core';
import { ParticleService } from './particle.service';
import { ParticlesComponent } from './particles/particles.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <particles></particles>
  `,
  directives: [ParticlesComponent],
  providers: [
    ParticleService
  ]
})
export class AppComponent {
  titulo = 'Standard Model';
}