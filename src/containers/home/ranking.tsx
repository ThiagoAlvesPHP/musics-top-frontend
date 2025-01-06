import { Box } from '@app/components/box'
import { Music } from '@app/components/music';

import { Music as MusicType } from '@app/core/services/musics-top/musics';
import { formatViews } from '@app/core/utils/format-views';

type Props = {
  musics: MusicType[];
}

export function HomeRanking({ musics }: Props) {
  return (
    <Box>
      <h3 className='text-base font-medium text-first mb-3'>
        Ranking Atual
      </h3>

      <div className='flex flex-col gap-3'>
        {
          musics.length > 0 
          ? musics.map((music, index) => (
              <Music 
                to={`https://www.youtube.com/watch?v=${music.youtube_id}`}
                index={index + 1} 
                title={music.title.length > 40 ? music.title.substring(0, 40) + '...' : music.title}
                views={formatViews(music.count_views)}
                image={music.thumb}
                key={music.id}
              />
            ))
          : (
              <p className="">
                Nenhum vídeo foi sugerido!
              </p>
            )
        }
      </div>
    </Box>
  );
}