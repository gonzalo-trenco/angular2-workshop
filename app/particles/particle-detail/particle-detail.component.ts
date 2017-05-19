import { Component, OnInit, Inject } from '@angular/core';
import { Particle } from '../particle';
import { ParticleService } from '../particle.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'particle-detail',
    templateUrl: 'app/particles/particle-detail/particle-detail.html'
})
export class ParticleDetailComponent {
    particle: Particle;
    constructor(@Inject(window) private _window, private _ParticleService: ParticleService, private _routeParams: RouteParams) {}
    ngOnInit() {
        let id  = this._routeParams.get('id');
        this._ParticleService.getParticle(id)
        .then(particle => this.particle = particle);
    }
    goBack() {
        this._window.history.back();
    }
}