webpackJsonp([4],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {FireDataProvider} from '../../providers/fire-data/fire-data';
//import  lod from 'lodash';


var ListaClientesPage = /** @class */ (function () {
    function ListaClientesPage(navCtrl, navParams, afd, launchNavigator) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        this.launchNavigator = launchNavigator;
        this.todosClientes = [];
        this.afd.object('clientesCadastrados').snapshotChanges()
            .subscribe(function (clientes) {
            _this.todosClientes = [];
            var keys = Object.keys(clientes.payload.val());
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var items = clientes.payload.val()[key];
                items.key = key;
                _this.todosClientes.push(items);
            }
            //metodo ordenacao;
            var values = _this.todosClientes;
            var object = Object.keys(values).map(function (key) { return values[key]; });
            _this.todosClientes = object.sort(function (a, b) { return a.vlr - b.vlr; });
        });
    }
    ListaClientesPage.prototype.apagar = function (key) {
        // console.log(key)
        this.afd.list('clientesCadastrados/' + key).remove();
    };
    ListaClientesPage.prototype.abreMapa = function () {
        var options = {
            start: 'London, ON',
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate('Toronto, ON', options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    ListaClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaClientesPage');
    };
    ListaClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-clientes',template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/lista-clientes/lista-clientes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de Postos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card *ngFor="let cli of todosClientes">\n  <img src="assets/imgs/Ipiranga.png">\n  <ion-card-content>\n  <ion-card-title>\n    {{cli.nomePosto}}\n    \n  </ion-card-title>\n      <p>{{cli.end}}</p>\n    <button ion-button color="secondary" block>R$ {{cli.vlr}} </button>\n    \n  </ion-card-content>\n  <button ion-button full outline (click)="apagar(cli.key)">Deletar</button>\n  <button ion-button block color="primary"(click)="abreMapa()">Rota</button>\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/lista-clientes/lista-clientes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], ListaClientesPage);
    return ListaClientesPage;
}());

//# sourceMappingURL=lista-clientes.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(navCtrl, navParams, usuariosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuariosProvider = usuariosProvider;
        this.usuario = { name: '', email: '', password: '' };
    }
    UsuarioPage.prototype.addUsuario = function () {
        this.usuariosProvider.addUsuario(this.usuario).subscribe(function (res) {
            console.log(res);
        }, function (erro) {
            console.log("Erro" + erro.message);
        });
    };
    UsuarioPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioPage');
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario',template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/usuario/usuario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Usuario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-item>\n    <ion-label>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Senha</ion-label>\n    <ion-input type="password" [(ngModel)]="usuario.password"></ion-input>\n  </ion-item>\n\n\n</ion-list>\n\n<div padding>\n  <button ion-button block (click)="addUsuario()">enviar</button>\n  <button ion-button block color="light"(click)="voltar()">voltar</button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/usuario/usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		441,
		3
	],
	"../pages/lista-clientes/lista-clientes.module": [
		442,
		2
	],
	"../pages/mapa/mapa.module": [
		443,
		1
	],
	"../pages/usuario/usuario.module": [
		444,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostosProvider = /** @class */ (function () {
    function PostosProvider(http) {
        this.http = http;
        console.log('Hello PostosProvider Provider');
    }
    PostosProvider.prototype.showTest = function (data) {
        return this.http.get('http://localhost:3000/posto/' + data.id);
    };
    PostosProvider.prototype.allTest = function () {
        return this.http.get('http://localhost:3000/posto');
    };
    PostosProvider.prototype.addTest = function (data) {
        return this.http.post('http://localhost:3000/posto', data);
    };
    PostosProvider.prototype.editTest = function (data) {
        return this.http.put('http://localhost:3000/posto/' + data.id, data);
    };
    PostosProvider.prototype.deleteTest = function (data) {
        return this.http.delete('http://localhost:3000/posto/' + data.id);
    };
    PostosProvider.prototype.all = function () {
        var posto = [
            {
                "id": 1,
                "nomePosto": "Ipiranga",
                "geolocalizacao": "Rua do beijo",
                "valor": 10.00,
                "vl_txt": "10,00",
                "imagem": "assets/imgs/Ipiranga.png"
            },
            {
                "id": 2,
                "nomePosto": "Petrobras",
                "geolocalizacao": "Rua Getulio Vargas",
                "valor": 3.60,
                "vl_txt": "3,60",
                "imagem": "assets/imgs/Petrobras.png"
            }
        ];
        return posto;
    };
    PostosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostosProvider);
    return PostosProvider;
}());

//# sourceMappingURL=postos.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuariosProvider = /** @class */ (function () {
    function UsuariosProvider(http) {
        this.http = http;
        this.url = 'http://localhost:3000/';
        console.log('Hello UsuariosProvider Provider');
        //this.headers = {"headers": {"authorization": "Bearer"}};
    }
    UsuariosProvider.prototype.addUsuario = function (data) {
        return this.http.post(this.url + 'usuarios', data);
    };
    UsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuariosProvider);
    return UsuariosProvider;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_usuario_usuario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_postos_postos__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuarios_usuarios__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lista_clientes_lista_clientes__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { FireDataProvider } from '../providers/fire-data/fire-data';



var firebaseConfig = {
    apiKey: "AIzaSyAqGMtwJ4kSWYTYG8hrjHdjGZ-RmE_58S8",
    authDomain: "posthere-1552624061582.firebaseapp.com",
    databaseURL: "https://posthere-1552624061582.firebaseio.com",
    projectId: "posthere-1552624061582",
    storageBucket: "posthere-1552624061582.appspot.com",
    messagingSenderId: "875190677582",
    appId: "1:875190677582:web:3cb09056e0e63c18"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lista_clientes_lista_clientes__["a" /* ListaClientesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_usuario_usuario__["a" /* UsuarioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-clientes/lista-clientes.module#ListaClientesPageModule', name: 'ListaClientesPage', segment: 'lista-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lista_clientes_lista_clientes__["a" /* ListaClientesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_usuario_usuario__["a" /* UsuarioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_postos_postos__["a" /* PostosProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_clientes_lista_clientes__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_lista_clientes_lista_clientes__["a" /* ListaClientesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ListaPostos', component: __WEBPACK_IMPORTED_MODULE_8__pages_lista_clientes_lista_clientes__["a" /* ListaClientesPage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__["a" /* MapaPage */] },
            { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */] },
            { title: 'Usuario', component: __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {MapaPage} from '../mapa/mapa';

var HomePage = /** @class */ (function () {
    function HomePage(afd, navCtrl) {
        this.afd = afd;
        this.navCtrl = navCtrl;
        this.cad = {};
    }
    HomePage.prototype.cadastro = function (cad) {
        var nomePosto = cad.nomePosto, end = cad.end, vlr = cad.vlr;
        //console.log(nome)
        this.afd.list('clientesCadastrados').push(cad);
    };
    HomePage.prototype.openClientes = function () {
        this.navCtrl.push('ListaClientesPage');
    };
    HomePage.prototype.ngOnInit = function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos);
        });
    };
    /*abreMapa(){
      this.navCtrl.push(MapaPage);
    }*/
    HomePage.prototype.abrePosto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/home/home.html"*/'\n\n\n  <ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>PostHere</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    \n    <ion-fab right bottom>\n      <button ion-fab (click)="openClientes()">\n        <ion-icon name="archive"></ion-icon>\n      </button>\n    </ion-fab>\n  \n  <ion-item>\n    <ion-input [(ngModel)]="cad.nomePosto" type="text" placeholder="NomePosto">\n  \n    </ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-input [(ngModel)]="cad.end" type="text" placeholder="Endereco">\n    \n      </ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input [(ngModel)]="cad.vlr" type="number" placeholder="ValorGasolina">\n      \n        </ion-input>\n      </ion-item>\n      \n        <button ion-button group round (click)="cadastro(cad)">Cadastrar</button>\n  \n      \n   <ion-card>\n    <!--<img src="http://pimg.p30download.com/APK_IMG/c/com.cuuappsmx.gasolinachih/icon/icon_0_small.png"/>-->\n  -\n    \n    <button ion-button block color="primary"(click)="abrePosto()">Gasolina</button>\n    <button ion-button block color="secondary"(click)="abrePosto()">Alcool</button>\n  </ion-card>\n    </ion-content>\n  \n'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_mapa__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_postos_postos__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, postoProvider) {
        //this.postos = this.postoProvider.all();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postoProvider = postoProvider;
    }
    CadastroPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.postoProvider.allTest().subscribe(function (res) {
            _this.posto = res;
        }, function (erro) {
            console.log("Erro" + erro.message);
        });
        var data = {
            "id": 3,
            "nomePosto": "Posto Nacional",
            "geolocalizacao": "Rua do beijo",
            "valor": 10.00,
            "vl_txt": "10,00",
            "imagem": "assets/imgs/Ipiranga.png"
        };
        /*this.postoProvider.addTest(data).subscribe(res => {
          console.log(res);
        }, erro =>{
          console.log("Erro"+erro.message);
        });*/
        this.postoProvider.editTest(data).subscribe(function (res) {
            console.log(res);
        }, function (erro) {
            console.log("Erro" + erro.message);
        });
        this.postoProvider.deleteTest(data).subscribe(function (res) {
            console.log(res);
        }, function (erro) {
            console.log("Erro" + erro.message);
        });
    };
    CadastroPage.prototype.abreMapa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* MapaPage */]);
    };
    CadastroPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-card *ngFor="let item of posto">\n  <img height="70" [src]="item.imagem"/>\n  <ion-card-content>\n    <ion-card-title>{{item.nomePosto}}</ion-card-title>\n    <p>\n    {{item.geolocalizacao}}\n    </p>\n  </ion-card-content>\n  <button ion-button block (click)="abreMapa()">ir para</button>\n  <div class="spacer" style="height:1px;" >  </div>\n  <button  ion-button color="success">R${{item.vl_txt}}</button>\n  <button ion-button block color="light"(click)="voltar()">Cancelar</button>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_postos_postos__["a" /* PostosProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, navParams, launchNavigator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
    }
    MapaPage.prototype.ngOnInit = function () {
        var options = {
            start: 'London, ON',
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate('Toronto, ON', options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/mapa/mapa.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/COPIA/postHerec/src/pages/mapa/mapa.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map