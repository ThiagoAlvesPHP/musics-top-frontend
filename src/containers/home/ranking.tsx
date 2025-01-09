import { useSelector } from 'react-redux';

import { Box } from '@app/components/box'
import { Loading } from '@app/components/loading';
import { Music } from '@app/components/music';
import { Pagination } from '@app/components/pagination';

import { RootState } from '@app/core/config/store';

import { Music as MusicType } from '@app/core/services/musics-top/musics';
import { Pagination as PaginationType } from '@app/core/services/types';

import { MusicsStatus } from '@app/core/slices/musicsSlice';

import formatViews from '@app/core/utils/format-views';

type Props = {
  onGo?: (page: number) => void;
}

export function HomeRanking({ onGo }: Props) {
  const musics = useSelector<RootState>(state => state.musics.data) as PaginationType<MusicType> | null;
  const status = useSelector<RootState>(state => state.musics.status) as MusicsStatus;

  return (
    <Box>
      <h3 className='title-box'>
        Ranking Atual
      </h3>

      {musics && (
        <Pagination 
          data={musics.data}
          render={(music, index) => (
            <Music 
              to={`https://www.youtube.com/watch?v=${music.youtube_id}`}
              index={((musics.current_page - 1) * musics.per_page) + (index + 1)} 
              title={music.title.length > 40 ? music.title.substring(0, 40) + '...' : music.title}
              views={formatViews(music.count_views)}
              image={music.thumb}
              key={music.id}
            />
          )}
          notFoundText='Nenhum vídeo foi sugerido!'
          className='flex-col gap-3'
          currentPage={musics.current_page}
          pages={musics.last_page}
          isLoading={status === 'loading'}
          isNextPage={musics.next_page_url !== null}
          isPrevPage={musics.prev_page_url !== null}
          onGo={onGo}
        />
      )}
      
      {status === 'loading' && (
        <div className="flex flex-col items-center py-10">
          <Loading />
          <p className="mt-5 text-sm font-medium text-first">
            Carregando Músicas, aguarde!
          </p>
        </div>
      )}
    </Box>
  );
}