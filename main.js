(function () {
	var filterEl = document.getElementById('filterText');

	filterEl.addEventListener('keyup', filterList);

	function filterList() {
		let filterEl = document.getElementById('filterText');
		let value = filterEl.value.toUpperCase();

		let ul = document.getElementById('list');
		let li = ul.querySelectorAll('li.item');

		for(let i = 0; i < li.length; i++) {
			let a = li[i].getElementsByTagName('a')[0];

			if(a.innerHTML.toUpperCase().indexOf(value) > -1) {
				li[i].style.display = '';
			} else {
				li[i].style.display = 'none';
			}
		}
	}
}());