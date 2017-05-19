import { Injectable } from '@angular/core';
import { PARTICLES } from './mock-particles';

@Injectable()
export class ParticleService {
    getParticles() {
        return Promise.resolve(PARTICLES);
    }
}