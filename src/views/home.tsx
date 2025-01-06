import { Box } from '@app/components/box'

import { HomeArtist } from '@app/containers/home/artist'
import { HomeFormMusic } from '@app/containers/home/forms/music'

export function Home() {
  return (
    <div className="py-10">
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <HomeArtist />
          
          <Box>
            Usuários que sugeriram mais músicas
          </Box>
        </div>

        <div className="flex-[2] flex flex-col gap-5">
          <HomeFormMusic />

          <Box>
            Músicas
          </Box>

          <Box>
            Minhas Músicas Sugeridas
          </Box>
        </div>
      </div>
    </div>
  );
}
