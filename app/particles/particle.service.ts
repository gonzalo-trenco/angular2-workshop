import { Injectable } from '@angular/core';
import { PARTICLES } from './mock-particles';

@Injectable()
export class ParticleService {
    getParticles() {
        return Promise.resolve(PARTICLES);
    }
    getParticle(id) {
        return this.getParticles().then(
            particles => particles.filter(
                particle => particle.id === id
            )[0]
        )
    }
}