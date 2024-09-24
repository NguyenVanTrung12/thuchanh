import React, { useEffect } from "react";
import "./FAQs.css";

function FAQs() {
    useEffect(() => {

        const items = document.querySelectorAll('.accordion button');

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (var i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }
        items.forEach((item) => item.addEventListener('click', toggleAccordion));
    })



    return (
        <>
            <div class="container faq">

                <h2 >Frequently Asked Questions</h2>
                <div class="accordion">
                    <div class="accordion-item">
                        <button id="accordion-button-1" aria-expanded="false">
                            <span class="accordion-title">What is Prime?</span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>
                                Prime is a fitness benefit offered through Tivity Health. Prime gives you access to a robust
                                network of national, regional and local fitness and recreation centers, making it easy for you
                                to
                                get and stay active.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button id="accordion-button-2" aria-expanded="false">
                            <span class="accordion-title">Which locations can I use? </span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>
                                The Prime network features independents, nonprofits, regional chains and national providers.
                                Our locations have a wide variety of amenities to suit your fitness goals.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button id="accordion-button-3" aria-expanded="false">
                            <span class="accordion-title">Do I have to sign up for only one location or can I go to
                                several?</span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>
                                Your Prime membership allows you to go to any participating location within the Prime network
                                as many times as you wish. You can attend a group exercise class near your work, do some
                                weight training near your home or use a pool at a Prime location if you’re traveling. Just bring
                                your Prime card or your Member ID to the location of your choice.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button id="accordion-button-4" aria-expanded="false">
                            <span class="accordion-title">I didn’t receive my Prime card. Do I need one to visit a Prime
                                gym?</span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>
                                Most locations will then issue you their own card to use whenever you visit. However, some
                                locations ask
                                that you use your Prime card when you visit. You can use the printed version of your card or
                                request a new
                                card if you have not received it. You may order a new card through “My Member Card.” Simply
                                click on the
                                “Order a New Card” link, verify your mailing address and press “confirm.” A Prime card will be
                                sent to you in 10
                                business days.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button id="accordion-button-5" aria-expanded="false">
                            <span class="accordion-title">I lost my Prime card. How do I order a new one?</span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>
                                However, if you’ve enrolled at a location that needs your Prime card whenever you visit, you can
                                continue to
                                use the printed version of the card or request a new card. You may order a new card through “My
                                Member
                                Card.” Simply click on the “Order a New Card” link, verify your mailing address and press
                                “confirm.” A Prime
                                card will be sent to you in 10 business days
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FAQs;