import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full rounded-xl"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide4" className="btn  hover:btn-warning   btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide1" className="btn  hover:btn-warning  btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide2" className="btn  hover:btn-warning  btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn  hover:btn-warning  btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img5}
            className="w-full"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white  space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn  hover:btn-warning  btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img6}
            className="w-full"
          />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] gap-5">
            <div className="text-white space-y-4 w-1/2 ml-10">
                <h1 className="text-7xl font-semibold">Affordable Price For Car Servicing</h1>
                <p className="text-xl font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                <button className="btn btn-secondary">Discover Here</button>
                <button className="btn btn-outline btn-secondary">Lasted Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn  hover:btn-warning  btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn hover:btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
