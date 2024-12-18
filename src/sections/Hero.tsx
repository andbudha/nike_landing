import Button from '../components/Button';
import arrowRight from '../assets/icons/arrow-right.svg';
import { shoes, statistics } from '../constants';
import bigShoeOne from '../assets/images/big-shoe1.png';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string>(bigShoeOne);
  const changeBigShoeImage = (selectedShoeImg: string) => {
    setBigShoeImg(selectedShoeImg);
  };
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  max-container"
    >
      <div className=" relative  xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[84px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Sports </span>{' '}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Sports-Shoes arrivals, quality, comfort and
          innovation for your active life.
        </p>
        <Button label={'Shop Now'} iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-mono text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe image"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[6%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                shoe={shoe}
                changeBigShoeImage={changeBigShoeImage}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
