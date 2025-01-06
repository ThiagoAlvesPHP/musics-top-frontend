import { useEffect, useState } from 'react'

import { HomeArtist } from '@app/containers/home/artist'
import { HomeFormMusic } from '@app/containers/home/forms/music'
import { HomeRanking } from '@app/containers/home/ranking'

import { Music, musics as musicsApi } from '@app/core/services/musics-top/musics'

export function Home() {
  const [ musics, setMusics ] = useState<Music[]>([]);

  useEffect(() => {
    getMusics();
  }, [])

  const getMusics = async () => {
    const reqMusics = await musicsApi.getAll();

    if (reqMusics) {
      setMusics(reqMusics.data);
    }
  }

  return (
    <div className="py-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex-1 flex flex-col gap-5">
          <HomeArtist />
          
          {/* <Box>
            Usuários que sugeriram mais músicas
          </Box> */}
        </div>

        <div className="flex-[2] flex flex-col gap-5">
          <HomeFormMusic />
          <HomeRanking musics={musics} />    

          {/* <Box>
            Minhas Músicas Sugeridas
          </Box> */}
        </div>
      </div>
    </div>
  );
}
