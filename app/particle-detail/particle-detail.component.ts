import { Component, Input } from '@angular/core';
import { Particle } from '../particle';

@Component({
    selector: 'particle-detail',
    templateUrl: 'app/particle-detail/particle-detail.html'
})
export class ParticleDetailComponent {
    @Input()
    particle: Particle;
}