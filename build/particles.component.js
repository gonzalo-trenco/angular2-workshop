System.register(['@angular/core', './particle-detail/particle-detail.component', './particle.service'], function(exports_1, context_1) {
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
    var core_1, particle_detail_component_1, particle_service_1;
    var ParticlesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_detail_component_1_1) {
                particle_detail_component_1 = particle_detail_component_1_1;
            },
            function (particle_service_1_1) {
                particle_service_1 = particle_service_1_1;
            }],
        execute: function() {
            ParticlesComponent = (function () {
                function ParticlesComponent(_particleService) {
                    this._particleService = _particleService;
                    this.titulo = 'Standard model';
                    this.particles = [];
                }
                ParticlesComponent.prototype.selectParticle = function (particle) {
                    this.selectedParticle = particle;
                };
                ParticlesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._particleService
                        .getParticles()
                        .then(function (particles) { return _this.particles = particles; });
                };
                ParticlesComponent = __decorate([
                    core_1.Component({
                        selector: 'particles',
                        templateUrl: 'app/particles.component.html',
                        styleUrls: ['app/particles.component.css'],
                        directives: [particle_detail_component_1.ParticleDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [particle_service_1.ParticleService])
                ], ParticlesComponent);
                return ParticlesComponent;
            }());
            exports_1("ParticlesComponent", ParticlesComponent);
        }
    }
});
//# sourceMappingURL=particles.component.js.map