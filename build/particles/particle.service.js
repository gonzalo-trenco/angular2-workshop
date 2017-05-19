System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ParticleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ParticleService = (function () {
                function ParticleService(http) {
                    this.http = http;
                    this.particlesUrl = 'app/mock/particles.json';
                }
                ParticleService.prototype.handleError = function (err) {
                    console.error('An error occurred:', err);
                    return Promise.reject(err.message || err);
                };
                ParticleService.prototype.getParticles = function () {
                    return this.http.get(this.particlesUrl)
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ParticleService.prototype.getParticle = function (id) {
                    return this.getParticles().then(function (particles) { return particles.filter(function (particle) { return particle.id === id; })[0]; });
                };
                ParticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ParticleService);
                return ParticleService;
            }());
            exports_1("ParticleService", ParticleService);
        }
    }
});
//# sourceMappingURL=particle.service.js.map