import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation , Autoplay, Pagination,} from 'swiper/modules';

const banner = [
    {
        images: 'https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fbanners_images%2Fbanner-677d113d5a57f.jpg&w=1920&q=75'
    },
    {
        images: 'https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fbanners_images%2Fbanner-677d124775170.jpg&w=1920&q=75'
    },
    {
        images: 'https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fbanners_images%2Fbanner-677d0fa730dbf.jpg&w=1920&q=75'
    },
    {
        images: 'https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fbanners_images%2Fbanner-677d0fa783d19.jpg&w=1920&q=75'
    },
]

const Banner = () => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="banner">
            {banner.map (ban => {
                return (
                    <SwiperSlide>
                        <img src={ban.images} alt=""/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default Banner;