//setting subscribe CTA halfway down article

setTimeout(() => {
    if (window.innerWidth > 768){
        if (window.location.href != 'https://twopeasinacondo.com/'){
            var target = document.querySelectorAll('h2');
            let target_length = target.length;
            var mailchimp = `<div id="mc_embed_signup">
            <form action="https://twopeasinacondo.us7.list-manage.com/subscribe/post?u=ae051fc498455298aa3dd41ac&amp;id=264fa1e7e5&amp;f_id=003ecbe4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
                <div id="mc_embed_signup_scroll">
                <h2 class='emailHeadline'>Subscribe To Our Pea Pod!</h2>
                <h4 class='emailByline'>Receive top indoor gardening and hydroponics tips directly to your inbox.</h4>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group">
            <label for="mce-EMAIL" class='email-label'>Email Address  <span class="asterisk">*</span>
            </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
            <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
            <label for="mce-FNAME" class='firstname-label'>First Name </label>
            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
            <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
            <label for="mce-LNAME" class='lastname-label'>Last Name </label>
            <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
            <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
            </div>
            <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ae051fc498455298aa3dd41ac_264fa1e7e5" tabindex="-1" value=""></div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                        <p class="brandingLogo"><a href="http://eepurl.com/ibrkmX" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                    </div>
                </div>
            </div>
            </form>
            </div>`;
        
            target[Math.floor(target_length / 2)].insertAdjacentHTML('beforebegin', mailchimp);
    }
        }
        
   
}, 100);

