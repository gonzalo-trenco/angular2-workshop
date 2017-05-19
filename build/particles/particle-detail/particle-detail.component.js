System.register(['@angular/core', '../particle.service', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, particle_service_1, router_deprecated_1;
    var ParticleDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_service_1_1) {
                particle_service_1 = particle_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            ParticleDetailComponent = (function () {
                function ParticleDetailComponent(_ParticleService, _routeParams) {
                    this._ParticleService = _ParticleService;
                    this._routeParams = _routeParams;
                }
                ParticleDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._ParticleService.getParticle(id)
                        .then(function (particle) { return _this.particle = particle; });
                };
                ParticleDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'particle-detail',
                        templateUrl: 'app/particles/particle-detail/particle-detail.html'
                    }), 
                    __metadata('design:paramtypes', [particle_service_1.ParticleService, router_deprecated_1.RouteParams])
                ], ParticleDetailComponent);
                return ParticleDetailComponent;
            }());
            exports_1("ParticleDetailComponent", ParticleDetailComponent);
        }
    }
});
//# sourceMappingURL=particle-detail.component.js.map