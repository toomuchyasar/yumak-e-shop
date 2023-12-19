import { React } from 'react'
import Slider from 'react-slick';
import img1 from '../../assets/slider1.jpeg'
import img2 from '../../assets/slider2.jpeg'
import { useNavigate } from 'react-router-dom';

export const SliderComp = () => {

    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
        <Slider {...settings}>
    <div >
        <div className='flex flex-row mt-16 bg-orange-200'>
            <div><img className='w-96 basis-1/4' src={img1}></img></div>
            <div className='flex flex-col justify-center ml-16 basis-3/4'>
              <div className='text-5xl font-bold '>Best Quality</div>
              <div className='text-2xl mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et erat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan pulvinar ligula, in cursus justo mollis a. Sed faucibus nisl nisl, non rhoncus neque rhoncus nec. </div>
              <div onClick={() => navigate("/")} className='mt-5 border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-orange-300'> review </div>
            </div>
            
        </div>
    </div>
    <div>
    <div className='flex flex-row mt-16'>  
            <div className='flex flex-col bg-orange-200 justify-center m basis-3/4'>
              <div className='text-5xl font-bold ml-16'>Best Price</div>
              <div className='text-2xl mt-3 ml-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et erat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan pulvinar ligula, in cursus justo mollis a. Sed faucibus nisl nisl, non rhoncus neque rhoncus nec. </div>
              <div  onClick={() => navigate("/")} className='ml-16 mt-5 border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-orange-300'> review </div>
            </div>
            <div><img className='w-96 basis-1/4' src={img2}></img></div>
        </div>
    </div> 
    </Slider>
    </div>
  )
}
