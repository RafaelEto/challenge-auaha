$('.banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: 
    `<svg xmlns="http://www.w3.org/2000/svg" class="slick-prev" width="16.202" height="30" viewBox="0 0 16.202 30">
        <g id="_709586" data-name="709586" transform="translate(133.944 30) rotate(180)">
            <g id="Grupo_16" data-name="Grupo 16" transform="translate(117.742 0)">
                <path id="Caminho_39" data-name="Caminho 39" d="M133.6,14.177,119.727.339a1.163,1.163,0,0,0-1.642,1.647L131.134,15l-13.05,13.014a1.163,1.163,0,0,0,1.643,1.647L133.6,15.823a1.162,1.162,0,0,0,0-1.647Z" transform="translate(-117.742 0)"/>
            </g>
        </g>
    </svg>`,
    nextArrow: 
    `<svg xmlns="http://www.w3.org/2000/svg" class="slick-next" width="16.202" height="30" viewBox="0 0 16.202 30">
        <g id="Grupo_16" data-name="Grupo 16" transform="translate(-29)">
            <path id="Caminho_39" data-name="Caminho 39" d="M133.6,14.177,119.727.339a1.163,1.163,0,0,0-1.642,1.647L131.134,15l-13.05,13.014a1.163,1.163,0,0,0,1.643,1.647L133.6,15.823a1.162,1.162,0,0,0,0-1.647Z" transform="translate(-88.742 0)"/>
        </g>
    </svg>`
});

$(document).ready(function() {
    let width = $(window).width();
    if( width <= 991){
        $('.promocoes').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });
    } else {
        $('.promocoes').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: 
            `<svg xmlns="http://www.w3.org/2000/svg" class="slick-prev" width="16.202" height="30" viewBox="0 0 16.202 30">
                <g id="_709586" data-name="709586" transform="translate(133.944 30) rotate(180)">
                    <g id="Grupo_16" data-name="Grupo 16" transform="translate(117.742 0)">
                        <path id="Caminho_39" data-name="Caminho 39" d="M133.6,14.177,119.727.339a1.163,1.163,0,0,0-1.642,1.647L131.134,15l-13.05,13.014a1.163,1.163,0,0,0,1.643,1.647L133.6,15.823a1.162,1.162,0,0,0,0-1.647Z" transform="translate(-117.742 0)"/>
                    </g>
                </g>
            </svg>`,
            nextArrow: 
            `<svg xmlns="http://www.w3.org/2000/svg" class="slick-next" width="16.202" height="30" viewBox="0 0 16.202 30">
                <g id="Grupo_16" data-name="Grupo 16" transform="translate(-29)">
                    <path id="Caminho_39" data-name="Caminho 39" d="M133.6,14.177,119.727.339a1.163,1.163,0,0,0-1.642,1.647L131.134,15l-13.05,13.014a1.163,1.163,0,0,0,1.643,1.647L133.6,15.823a1.162,1.162,0,0,0,0-1.647Z" transform="translate(-88.742 0)"/>
                </g>
            </svg>`,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

    if( width <= 375){
        $('.depoimentos').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });
    }

    if( width <= 375){
        $('.banner-news').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });
    }

    if(screen.width <= 992){
        $(document).ready(function() {
            if( width <= 375){
                $('.frete__container').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                });
            }
        });
    }
});



$('.hamburguer-button').click(function(){
    $('.navigation__container').toggleClass('visible');
})

$('.categorias-mobile-item--has-child').click(function () {
    $('.categorias-mobile-item-child').toggleClass('visible-children')
    $('.categorias-mobile-item--has-child svg').toggleClass('rotate')
})