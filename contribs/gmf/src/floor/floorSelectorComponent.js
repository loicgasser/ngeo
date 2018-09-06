/**
 * @module gmf.floor.floorSelectorComponent
 */
import ngeoFilterRuleHelper from 'ngeo/filter/RuleHelper.js';

/** @suppress {extraRequire} */
import gmfDatasourceHelper from 'gmf/datasource/Helper.js';

import * as olEvents from 'ol/events.js';


const exports = angular.module('gmfFloorSelector', [
  ngeoFilterRuleHelper.module.name,
  gmfDatasourceHelper.module.name
]);


exports.run(/* @ngInject */ ($templateCache) => {
  $templateCache.put('gmf/floor/floorSelectorComponent', require('./floorSelectorComponent.html'));
});


exports.value('gmfFloorSelectorTemplateUrl',
  /**
   * @param {!angular.Attributes} $attrs Attributes.
   * @return {string} The template url.
   */
  ($attrs) => {
    const templateUrl = $attrs['gmfFloorSelectorTemplateUrl'];
    return templateUrl !== undefined ? templateUrl :
      'gmf/floor/floorSelectorComponent';
  });

/**
 * @param {!angular.Attributes} $attrs Attributes.
 * @param {!function(!angular.Attributes): string} gmfFloorSelectorTemplateUrl Template function.
 * @return {string} Template URL.
 * @ngInject
 */
function gmfFloorSelectorTemplateUrl($attrs, gmfFloorSelectorTemplateUrl) {
  return gmfFloorSelectorTemplateUrl($attrs);
}

/**
 * @private
 */
exports.Controller_ = class {
  /**
   * @param {!angular.Scope} $scope Angular scope.
   * @param {gmf.datasource.Helper} gmfDataSourcesHelper Gmf data
   *     sources helper service.
   * @param {!ngeo.filter.RuleHelper} ngeoRuleHelper Ngeo rule helper service.
   * @private
   * @struct
   * @ngInject
   * @ngdoc controller
   * @ngname GmfFloorSelectorController
   */
  constructor($scope, gmfDataSourcesHelper, ngeoRuleHelper) {
    /**
    * @type {ol.Map}
    * @export
    */
    this.map;

    /**
    * @type {ngeo.filter.RuleHelper}
    */
    this.ngeoRuleHelper_ = ngeoRuleHelper;

    /**
     * @type {gmf.datasource.Helper}
     * @private
     */
    this.gmfDataSourcesHelper_ = gmfDataSourcesHelper;

    /**
     * @type {gmfx.datasource.DataSources}
     * @private
     */
    this.gmfDataSources_ = gmfDataSourcesHelper.collection;

    /**
    * @type {Number}
    */
    this.floor_ = 0;

    olEvents.listen(this.gmfDataSources_, 'add', this.handleDataSourcesAdd_, this);
    olEvents.listen(this.gmfDataSources_, 'remove', this.handleDataSourcesRemove_, this);
  }

  /**
  * @param {Number} incrementFloor change floor
  * @export
  */
  handleChangeFloor(incrementFloor) {
    this.floor_ += incrementFloor;
    console.log(incrementFloor);
  }

  /**
   * Called when a data source is added to the collection of ngeo data sources.
   * If the data source is 'valid', add it to the list of filtrable data
   * sources.
   *
   * @param {ol.Collection.Event} evt Collection event.
   * @private
   */
  handleDataSourcesAdd_(evt) {
    console.log(evt);
  }

  /**
   * Called when a data source is removed from the collection of ngeo data
   * sources. If the data source is 'valid', remove it from the list of
   * filtrable data sources.
   *
   * @param {ol.Collection.Event} evt Collection event.
   * @private
   */
  handleDataSourcesRemove_(evt) {
    console.log(evt);
  }
};


/**
 * The application-specific floor selector component.
 *
 * @type {!angular.Component}
 */
exports.component_ = {
  bindings: {
    'map': '<gmfFloorSelectorMap'
  },
  templateUrl: gmfFloorSelectorTemplateUrl,
  controller: exports.Controller_
};


exports.component('gmfFloorSelector', exports.component_);


export default exports;
