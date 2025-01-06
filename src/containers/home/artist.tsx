import { TiaoCarreiroPardinho } from '@app/assets'

import { Box } from '@app/components/box'

export function HomeArtist() {
  return (
    <Box>
      <img src={TiaoCarreiroPardinho} className="w-full mb-3" alt="" />
      <span className="mb-1 text-xs font-medium text-first">
        Artistas:
      </span>
      <h2 className="text-base text-gray-800 dark:text-gray-200">
        Tião Carreiro & Pardinho
      </h2>
    </Box>
  );
}