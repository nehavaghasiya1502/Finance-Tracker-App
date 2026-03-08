import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonials">

            <h2>What Our Users Say</h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="testimonial-slider"
            >

                <SwiperSlide>
                    <div className="testimonial-box">

                        <p className="testimonial-text">
                            MoneyMint helped me understand where my money goes every month.
                            The interface is simple, clean and the reports make budgeting
                            extremely easy. I finally started saving money after using this platform.
                        </p>

                        <div className="testimonial-user">

                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="user"
                            />

                            <div>
                                <h4>Priya Sharma</h4>
                                <span>Freelancer</span>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-box">

                        <p className="testimonial-text">
                            This platform completely changed how I manage my expenses.
                            The UI is clean and the analytics help me understand my
                            spending patterns clearly.
                        </p>

                        <div className="testimonial-user">

                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="user"
                            />

                            <div>
                                <h4>Rahul Mehta</h4>
                                <span>Software Engineer</span>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="testimonial-box">
                        <p className="testimonial-text">
                            MoneyMint is a very helpful tool for managing daily expenses.
                            The design is clean, simple, and easy to understand for beginners.
                            My savings better without feeling overwhelmed by complicated tools.
                        </p>

                        <div className="testimonial-user">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg"
                                alt="Ananya Patel"
                            />
                            <div>
                                <h4>Ananya Patel</h4>
                                <span>Student</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
}