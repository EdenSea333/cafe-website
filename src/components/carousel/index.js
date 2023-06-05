import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./carousel.css";
import "keen-slider/keen-slider.min.css"
import slide0 from "../../assets/carousel/0.png"
import slide1 from "../../assets/carousel/1.png"
import slide2 from "../../assets/carousel/2.png"
import slide3 from "../../assets/carousel/3.png"
import slide4 from "../../assets/carousel/4.png"
import slide5 from "../../assets/carousel/5.png"
function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider slider">
                    <div className="keen-slider__slide number-slide1 img_size">
                        <img src={slide0} alt="slide0" />
                    </div>
                    <div className="keen-slider__slide number-slide2 img_size">
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div className="keen-slider__slide number-slide3 img_size">
                        <img src={slide2} alt="slide2" />
                    </div>
                    <div className="keen-slider__slide number-slide1 img_size">
                        <img src={slide3} alt="slide3" />
                    </div>
                    <div className="keen-slider__slide number-slide2 img_size">
                        <img src={slide4} alt="slide4" />
                    </div>
                    <div className="keen-slider__slide number-slide3 img_size">
                        <img src={slide5} alt="slide5" />
                    </div>
                    <div className="keen-slider__slide number-slide7 img_size">
                        <p className="introduce">The best service, satisfied customers,
                            <br />delicious coffee from the most exotic
                            <br />countries and a wide range of drinks<br /> and desserts. That's all about us!<br />
                            Come to Eclectique Marseille and see<br /> for yourself.
                            Nous vous attendons!</p>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}
export default Carousel;

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}



