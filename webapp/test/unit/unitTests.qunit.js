/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"compce/zpce.ui5.freestyle.cds.odata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
