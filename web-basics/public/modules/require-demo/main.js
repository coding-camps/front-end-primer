'use strict';
require(
	[
		'm1',
		'm2',
		'm3',
		'm3.2',
		'm4',
		'm5'
	],
	function(
		M1,
		M2,
		M3,
		M32,
		M4,
		M5
	) {
	$(function() {
		M1.sendmsg();
		M2.sendmsg();
		M3.sendmsg();
		M32.run();
		M4.sendmsg();
		M5.sendmsg();
	})
})
