import { FaAngleDown } from 'react-icons/fa6';
import Button from '../../../../components/Button';
import { PriceFilterProp } from './types';
import { thousandSeparator } from '../../../../utils/functions';

const PriceFilter = ({
  className,
  filter,
  handleSelectedFilter,
  lowestPrice,
  shortestPrice,
}: PriceFilterProp) => {
  return (
    <div
      className={`rounded-lg p-4 flex gap-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] items-center ${className}`}
    >
      <div
        onClick={() => handleSelectedFilter('lowest')}
        className={`py-3 rounded-lg basis-2/5 font-semibold hover:bg-neutral-02 cursor-pointer ${
          filter == 'lowest' ? 'bg-neutral-02' : ''
        }`}
      >
        <p className="text-center text-primary-blue">Lowest Price</p>
        <p className="text-center text-black">
          Rp{thousandSeparator(lowestPrice)}
        </p>
      </div>
      <div
        onClick={() => handleSelectedFilter('shortest')}
        className={`py-3 rounded-lg basis-2/5 font-semibold hover:bg-neutral-02 cursor-pointer ${
          filter == 'shortest' ? 'bg-neutral-02' : ''
        }`}
      >
        <p className="text-center text-primary-blue">Shortest Duration</p>
        <p className="text-center text-black">
          Rp{thousandSeparator(shortestPrice)}
        </p>
      </div>
      <Button className="bg-white text-primary-blue px-5 py-2.5 text-center inline-flex items-center basis-[10%] mx-auto">
        Other
        <FaAngleDown className="ml-auto text-primary-blue" />
      </Button>
    </div>
  );
};

export default PriceFilter;
