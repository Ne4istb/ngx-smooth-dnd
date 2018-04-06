(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('smooth-dnd'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/core', 'smooth-dnd', '@angular/common'], factory) :
	(factory((global['ngx-smooth-dnd'] = {}),global.ng.core,global.SmoothDnD,global.ng.common));
}(this, (function (exports,core,SmoothDnD,common) { 'use strict';

var SmoothDnD__default = 'default' in SmoothDnD ? SmoothDnD['default'] : SmoothDnD;

var wrapperClass = SmoothDnD.constants.wrapperClass;
var animationClass = SmoothDnD.constants.animationClass;
var constantClasses = (_a = {}, _a[wrapperClass] = true, _a[animationClass] = true, _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.classList = Object.assign({}, constantClasses);
    }
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'draggable',
                template: "<div [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>\n",
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.dragStart = new core.EventEmitter();
        this.drop = new core.EventEmitter();
        this.dragEnter = new core.EventEmitter();
        this.dragLeave = new core.EventEmitter();
    }
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = SmoothDnD__default(this.containerElementRef.nativeElement, this.getOptions());
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        this.container.dispose();
    };
    ContainerComponent.prototype.getOptions = function () {
        var _this = this;
        var options = {};
        if (this.orientation)
            options.orientation = this.orientation;
        if (this.behaviour)
            options.behaviour = this.behaviour;
        if (this.groupName)
            options.groupName = this.groupName;
        if (this.lockAxis)
            options.lockAxis = this.lockAxis;
        if (this.dragHandleSelector)
            options.dragHandleSelector = this.dragHandleSelector;
        if (this.nonDragAreaSelector)
            options.nonDragAreaSelector = this.nonDragAreaSelector;
        if (this.dragBeginDelay)
            options.dragBeginDelay = this.dragBeginDelay;
        if (this.animationDuration)
            options.animationDuration = this.animationDuration;
        if (this.autoScrollEnabled)
            options.autoScrollEnabled = this.autoScrollEnabled;
        if (this.dragClass)
            options.dragClass = this.dragClass;
        if (this.dropClass)
            options.dropClass = this.dropClass;
        if (this.dragStart)
            options.onDragStart = function (index, payload) {
                _this.dragStart.emit({ index: index, payload: payload });
            };
        if (this.drop)
            options.onDrop = function (removedIndex, addedIndex, payload, element) {
                _this.drop.emit({ removedIndex: removedIndex, addedIndex: addedIndex, payload: payload, element: element });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.drop)
            options.onDrop = function (removedIndex, addedIndex, payload, element) {
                _this.drop.emit({ removedIndex: removedIndex, addedIndex: addedIndex, payload: payload, element: element });
            };
        if (this.dragEnter)
            options.onDragEnter = function () { return _this.dragEnter.emit(); };
        if (this.dragLeave)
            options.onDragLeave = function () { return _this.dragLeave.emit(); };
        return options;
    };
    return ContainerComponent;
}());
ContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'container',
                template: "<div #container [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return []; };
ContainerComponent.propDecorators = {
    "draggables": [{ type: core.ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: core.ViewChild, args: ['container',] },],
    "orientation": [{ type: core.Input, args: ['orientation',] },],
    "behaviour": [{ type: core.Input, args: ['behaviour',] },],
    "groupName": [{ type: core.Input, args: ['groupName',] },],
    "lockAxis": [{ type: core.Input, args: ['lockAxis',] },],
    "dragHandleSelector": [{ type: core.Input, args: ['dragHandleSelector',] },],
    "nonDragAreaSelector": [{ type: core.Input, args: ['nonDragAreaSelector',] },],
    "dragBeginDelay": [{ type: core.Input, args: ['dragBeginDelay',] },],
    "animationDuration": [{ type: core.Input, args: ['animationDuration',] },],
    "autoScrollEnabled": [{ type: core.Input, args: ['autoScrollEnabled',] },],
    "dragClass": [{ type: core.Input, args: ['dragClass',] },],
    "dropClass": [{ type: core.Input, args: ['dropClass',] },],
    "dragStart": [{ type: core.Output },],
    "drop": [{ type: core.Output },],
    "getChildPayload": [{ type: core.Input },],
    "shouldAnimateDrop": [{ type: core.Input },],
    "shouldAcceptDrop": [{ type: core.Input },],
    "dragEnter": [{ type: core.Output },],
    "dragLeave": [{ type: core.Output },],
};
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    return NgxSmoothDnDModule;
}());
NgxSmoothDnDModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [ContainerComponent, DraggableComponent],
                exports: [ContainerComponent, DraggableComponent]
            },] },
];
NgxSmoothDnDModule.ctorParameters = function () { return []; };
var _a;

exports.NgxSmoothDnDModule = NgxSmoothDnDModule;
exports.ContainerComponent = ContainerComponent;
exports.DraggableComponent = DraggableComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-smooth-dnd.umd.js.map
