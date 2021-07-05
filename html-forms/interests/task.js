// let list_interests = document.querySelectorAll('div.interests_main > ul > li > label > input');
// list_interests.forEach(element => {
// 	element.onchange = function() {
// 		let list_item = element.parentElement.parentElement.querySelectorAll('input');
// 		list_item.forEach( el => {
// 			el.checked = element.checked;
// 		});
// 	};
// })
// let list_every_item = document.querySelectorAll('div.interests_main > ul > li > ul > label > input');
// list_every_item.forEach( item => {
//     item.onchange = function() {
//         let item_parent = item.parentElement.parentElement.querySelectorAll('input');
//         item_parent.forEach(it => {
//             it.checked = item.checked;
//         })
//     }
// })




let inputInterests = document.querySelectorAll("input.interest__check");

inputInterests.forEach(input => {
    input.addEventListener("click", function(event){
        if (input.checked && input.closest("li").closest("ul").classList.contains(".interests_active")) {
            input.closest("li").closest("ul").previousElementSibling.querySelector("interest__check").checked = true;
        } else if (input.checked && !input.closest("li").closest("ul").classList.contains(".interests_active")) {
            input.closest("li").querySelectorAll("input").forEach(item => item.checked = true);
        }

    })
})