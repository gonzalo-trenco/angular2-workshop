import { OnInit, Component } from '@angular/core';
import { Particle } from '../particle';
import { ParticleDetailComponent } from '../particle-detail/particle-detail.component'
import { ParticleService } from '../particle.service';

@Component({
    selector: 'particles',
    templateUrl: 'app/particles/particles.component.html',
    styleUrls: ['app/particles/particles.component.css'],
    directives: [ParticleDetailComponent]
})
export class ParticlesComponent implements OnInit {

    constructor(private _particleService: ParticleService) {}

    titulo: string = 'Standard model';
    particles = [];
    selectedParticle: Particle;
    
    private selectParticle(particle: Particle) {
        this.selectedParticle = particle;
    }

    ngOnInit() {
        this._particleService
            .getParticles()
            .then(particles => this.particles = particles);
    }

}