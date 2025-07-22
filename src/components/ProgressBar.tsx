import React from 'react';
import clsx from 'clsx';
import { Progress } from 'radix-ui';

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export const StatusBar: React.FC<Stats> = ({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}) => {
  return (
    <div>
      <div className='grid grid-cols-[100px_51px_1fr] items-center md:grid-cols-[116px_37px_1fr]'>
        <p className='md:text-md font-regular mr-auto text-sm'>HP</p>
        <p className='md:text-md text-sm font-semibold'>{hp}</p>
        <Status val={hp} />
        <p className='md:text-md font-regular mr-auto text-sm'>Attack</p>
        <p className='md:text-md text-sm font-semibold'>{attack}</p>
        <Status val={attack} />
        <p className='md:text-md font-regular mr-auto text-sm'>Defense</p>
        <p className='md:text-md text-sm font-semibold'>{defense}</p>
        <Status val={defense} />
        <p className='md:text-md font-regular mr-auto text-sm'>SP. Attack</p>
        <p className='md:text-md text-sm font-semibold'>{specialAttack}</p>
        <Status val={specialAttack} />
        <p className='md:text-md font-regular mr-auto text-sm'>SP. Defense</p>
        <p className='md:text-md text-sm font-semibold'>{specialDefense}</p>
        <Status val={specialDefense} />
        <p className='md:text-md font-regular mr-auto text-sm'>Speed</p>
        <p className='md:text-md text-sm font-semibold'>{speed}</p>
        <Status val={speed} />
      </div>
    </div>
  );
};

type StatusProps = {
  val: number;
};

export const Status: React.FC<StatusProps> = ({ val }) => {
  const statusColor = clsx({
    'bg-accent-red ': val <= 44,
    'bg-accent-yellow': val > 44 && val <= 79,
    'bg-accent-green': val > 79,
  });
  return (
    <div className=''>
      <Progress.Root
        className='bg-ac relative h-3 w-full overflow-hidden rounded-full bg-neutral-200'
        value={val}
      >
        <Progress.Indicator
          className={`${statusColor} h-full rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${val}%` }}
        />
      </Progress.Root>
    </div>
  );
};

export default StatusBar;
