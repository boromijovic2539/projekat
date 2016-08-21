System.register(['angular2/core', 'angular2/http', 'app/pipe/searchNazivFarme', 'app/pipe/searchPodneblje', 'rxjs/Rx', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, http_1, searchNazivFarme_1, searchPodneblje_1, router_1, common_1;
    var SveFarmeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (searchNazivFarme_1_1) {
                searchNazivFarme_1 = searchNazivFarme_1_1;
            },
            function (searchPodneblje_1_1) {
                searchPodneblje_1 = searchPodneblje_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SveFarmeComponent = (function () {
                function SveFarmeComponent(builder, http, router) {
                    var _this = this;
                    this.podneblje = "";
                    this.naziv = "";
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/php/getfarme.php', { headers: headers })
                        .map(function (res) { return res.json(); }).share()
                        .subscribe(function (farme) {
                        _this.farme = farme.farme;
                        setInterval(function () {
                            $('#example').dataTable({
                                paging: false,
                                searching: false
                            });
                        }, 200);
                    });
                }
                SveFarmeComponent.prototype.deleteFarma = function (farma) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/php/deletefarma.php?id=' + farma.id_farma, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.serviceResponse = data; });
                    location.reload();
                };
                SveFarmeComponent = __decorate([
                    core_1.Component({
                        selector: 'SveFarme',
                        templateUrl: 'app/sveFarme/sveFarme.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS],
                        styleUrls: ['css/dataTable/style.css', 'css/dataTable/normalize.css', 'css/dataTable/stil.css'],
                        pipes: [searchNazivFarme_1.SearchPipeNazivFarme, searchPodneblje_1.SearchPipePodneblje]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], SveFarmeComponent);
                return SveFarmeComponent;
            }());
            exports_1("SveFarmeComponent", SveFarmeComponent);
        }
    }
});
//# sourceMappingURL=sveFarme.component.js.map