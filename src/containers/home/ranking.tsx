import { Box } from '@app/components/box'
import { Music } from '@app/components/music';

export function HomeRanking() {
  return (
    <Box>
      <h3 className='text-base font-medium text-first mb-3'>
        Ranking Atual
      </h3>

      <div className='flex flex-col gap-3'>
        <Music 
          to='https://www.youtube.com/watch?v=s9kVG2ZaTS4'
          index={1} 
          title='O Mineiro e o Italiano'
          views='5.2M'
          image='https://img.youtube.com/vi/s9kVG2ZaTS4/hqdefault.jpg'
        />
        <Music 
          to='https://www.youtube.com/watch?v=lpGGNA6_920'
          index={2} 
          title='Pagode em Brasília'
          views='5.0M'
          image='https://img.youtube.com/vi/lpGGNA6_920/hqdefault.jpg'
        />
      </div>
    </Box>
  );
}