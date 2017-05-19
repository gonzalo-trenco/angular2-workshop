import { Component } from '@angular/core';
import { ParticleService } from './particles/particle.service';
import { ParticlesComponent } from './particles/particles.component';
import { ParticleDetailComponent } from './particles/particle-detail/particle-detail.component';
import { FamiliesComponent } from './families/families.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ParticleService,
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/particles',
    name: 'Particles',
    component: ParticlesComponent,
    useAsDefault: true
  },
  {
    path: '/families',
    name: 'Families',
    component: FamiliesComponent
  },
  {
    path: '/particle-detail/:id',
    name: 'ParticleDetail',
    component: ParticleDetailComponent
  }
])
export class AppComponent {
  title = 'Standard Model';
}