System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1;
    var KorpaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            KorpaComponent = (function () {
                function KorpaComponent(http) {
                    var _this = this;
                    this.values = [];
                    http.get('proizvodi.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (proizvodi) { return _this.proizvodi = proizvodi; });
                }
                KorpaComponent.prototype.ngOnInit = function () {
                    var keys = Object.keys(localStorage);
                    var i = keys.length - 1;
                    var j = keys.length - 1;
                    var o = 0;
                    var kol = 0;
                    var cena = 0;
                    while (i--) {
                        this.values.push(JSON.parse(localStorage.getItem(keys[i])));
                    }
                    while (j--) {
                        kol = kol + parseInt(this.values[o].kolicina);
                        cena = cena + (parseInt(this.values[o].cena) * parseInt(this.values[o].kolicina) / 1000);
                        o++;
                    }
                    console.log(kol);
                    console.log(cena);
                    this.kolRa = cena;
                };
                KorpaComponent.prototype.obrisiStavku = function (item) {
                    localStorage.removeItem(item.id);
                    this.ngOnInit();
                    location.reload();
                };
                KorpaComponent = __decorate([
                    core_1.Component({
                        selector: 'Korpa',
                        templateUrl: 'app/korpa/korpa.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], KorpaComponent);
                return KorpaComponent;
            }());
            exports_1("KorpaComponent", KorpaComponent);
        }
    }
});
//# sourceMappingURL=korpa.component.js.map