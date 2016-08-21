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
    var UnosProizvodaComponent;
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
            UnosProizvodaComponent = (function () {
                function UnosProizvodaComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        naziv: ["", common_1.Validators.none],
                        tip: ["", common_1.Validators.none],
                        cena: ["", common_1.Validators.none],
                        glikemijski_indeks: ["", common_1.Validators.none],
                        slika: ["", common_1.Validators.none],
                        farma: ["", common_1.Validators.none]
                    });
                }
                UnosProizvodaComponent.prototype.dodajProizvod = function () {
                    var _this = this;
                    var data = "naziv=" + this.registerForm.value.naziv + "&tip=" + this.registerForm.value.tip + "&cena=" + this.registerForm.value.cena + "&glikemijski_indeks=" + this.registerForm.value.glikemijski_indeks + "&slika=" + this.registerForm.value.slika + "&farma=" + this.registerForm.value.farma;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/dodajproizvod.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno dodavanje proizvoda");
                            _this.router.parent.navigate(['./UnosProizvoda']);
                        }
                        else {
                            alert("Neuspesno dodavanje proizvoda");
                        }
                    });
                };
                UnosProizvodaComponent = __decorate([
                    core_1.Component({
                        selector: 'UnosProizvoda',
                        templateUrl: 'app/unosProizvoda/unosProizvoda.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        styleUrls: ['app/unosProizvoda/css/style.css'],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], UnosProizvodaComponent);
                return UnosProizvodaComponent;
            }());
            exports_1("UnosProizvodaComponent", UnosProizvodaComponent);
        }
    }
});
//# sourceMappingURL=unosProizvoda.component.js.map