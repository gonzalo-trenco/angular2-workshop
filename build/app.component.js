System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent, Particle;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = 'Standard model';
                    this.particle = {
                        id: 'u',
                        name: 'up',
                        mass: '2.3MeV/c²',
                        charge: '2/3',
                        spin: '1/2',
                        type: 'Quark',
                        forces: ['Electromagnetic', 'Strong', 'Weak']
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1> My app: {{titulo}}</h1>\n    <h2 [style.fontWeight]=\"bold\"> Details of {{particle.type}} {{particle.name}}</h2>\n    <p>Masa: {{particle.mass}}</p>\n    <p>Carga: {{particle.charge}}</p>\n    <p>Spin: {{particle.spin}}</p>\n    <p>Type: {{particle.type}}</p>\n    <p>Fuerzas: {{particle.forces.join(', ')}}</p>\n    <div>\n        <label>Ajusta la masa: </label>\n        <input [(ngModel)]=\"particle.mass\" placeholder=\"masa\">\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            Particle = (function () {
                function Particle() {
                }
                return Particle;
            }());
            exports_1("Particle", Particle);
        }
    }
});
//# sourceMappingURL=app.component.js.map