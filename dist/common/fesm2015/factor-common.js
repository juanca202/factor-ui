import { of } from 'rxjs';
import { Component, Input, Inject, HostBinding, ElementRef, Injectable, Directive, EventEmitter, Output, NgModule, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconComponent {
    /**
     * @param {?} configuration
     */
    constructor(configuration) {
        this.configuration = configuration;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
        if (!this.path) {
            if (this.configuration.icon && this.configuration.icon.path) {
                this.path = this.configuration.icon.path;
            }
            else {
                this.path = 'assets';
            }
        }
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-icon',
                template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
];
IconComponent.propDecorators = {
    name: [{ type: Input }],
    collection: [{ type: Input }],
    path: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            /** @type {?} */
            let elementObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @param {?} observer
             * @return {?}
             */
            (entries, observer) => {
                entries.forEach((/**
                 * @param {?} entry
                 * @return {?}
                 */
                (entry) => {
                    if (entry.isIntersecting) {
                        /** @type {?} */
                        let image = new Image();
                        image.src = this.src;
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.loading = true;
                        }), 100);
                        image.onerror = (/**
                         * @return {?}
                         */
                        () => {
                            this.error = true;
                            this.loading = false;
                        });
                        image.onload = (/**
                         * @return {?}
                         */
                        () => {
                            if ("decode" in image) {
                                image.decode().then((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.loading = false;
                                    this.shown = true;
                                }));
                            }
                            else {
                                console.error('Image.decode not available.');
                            }
                        });
                        elementObserver.unobserve(this.element.nativeElement);
                    }
                }));
            }), {
                rootMargin: "0px 0px 200px 0px"
            });
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('IntersectionObserver not available.');
            this.shown = true;
        }
    }
}
ImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-image',
                template: "<img *ngIf=\"shown\" [src]=\"src\" />\n",
                styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.loading{background-color:rgba(0,0,0,.03)}:host.loading::after{content:'';display:block;background-image:linear-gradient(to right,transparent,rgba(255,255,255,.3),transparent);height:100%;width:50%;-webkit-animation:.8s linear infinite placeholder-loading;animation:.8s linear infinite placeholder-loading}:host.error{background-color:rgba(255,0,0,.03)}img{max-width:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}@keyframes placeholder-loading{from{transform:translate3d(-200%,0,0)}to{transform:translate3d(200%,0,0)}}"]
            }] }
];
/** @nocollapse */
ImageComponent.ctorParameters = () => [
    { type: ElementRef }
];
ImageComponent.propDecorators = {
    error: [{ type: HostBinding, args: ['class.error',] }],
    loading: [{ type: HostBinding, args: ['class.loading',] }],
    src: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressComponent {
    constructor() {
        this.color = 'var(--primary)';
        this.mode = 'indeterminate';
        this.value = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-progress',
                template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\">\n    <ng-container *ngIf=\"mode=='indeterminate'\">\n      <animate attributeName=\"stroke-dashoffset\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0\" to=\"502\" />\n      <animate attributeName=\"stroke-dasharray\" dur=\"2s\" repeatCount=\"indefinite\" values=\"150.6 100.4;1 250;150.6 100.4\" />\n    </ng-container>\n  </circle>\n</svg>\n",
                styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}"]
            }] }
];
/** @nocollapse */
ProgressComponent.ctorParameters = () => [];
ProgressComponent.propDecorators = {
    color: [{ type: Input }],
    mode: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get hostClasses() {
        return [].join(' ');
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ft-message',
                template: "<h1 mat-dialog-title *ngIf=\"data.options.title\">{{ data.options.title }}</h1>\n<div mat-dialog-content>\n  <ft-icon *ngIf=\"data.options.icon\" [name]=\"data.options.icon.name\" [collection]=\"data.options.icon.collection\" size=\"data.options.icon.size\"></ft-icon>\n  <div>{{ data.message }}</div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"primary\">Accept</button>\n</div>\n",
                styles: ["[mat-dialog-content]{display:flex;align-items:center;margin-bottom:1rem}[mat-dialog-actions]{justify-content:flex-end;padding:.5rem;margin-left:-1.5rem;margin-right:-1.5rem}"]
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
MessageComponent.propDecorators = {
    hostClasses: [{ type: HostBinding, args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageService {
    /**
     * @param {?} snackBar
     * @param {?} dialog
     */
    constructor(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    show(message, options) {
        /** @type {?} */
        const defaults = {
            type: null,
            duration: 2000
        };
        options = Object.assign(defaults, options);
        switch (options.type) {
            default:
            case 'notification':
                this.snackBar.open(message, '', {
                    duration: options.duration || 2000,
                });
                break;
            case 'modal':
                /** @type {?} */
                const dialogRef = this.dialog.open(MessageComponent, {
                    width: '250px',
                    data: { message, options },
                    disableClose: true
                });
                this.snackBar.dismiss();
                break;
        }
        return of(null);
    }
}
MessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MessageService.ctorParameters = () => [
    { type: MatSnackBar },
    { type: MatDialog }
];
/** @nocollapse */ MessageService.ngInjectableDef = defineInjectable({ factory: function MessageService_Factory() { return new MessageService(inject(MatSnackBar), inject(MatDialog)); }, token: MessageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ObserveIntersectingDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.event = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            /** @type {?} */
            const elementObserver = new IntersectionObserver((/**
             * @param {?} entries
             * @param {?} observer
             * @return {?}
             */
            (entries, observer) => {
                entries.forEach((/**
                 * @param {?} entry
                 * @return {?}
                 */
                (entry) => {
                    this.event.emit(entry.isIntersecting);
                }));
            }), this.options);
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('ftObserveIntersecting not available in this browser.');
        }
    }
}
ObserveIntersectingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ftObserveIntersecting]'
            },] }
];
/** @nocollapse */
ObserveIntersectingDirective.ctorParameters = () => [
    { type: ElementRef }
];
ObserveIntersectingDirective.propDecorators = {
    options: [{ type: Input, args: ['ftObserveIntersectingOptions',] }],
    event: [{ type: Output, args: ['ftObserveIntersecting',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonModule$1 {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: CommonModule$1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    }
}
CommonModule$1.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IconComponent,
                    ImageComponent,
                    ProgressComponent,
                    ObserveIntersectingDirective,
                    MessageComponent
                ],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatSnackBarModule
                ],
                exports: [
                    IconComponent,
                    ImageComponent,
                    ProgressComponent,
                    ObserveIntersectingDirective
                ],
                entryComponents: [
                    MessageComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IconComponent, ImageComponent, ProgressComponent, MessageService, ObserveIntersectingDirective, CommonModule$1 as CommonModule, MessageComponent as ɵa };

//# sourceMappingURL=factor-common.js.map