"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Simulate the web API
// register app-wide service untill you have server for API
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_search_component_1 = require("./hero-search.component");
var dashboard_component_1 = require("./dashboard.component");
var hero_service_1 = require("./hero.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // imports - these are the modules whose export classes are required in this module 
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
        ],
        // declarations - contain the view classes that belong to this module
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_search_component_1.HeroSearchComponent
        ],
        // providers - creates services that eventually become accessible in all parts of the application
        providers: [hero_service_1.HeroService],
        // bootstrap - main application view call the root component. ONLY the ROUTE MODULE SHOULD SET this bootstrap property.
        bootstrap: [app_component_1.AppComponent] // this it the root component that angular creates and inserts in index.html
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map