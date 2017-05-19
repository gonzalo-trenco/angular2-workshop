import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1> My app: {{titulo}}</h1>
    <ul class="particles">
        <li *ngFor="let particle of particles" 
        (click)="selectParticle(particle)"
        [class.selected]="particle === selectedParticle">
            <span class="code">{{particle.id}}</span>
            {{particle.name}}
        </li>
    </ul>
    <div *ngIf="selectedParticle">
        <h2>Details for {{selectedParticle.type}} {{selectedParticle.name}}.</h2>
        <p>Masa: {{selectedParticle.mass}}</p>
        <p>Carga: {{selectedParticle.charge}}</p>
        <p>Spin: {{selectedParticle.spin}}</p>
        <p>Type: {{selectedParticle.type}}</p>
        <p>Fuerzas: {{selectedParticle.forces.join(', ')}}</p>
        <div>
            <label>Ajusta la masa: </label>
            <input [(ngModel)]="selectedParticle.mass" placeholder="masa">
        </div>
    </div>`,
    styles: [`
    .selected {
        background-color: #CFD8DC !important;
        color: white;
    }
    .particles {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
        float: left;
    }
    .particles li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 20px 4px 4px 20px;
    }
    .particles li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
    }
    .particles li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
    }
    .particles .text {
        position: relative;
        top: -3px;
    }
    .particles .code {
        display: inline-block;
        text-align: center;
        font-size: small;
        color: white;
        width: 1.2em;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 20px;
    }
    `]
})
export class AppComponent {
    titulo: string = 'Standard model';
    public particles = PARTICLES;
    public selectedParticle: Particle;
    public selectParticle(particle: Particle) {
        this.selectedParticle = particle;
    }
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
var PARTICLES: Particle[] = [
    { id: 'u', name: 'up', mass: '2.3MeV/c²', charge: '2/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 'd', name: 'down', mass: '4.8MeV/c²', charge: '1/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 'c', name: 'charm', mass: '1.275GeV/c²', charge: '2/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 's', name: 'strange', mass: '95MeV/c²', charge: '1/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 't', name: 'top', mass: '173.07GeV/c²', charge: '2/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 'b', name: 'bottom', mass: '4.18GeV/c²', charge: '1/3', spin: '1/2', type: 'Quark', forces: ['Electromagnetic', 'Strong', 'Weak'] },
    { id: 'e', name: 'electron', mass: '0.511MeV/c²', charge: '-1', spin: '1/2', type: 'Lepton', forces: ['Electromagnetic', 'Weak'] },
    { id: 'μ', name: 'muon', mass: '105.7MeV/c²', charge: '-1', spin: '1/2', type: 'Lepton', forces: ['Electromagnetic', 'Weak'] },
    { id: 'τ', name: 'tau', mass: '1.777GeV/c²', charge: '-1', spin: '1/2', type: 'Lepton', forces: ['Electromagnetic', 'Weak'] },
    { id: 'νe', name: 'electron neutrino', mass: '<2.2eV/c²', charge: '0', spin: '1/2', type: 'Lepton', forces: ['Weak'] },
    { id: 'νμ', name: 'muon neutrino', mass: '<0.17MeV/c²', charge: '0', spin: '1/2', type: 'Lepton', forces: ['Weak'] },
    { id: 'ντ', name: 'tau neutrino', mass: '<15.5MeV/c²', charge: '0', spin: '1/2', type: 'Lepton', forces: ['Weak'] },
    { id: 'g', name: 'gluon', mass: '0', charge: '0', spin: '1', type: 'Boson', forces: ['Strong'] },
    { id: 'γ', name: 'photon', mass: '0', charge: '0', spin: '1', type: 'Boson', forces: ['Electromagnetic'] },
    { id: 'Z', name: 'Z boson', mass: '0', charge: '0', spin: '1', type: 'Boson', forces: ['Weak'] },
    { id: 'W', name: 'W boson', mass: '0', charge: '0', spin: '±1', type: 'Boson', forces: ['Weak'] },
    { id: 'H', name: 'Higgs boson', mass: '0', charge: '0', spin: '0', type: 'Boson', forces: [] }
];