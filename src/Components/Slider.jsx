import React, { useEffect, useRef, useState } from "react";
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const screenWidth = window.innerWidth; // hết kích thước ngang

function Slider() {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }
    // GET API film
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setMovieList(resp.data.results)
        })
    }

    return <div className="relative">
        <HiChevronLeft className="hidden md:block text-[30px] absolute mx-8 bottom-[230px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)} />
        <HiChevronRight className="hidden md:block text-[30px] absolute mx-8 right-0 bottom-[230px] cursor-pointer" onClick={() => sliderRight(elementRef.current)} />
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
            {movieList.map((item, index) => {
                return <img key={index} src={IMAGE_BASE_URL + item.backdrop_path} alt={item.original_title} className="min-w-full md:h-[440px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in" />
            })}
        </div>
    </div>;
}

export default Slider;


