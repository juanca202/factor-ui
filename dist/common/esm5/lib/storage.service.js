/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    StorageService.prototype.delete = /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    function (key, storage) {
        if (storage) {
            delete storage[key];
        }
        else {
            delete sessionStorage[key];
        }
    };
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    StorageService.prototype.get = /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    function (key, storage) {
        /** @type {?} */
        var parsedValue;
        /** @type {?} */
        var value = storage ? storage[key] : sessionStorage[key];
        if (value) {
            try {
                parsedValue = JSON.parse(value);
            }
            catch (err) {
                parsedValue = value;
            }
        }
        return parsedValue;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} storage
     * @return {?}
     */
    StorageService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} storage
     * @return {?}
     */
    function (key, value, storage) {
        if (storage) {
            storage[key] = JSON.stringify(value);
        }
        else {
            sessionStorage[key] = JSON.stringify(value);
        }
    };
    StorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StorageService.ctorParameters = function () { return []; };
    /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBS0U7SUFBZ0IsQ0FBQzs7Ozs7O0lBRWpCLCtCQUFNOzs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLE9BQVE7UUFDMUIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFJO1lBQ0gsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFDRCw0QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxPQUFROztZQUNuQixXQUFXOztZQUNYLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUk7Z0JBQ0YsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBQ0QsNEJBQUc7Ozs7OztJQUFILFVBQUksR0FBVyxFQUFFLEtBQVUsRUFBRSxPQUFRO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUpEO0NBbUNDLEFBakNELElBaUNDO1NBOUJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT8pIHtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgZGVsZXRlIHN0b3JhZ2Vba2V5XTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlbGV0ZSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxuICBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/KSB7XG4gICAgbGV0IHBhcnNlZFZhbHVlO1xuICAgIGxldCB2YWx1ZSA9IHN0b3JhZ2UgPyBzdG9yYWdlW2tleV0gOiBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG4gIH1cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPykge1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICBzdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=