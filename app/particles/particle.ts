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