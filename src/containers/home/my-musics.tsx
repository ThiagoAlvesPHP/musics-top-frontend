import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@app/components/box";
import { Pagination } from "@app/components/pagination";
import { Music } from "@app/components/music";
import { Loading } from "@app/components/loading";

import { RootState } from "@app/core/config/store";

import { Music as MusicType } from "@app/core/services/musics-top/musics";
import { Pagination as PaginationType } from "@app/core/services/types";

import { MusicsStatus } from "@app/core/slices/musicsSlice";

import formatViews from "@app/core/utils/format-views";

type Props = {
  onGo?: (page: number) => void;
}

export function HomeMyMusics({ onGo }: Props) {
  const myMusics = useSelector<RootState>(state => state.musics.myMusicsData) as PaginationType<MusicType> | null;
  const status = useSelector<RootState>(state => state.musics.myMusicsStatus) as MusicsStatus;
  
  return (
    <Box>
      <h3 className='title-box'>
        Minhas Sugestões
      </h3>

      {myMusics && (
        <Pagination 
          data={myMusics.data}
          render={(music, index) => (
            <Music 
              to={`https://www.youtube.com/watch?v=${music.youtube_id}`}
              title={music.title.length > 40 ? music.title.substring(0, 40) + '...' : music.title}
              views={formatViews(music.count_views)}
              image={music.thumb}
              status={music.status}
              key={music.id}
            />
          )}
          notFoundText='Você não fez nenhuma sugestão!'
          className='flex-col gap-3'
          currentPage={myMusics.current_page}
          pages={myMusics.last_page}
          isLoading={status === 'loading'}
          isNextPage={myMusics.next_page_url !== null}
          isPrevPage={myMusics.prev_page_url !== null}
          onGo={onGo}
        />
      )}
      
      {status === 'loading' && (
        <div className="flex flex-col items-center py-10">
          <Loading />
          <p className="mt-5 text-sm font-medium text-first">
            Carregando músicas sugeridas por você, aguarde!
          </p>
        </div>
      )}
    </Box>
  );
}