/*global QUnit*/

sap.ui.define([
	"compce/zpce.ui5.freestyle.cds.odata/controller/Report.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Report Controller");

	QUnit.test("I should test the Report controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
