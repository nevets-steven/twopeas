
// //setting onclick function for lettucegrow
// 	document.addEventListener("DOMContentLoaded", function() {		
//   lettuceSetOnClick();
// 		console.log('lettuce click set');
// });
// 	//setting onclick function for gardyn
// 	document.addEventListener("DOMContentLoaded", function() {
//   gardynSetOnClick();
// 		console.log('lettuce click set');
// });

// function lettuceSetOnClick(){
//     const lettuce_links = document.querySelectorAll('a');
//     for (var i = 0; i < lettuce_links.length; i++){
//         //console.log('within for loop');
//         if (lettuce_links[i].href == 'https://imp.i209368.net/MXjzA2'){
//             //console.log('passed if');
//             lettuce_links[i].setAttribute('onclick', `
// 			window.dataLayer.push({
// 			'event': 'Lettuce Grow Link Click'});`);
// 			//console.log('sent value to datalayer');
//         }
//     }
// }    
// 	function gardynSetOnClick(){
// 		const gardyn_links = document.querySelectorAll('a');
// 		for (var i = 0; i < gardyn_links.length; i++){
// 			if (gardyn_links[i].href == 'https://gardyn.pxf.io/6bMLy3'){
// 				gardyn_links[i].setAttribute('onclick', `
// 				window.dataLayer.push({
// 				'event': 'Gardyn Link Click'});`);
// 			}
// 		}
// 	}

// //version 2
// setTimeout(() => {
//     setOnClick();
//     let header_link = document.querySelector('span a');
//     header_link.setAttribute('onclick', `window.dataLayer.push({
//         'event': 'Gardyn Link Click'});`);
// }, '250')

// function setOnClick(){
//     const links = document.querySelectorAll('a');
//     for (var i = 0; i < links.length; i++){
//         if (links[i].href == 'https://gardyn.pxf.io/6bMLy3'){
//             links[i].setAttribute('onclick', `
// 				window.dataLayer.push({
// 				'event': 'Gardyn Link Click'});`);
//         }
//         if(links[i] == 'https://imp.i209368.net/MXjzA2'){
//             links[i].setAttribute('onclick', `
// 			window.dataLayer.push({
// 			'event': 'Lettuce Grow Link Click'});`);
//         }
//     }
// }

//setting tags for google tag manager
var lettuceGrow = document.querySelectorAll('a');
for( var i = 0; i < lettuceGrow.length; i++){
    if (lettuceGrow[i] == 'https://imp.i209368.net/MXjzA2'){
        lettuceGrow[i].className = 'Lettuce_Grow_Link';
        lettuceGrow[i].id = 'Affiliate';
    }
}

//finding right rail for Gardyn
setTimeout(() => {
    var gardyn_rhr = document.querySelector('.Gardyn_RHR');
    gardyn_rhr.id = 'Affiliate mv-trellis-img-11';
}, 250);






	