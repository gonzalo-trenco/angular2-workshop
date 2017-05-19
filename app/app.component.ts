import { OnInit, Component } from '@angular/core';
import { Particle } from './particle';
import { ParticleDetailComponent } from './particle-detail/particle-detail.component'
import { ParticleService } from './particle.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ParticleDetailComponent],
    providers: [ParticleService]
})
export class AppComponent implements OnInit {

    constructor(private _particleService: ParticleService) {}

    titulo: string = 'Standard model';
    particles: Array<object>;
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