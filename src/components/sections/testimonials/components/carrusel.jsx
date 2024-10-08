import { useState, useEffect } from "react";
import {testimonialsSection} from '../data'
const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const items = testimonialsSection.testimonials ;
    
    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        };

        if (!isHovered) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, items.length]);

    const selectCurrentButton = (index) => {
        setCurrentIndex(index - 1);
    };

    const Buttons = () => {
        return items.map((_, index) => (
            <input
                type="button"
                key={index}
                className={index === currentIndex ? "activeButton" : "navinput"}
                onClick={() => selectCurrentButton(index + 1)}
            />
        ));
    };

    return (
        <div className="cards_content w-full flex-col items-center">
            <main
                id="carousel"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item pos${index + 1} ${
                            index === currentIndex
                                ? "active"
                                : index === (currentIndex + 1) % items.length
                                ? "next"
                                : index === (currentIndex - 1 + items.length) % items.length
                                ? "prev"
                                : "inactive"
                        } dark:bg-[#000000b0]`}
                    >
                        <div className="body_card ">
                            <a
                                href={item.direccion}
                                className={`w-fit h-32 shrink-0 overflow-hidden ${item.styleRedondear}`}
                            >
                                <img
                                    className="h-full object-cover"
                                    src={item.logo.src}
                                    alt={"logo de "+item.name}
                                />
                            </a>
                        </div>
                        <div className="footer_card">{item.name}</div>
                    </div>
                ))}
            </main>
            <div className="buttons_groups">
                <Buttons />
            </div>
        </div>
    );
};

export default Carrusel;
