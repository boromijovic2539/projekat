System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1;
    var DodajFarmuComponent;
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
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DodajFarmuComponent = (function () {
                function DodajFarmuComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        naziv: ["", common_1.Validators.none],
                        podneblje: ["", common_1.Validators.none],
                        adresa: ["", common_1.Validators.none],
                        telefon: ["", common_1.Validators.none]
                    });
                }
                DodajFarmuComponent.prototype.dodajFarmu = function (event) {
                    var _this = this;
                    var data = "naziv=" + this.registerForm.value.naziv + "&podneblje=" + this.registerForm.value.podneblje + "&adresa=" + this.registerForm.value.adresa + "&telefon=" + this.registerForm.value.telefon;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/dodajfarmu.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno dodavanje farme");
                            _this.router.parent.navigate(['./UnosProizvoda']);
                        }
                        else {
                            alert("Neuspesno dodavanje farme");
                        }
                    });
                };
                DodajFarmuComponent = __decorate([
                    core_1.Component({
                        selector: 'DodajFarmu',
                        templateUrl: 'app/dodajFarmu/dodajFarmu.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        styleUrls: ['app/dodajFarmu/css/style.css'],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], DodajFarmuComponent);
                return DodajFarmuComponent;
            }());
            exports_1("DodajFarmuComponent", DodajFarmuComponent);
        }
    }
});
//# sourceMappingURL=dodajFarmu.component.js.map