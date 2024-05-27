export const settingsRealization = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    speed: 300,
    rows: 2,
    slidesPerRow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesPerRow: 2,
                slidesToScroll: 1,
                infinite: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};