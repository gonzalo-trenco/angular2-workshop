System.register(['@angular/core', '../particle'], function(exports_1, context_1) {
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
    var core_1, particle_1;
    var ParticleDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_1_1) {
                particle_1 = particle_1_1;
            }],
        execute: function() {
            ParticleDetailComponent = (function () {
                function ParticleDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof particle_1.Particle !== 'undefined' && particle_1.Particle) === 'function' && _a) || Object)
                ], ParticleDetailComponent.prototype, "particle", void 0);
                ParticleDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'particle-detail',
                        templateUrl: 'app/particle-detail/particle-detail.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParticleDetailComponent);
                return ParticleDetailComponent;
                var _a;
            }());
            exports_1("ParticleDetailComponent", ParticleDetailComponent);
        }
    }
});
//# sourceMappingURL=particle-detail.component.js.map