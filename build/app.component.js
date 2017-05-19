System.register(['@angular/core', './particle-detail/particle-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, particle_detail_component_1;
    var AppComponent, PARTICLES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_detail_component_1_1) {
                particle_detail_component_1 = particle_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = 'Standard model';
                    this.particles = PARTICLES;
                }
                AppComponent.prototype.selectParticle = function (particle) {
                    this.selectedParticle = particle;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [particle_detail_component_1.ParticleDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            PARTICLES = [
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
        }
    }
});
//# sourceMappingURL=app.component.js.map