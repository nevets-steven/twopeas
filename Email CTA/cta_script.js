//cta_script

//creating and palcing popup within article
function CTA(){
    //creation of CTA
    //overall cta container
    const ctaContainer_div = document.createElement('div');
    ctaContainer_div.className ='cta_div';
    //setting size
    ctaContainer_div.style.width = '50%'
    ctaContainer_div.style.height = 'auto';
    ctaContainer_div.style.margin = '0 auto';
    //inner container for headline/byline/discription and inline cta block
    const ctaTextContainer_div = document.createElement('div');
    const ctaButtonContainer_div = document.createElement('div');
    //text and inner button 
    const ctaHeadline = document.createElement('h4');
    const ctaByline = document.createElement('span');
    const ctaButton = document.createElement('button');
    const ctaLink = document.createElement('a');

    //setting heiarchy
    ctaContainer_div.appendChild(ctaTextContainer_div);
    ctaContainer_div.appendChild(ctaButtonContainer_div);
    ctaTextContainer_div.appendChild(ctaHeadline);
    ctaTextContainer_div.appendChild(ctaByline);
    ctaButtonContainer_div.appendChild(ctaButton);
    ctaButton.appendChild(ctaLink);

    //setting attributes
    //ctaTextContainer
    ctaTextContainer_div.className = 'ctaTextContainer_div';
    ctaTextContainer_div.id = 'ctaTextContainer';

    //ctaHeadline
    ctaHeadline.className = 'ctaHeadline';
    ctaHeadline.id = 'ctaHeadline';
    ctaByline.className = 'ctaByline';
    ctaByline.id = 'ctaByline';

    //ctaButtonContainer
    ctaButtonContainer_div.className = 'ctaButtonContainer_div';
    ctaButtonContainer_div.id = 'ctaButtonContainer';

    //ctaButton
    ctaButton.className = 'ctaButton';
    ctaButton.id = 'ctaButton';

    //ctaLink
    ctaLink.className = 'ctalink';
    ctaLink.id = 'ctaLink';


    //setting headline and byline content
    ctaHeadline.textContent = 'This is a headline';
    ctaByline.textContent = 'this is a byline';
    //setting headline style
    ctaHeadline.style.margin = '10px auto';

    //setting byline styles
    ctaByline.style.margin = '10px auto';

    //setting link text and href
    ctaLink.textContent = 'this is a link';
    ctaLink.href='https://www.google.com/';
    ctaLink.target = '_blank';



    //finding paragraph conatainers within article
    var par_container = document.querySelectorAll('.paragraphContainer');
    //iterating through each paragraph to place a CTA
    for (var i = 0; i < par_container.length; i++){
        par_container[0].appendChild(ctaContainer_div);
    }
}

//calling CTA function
CTA();
