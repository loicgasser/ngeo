/**
 * @module gmf.floor.module
 */
import gmfFloorSelectorComponent from 'gmf/floor/floorSelectorComponent.js';

import './floorSelector.scss';

/**
 * @type {!angular.Module}
 */
const exports = angular.module('gmfFloorSelectorModule', [
  gmfFloorSelectorComponent.name
]);


export default exports;
