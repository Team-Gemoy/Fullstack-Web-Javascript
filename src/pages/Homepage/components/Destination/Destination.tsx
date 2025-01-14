import Button from '../../../../components/Button';

const Destination = () => {
  return (
    <div className=" md:p-10 md:grid grid-cols-2 items-center lg:grid justify-items-center">
      <div className="p-4 md-p-2 lg:w-2/3">
        <div>
          <h1 className="font-bold text-2xl pb-2">Top Destinations</h1>
          <h5 className="pb-4">
            Dui in in orci fermentum a. Maecenas nunc id ut auctor curabitur
            pellentesque id et tristique. Pellentesque et a nisl aliquam eget.
            Nam velit duis in mauris arcu vivamus amet turpis in. In bibendum
            placerat quam ullamcorper accumsan felis. Velit vitae pellentesque
            sagittis et consequat sit donec. Donec aenean vivamus ullamcorper
            urna aliquet faucibus lacus aliquet.
          </h5>
          <Button
            children="See All"
            disabled={false}
            className="w-28 "
            id="destination"
          />
        </div>
      </div>
      <div className=" gap-4 p-4  grid grid-cols-2 md:grid-cols-3">
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875589/pexels-tom%C3%A1%C5%A1-mal%C3%ADk-3408353_1_3.png"
            alt="pexels-tom-mal-k-3408353-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-sm md:text-xs lg:text-sm pb-1">
                Tokyo, <span className="text-base text-blue-700">Japan</span>
              </h1>
              <h5 className="text-xs">Rp. 24,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875590/pexels-deva-darshan-2389473_1_1.png"
            alt="pexels-deva-darshan-2389473-1-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-sm pb-1">
                Jogja,{' '}
                <span className="text-base md:text-xs lg:text-base text-blue-700">
                  Indonesia
                </span>
              </h1>
              <h5 className="text-xs">Rp. 34,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875589/pexels-ashok-j-kshetri-4032145_1.png"
            alt="pexels-ashok-j-kshetri-4032145-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-xs lg:text-sm pb-1">
                Katmandu, <span className="text-base text-blue-700">Nepal</span>
              </h1>
              <h5 className="text-xs">Rp. 25,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875589/pexels-deva-darshan-2389473_1_2.png"
            alt="pexels-deva-darshan-2389473-1-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-xs lg:text-sm pb-1">
                Kuching,{' '}
                <span className="text-base md:text-xs lg:text-base text-blue-700">
                  Malaysia
                </span>
              </h1>
              <h5 className="text-xs">Rp. 64,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875589/pexels-mudassir-ali-1878293_1_1.png"
            alt="pexels-mudassir-ali-1878293-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-xs md:text-sm pb-1">
                Sydney,{' '}
                <span className="text-base md:text-xs lg:text-base text-blue-700">
                  Australia
                </span>
              </h1>
              <h5 className="text-xs">Rp. 74,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dwy823csd/image/upload/v1736875589/pexels-tom%C3%A1%C5%A1-mal%C3%ADk-3408353_1_3.png"
            alt="pexels-tom-mal-k-3408353-1"
          />
          <div className="p-2 flex items-center justify-between">
            <div>
              <h1 className="text-sm pb-1">
                Tokyo, <span className="text-base text-blue-700">Japan</span>
              </h1>
              <h5 className="text-xs">Rp. 92,000 onwards.</h5>
            </div>
            <img
              className="w-8"
              src="https://res.cloudinary.com/dwy823csd/image/upload/v1736876584/Frame_81_erss2w.png"
              alt="Frame-81"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
