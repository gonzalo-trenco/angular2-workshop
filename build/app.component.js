System.register(['@angular/core', './particles/particle.service', './particles/particles.component', './particles/particle-detail/particle-detail.component', './families/families.component', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, particle_service_1, particles_component_1, particle_detail_component_1, families_component_1, router_deprecated_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (particle_service_1_1) {
                particle_service_1 = particle_service_1_1;
            },
            function (particles_component_1_1) {
                particles_component_1 = particles_component_1_1;
            },
            function (particle_detail_component_1_1) {
                particle_detail_component_1 = particle_detail_component_1_1;
            },
            function (families_component_1_1) {
                families_component_1 = families_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Standard Model';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <div>\n      <a [routerLink]=\"['Particles']\">Particles</a>\n      <a [routerLink]=\"['Families']\">Families</a>\n    </div>\n    <router-outlet></router-outlet>",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [
                            particle_service_1.ParticleService,
                            router_deprecated_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/particles',
                            name: 'Particles',
                            component: particles_component_1.ParticlesComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/families',
                            name: 'Families',
                            component: families_component_1.FamiliesComponent
                        },
                        {
                            path: '/particle-detail/:id',
                            name: 'ParticleDetail',
                            component: particle_detail_component_1.ParticleDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map