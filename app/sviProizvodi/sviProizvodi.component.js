System.register(['angular2/core', 'angular2/http', 'app/pipe/searchGi', 'app/pipe/searchNaziv', 'rxjs/Rx', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, http_1, searchGi_1, searchNaziv_1, router_1, common_1;
    var SviProizvodiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (searchGi_1_1) {
                searchGi_1 = searchGi_1_1;
            },
            function (searchNaziv_1_1) {
                searchNaziv_1 = searchNaziv_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SviProizvodiComponent = (function () {
                function SviProizvodiComponent(builder, http, router) {
                    var _this = this;
                    this.glikemijski_indeks = "";
                    this.naziv = "";
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/php/getproducts.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (proizvodi) {
                        _this.proizvodi = proizvodi.proizvodi;
                        setInterval(function () {
                            $('#example').dataTable({
                                paging: false,
                                searching: false
                            });
                        }, 200);
                    });
                }
                SviProizvodiComponent.prototype.deleteProizvod = function (proizvod) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/php/deleteproizvod.php?id=' + proizvod.id_proizvod, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.serviceResponse = data; });
                    location.reload();
                };
                SviProizvodiComponent = __decorate([
                    core_1.Component({
                        selector: 'SviProizvodi',
                        templateUrl: 'app/sviProizvodi/sviProizvodi.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                        styleUrls: ['css/dataTable/style.css', 'css/dataTable/normalize.css', 'css/dataTable/stil.css'],
                        pipes: [searchGi_1.SearchPipeGi, searchNaziv_1.SearchPipeNaziv]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], SviProizvodiComponent);
                return SviProizvodiComponent;
            }());
            exports_1("SviProizvodiComponent", SviProizvodiComponent);
        }
    }
});
//# sourceMappingURL=sviProizvodi.component.js.map