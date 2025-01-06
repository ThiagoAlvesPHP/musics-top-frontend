import { HomeArtist } from '@app/containers/home/artist'
import { HomeFormMusic } from '@app/containers/home/forms/music'
import { HomeRanking } from '@app/containers/home/ranking'

export function Home() {
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
          <HomeRanking />    

          {/* <Box>
            Minhas Músicas Sugeridas
          </Box> */}
        </div>
      </div>
    </div>
  );
}
