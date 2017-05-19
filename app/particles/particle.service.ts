import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Particle } from './particle';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ParticleService {
    private particlesUrl = 'app/mock/particles.json';
    constructor(private http: Http) { }
    private handleError(err: any) {
        console.error('An error occurred:', err);
        return Promise.reject(err.message || err);
    }
    public getParticles(): Promise<Particle[]> {
        return this.http.get(this.particlesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    public getParticle(id) {
        return this.getParticles().then(
            particles => particles.filter(
                particle => particle.id === id
            )[0]
        )
    }
}