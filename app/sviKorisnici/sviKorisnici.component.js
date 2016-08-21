System.register(['angular2/core', 'angular2/http', 'app/pipe/searchIme', 'app/pipe/searchUsername', 'rxjs/Rx', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, http_1, searchIme_1, searchUsername_1, router_1, common_1;
    var SviKorisniciComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (searchIme_1_1) {
                searchIme_1 = searchIme_1_1;
            },
            function (searchUsername_1_1) {
                searchUsername_1 = searchUsername_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SviKorisniciComponent = (function () {
                function SviKorisniciComponent(builder, http, router) {
                    var _this = this;
                    this.firstName = "";
                    this.username = "";
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/php/getsvikorisnici.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (korisnici) {
                        _this.korisnici = korisnici.korisnici;
                        setInterval(function () {
                            $('#example').dataTable({
                                paging: false,
                                searching: false
                            });
                        }, 200);
                    });
                }
                SviKorisniciComponent.prototype.deleteKorisnik = function (korisnik) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/php/deletekorisnik.php?id=' + korisnik.id_korisnik, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.serviceResponse = data; });
                    location.reload();
                };
                SviKorisniciComponent = __decorate([
                    core_1.Component({
                        selector: 'SviKorisnici',
                        templateUrl: 'app/sviKorisnici/sviKorisnici.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                        styleUrls: ['css/dataTable/style.css', 'css/dataTable/normalize.css', 'css/dataTable/stil.css'],
                        pipes: [searchIme_1.SearchPipeIme, searchUsername_1.SearchPipeUsername]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], SviKorisniciComponent);
                return SviKorisniciComponent;
            }());
            exports_1("SviKorisniciComponent", SviKorisniciComponent);
        }
    }
});
//# sourceMappingURL=sviKorisnici.component.js.map