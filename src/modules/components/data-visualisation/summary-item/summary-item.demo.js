"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var SummaryItemDemo = (function () {
    function SummaryItemDemo() {
        this.item = {
            value: 3,
            description: 'Statements',
            action: function () { console.log('hello'); }
        };
        this.item2 = {
            value: true,
            description: 'Supervisor comments provided',
            action: function () { console.log('hello'); }
        };
        this.item3 = {
            value: 2,
            description: 'Defendants'
        };
    }
    SummaryItemDemo = __decorate([
        angularjs_devtools_1.Component({
            template: require('./summary-item.demo.html')
        })
    ], SummaryItemDemo);
    return SummaryItemDemo;
}());
exports.SummaryItemDemo = SummaryItemDemo;
//# sourceMappingURL=summary-item.demo.js.map