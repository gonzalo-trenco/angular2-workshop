import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1> My app: {{titulo}}</h1>
    <h2 [style.fontWeight]="bold"> Details of {{particle.type}} {{particle.name}}</h2>
    <p>Masa: {{particle.mass}}</p>
    <p>Carga: {{particle.charge}}</p>
    <p>Spin: {{particle.spin}}</p>
    <p>Type: {{particle.type}}</p>
    <p>Fuerzas: {{particle.forces.join(', ')}}</p>
    <div>
        <label>Ajusta la masa: </label>
        <input [(ngModel)]="particle.mass" placeholder="masa">
    </div>`
})
export class AppComponent {
    titulo: string = 'Standard model';
    particle: Particle = {
        id: 'u',
        name: 'up',
        mass: '2.3MeV/c²',
        charge: '2/3',
        spin: '1/2',
        type: 'Quark',
        forces: ['Electromagnetic', 'Strong', 'Weak']
    };
}

export class Particle {
    id: string;
    name: string;
    mass: string;
    charge: string;
    spin: string;
    type: ParticleType;
    forces: Force[];
}

type ParticleType = 'Quark' | 'Lepton' | 'Boson';
type Force = 'Strong' | 'Electromagnetic' | 'Weak';