let list_interests = document.querySelectorAll('div.interests_main > ul > li > label > input');
list_interests.forEach(element => {
	element.onchange = function() {
		let list_item = element.parentElement.parentElement.querySelectorAll('input');
		list_item.forEach( el => {
			el.checked = element.checked;
		});
	};
})
let list_every_item = document.querySelectorAll('div.interests_main > ul > li > ul > label > input');
list_every_item.forEach( item => {
    item.onchange = function() {
        let item_parent = item.parentElement.parentElement.querySelectorAll('input');
        item_parent.forEach(it => {
            it.checked = item.checked;
        })
    }
})