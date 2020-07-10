(function() {
	// For now we'll just require that the browser supports arrow functions
	var supportsArrowFunctions = true;
	try {
		// This eval check is the same check used by Modernizer https://modernizr.com/
		// eslint-disable-next-line no-eval
		eval('()=>{}');
	} catch (e) {
		supportsArrowFunctions = false;
	}

	if (!supportsArrowFunctions) {
		const el = document.createElement('div');
		el.innerHTML =
			'<div>Oh no! You\'re using an old browser that is not supported, please visit <a href="https://browsehappy.com/">Browse Happy</a> to get a modern browser.</div>';
		el.style.position = 'fixed';
		el.style.top = '0px';
		el.style.left = '0px';
		el.style.right = '0px';
		el.style.fontSize = '18px';
		el.style.background = '#e74c3c';
		el.style.color = '#fff';
		el.style.zIndex = '999999999';
		el.style.padding = '20px 12px';
		el.style.textAlign = 'center';
		document.body.append(el);

		const link = el.getElementsByTagName('a')[0];
		link.style.color = '#fff';
	}
})();
