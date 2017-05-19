import { OnInit, Component } from '@angular/core';
import { Particle } from './particle';
import { ParticleService } from './particle.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'particles',
    templateUrl: 'app/particles/particles.component.html',
    styleUrls: ['app/particles/particles.component.css']
})
export class ParticlesComponent implements OnInit {

    constructor(private _particleService: ParticleService, private _router: Router) { }

    titulo: string = 'Standard model';
    particles = [];
    selectedParticle: Particle;

    private selectParticle(particle: Particle) {
        this.selectedParticle = particle;
    }

    private gotoDetail() {
        this._router.navigate([
            'ParticleDetail', { id: this.selectedParticle.id }
        ])
    }
    ngOnInit() {
        this._particleService
            .getParticles()
            .then(particles => this.particles = particles);
    }

}