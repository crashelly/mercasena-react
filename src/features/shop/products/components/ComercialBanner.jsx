import { useEffect, useState, useLayoutEffect } from "react";
import { CONFIG } from "@config/app"


const ComercialBanner = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch(CONFIG.API.URL.endpoints.bannerImages.get())
            .then(res => res.json())
            .then(res => setBanner(res))
            // .then(activateBanner())
    }, [])

    // para cuando termina de renderiza 
    // useLayoutEffect(() => {
    //     activateBanner()
    // }, [])
    return (
        <div id="bannerCarousele" className="owl-carousel owl-theme">
            {banner.images.forEach(imageUrl => {
                return (

                    <div class="w-screen h-48 imagenes-contenedor  bg-gray-500  overflow-hidden">
                        <img class="w-full h-full  object-cover  md:object-fit " src={image} alt="imagen" />
                    </div>
                );
                console.log(imageUrl)
            })}
            {
                array.forEach(element => {
                    
                    console.log(banner.images)
                })
            }
        </div>
    );
};

const activateBanner = () => {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        animateOut: 'fadeOut',
        //default settings:
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })


    // Agregar la clase 'hidden' a todos los elementos con la clase 'owl-nav'
    document.querySelectorAll('.owl-nav').forEach(function (element) {
        element.classList.add('hidden');
    });

    // Agregar la clase 'hidden' a todos los elementos con la clase 'owl-dots'
    document.querySelectorAll('.owl-dots').forEach(function (element) {
        element.classList.add('hidden');
    });
}
export default ComercialBanner;