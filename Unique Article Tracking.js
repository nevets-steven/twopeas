//https://twopeasinacondo.com/

//list of articles, top 5 affiliate lead gen, pulled 10/16/2022
/*
/reviews/aerogarden-farm-family-a-review-of-the-largest-aerogarden-models/
/hydroponics/how-to-easily-grow-hydroponic-strawberries-indoors-in-a-tower-garden/
/reviews/15-gardyn-tips-for-guaranteed-success/
/tips/what-is-leca-and-why-should-you-use-it-for-indoor-gardening/
/homepage
*/

//unique affiliate links below this point
//right rail uses these links but with subid = "rightrail"
/*
https://gardyn.pxf.io/reviews_aerogardenfarmfamilyareviewofthelargestaerogardenmodels
https://gardyn.pxf.io/hydroponics_howtoeasilygrowhydroponicstrawberriesindoorsinatowergarden
https://gardyn.pxf.io/reviews_15gardyntipsforguaranteedsuccess
https://gardyn.pxf.io/tips_whatislecaandwhyshouldyouuseitforindoorgardening
https://gardyn.pxf.io/homepage
*/

setTimeout(() => {
var currentURL = window.location.href;
var target = document.querySelector('.Gardyn_Header');
var rhr_target = document.querySelectorAll('.wp-block-image a')[0];


switch(currentURL){
    case "https://twopeasinacondo.com/reviews/aerogarden-farm-family-a-review-of-the-largest-aerogarden-models/":
        target.href = 'gardyn.pxf.io/XxD475';
        rhr_target.href = 'gardyn.pxf.io/b3AknB';
    case "https://twopeasinacondo.com/hydroponics/how-to-easily-grow-hydroponic-strawberries-indoors-in-a-tower-garden/":
        target.href = 'gardyn.pxf.io/BXZ579';
        rhr_target.href = 'gardyn.pxf.io/NKOGjO';
    case "https://twopeasinacondo.com/reviews/15-gardyn-tips-for-guaranteed-success/":
        target.href = 'gardyn.pxf.io/JrEkDQ';
        rhr_target.href = 'gardyn.pxf.io/YgQVZO';
    case "https://twopeasinacondo.com/tips/what-is-leca-and-why-should-you-use-it-for-indoor-gardening/":
        target.href = 'gardyn.pxf.io/gbZR35';
        rhr_target.href = 'gardyn.pxf.io/KenBQa';
}





}, 100);
