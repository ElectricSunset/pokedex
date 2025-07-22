import { cn, type classNameProps } from '../lib/utils';

interface PokemonTagProps extends classNameProps {
  tag: string | null;
}

export const PokemonTag: React.FC<PokemonTagProps> = ({ className, tag }) => {
  return (
    <div
      className={cn(
        'shrink-0 rounded-md border border-neutral-300 px-2 py-0.5',
        className
      )}
    >
      <span className='text-sm'>{tag}</span>
    </div>
  );
};
