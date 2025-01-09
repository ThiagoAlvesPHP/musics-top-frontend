import { useEffect,  } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { HomeArtist } from '@app/containers/home/artist'
import { HomeFormMusic } from '@app/containers/home/forms/music'
import { HomeRanking } from '@app/containers/home/ranking'
import { HomeMyMusics } from '@app/containers/home/my-musics'

import { RootState } from '@app/core/config/store'

import { musics as musicsApi } from '@app/core/services/musics-top/musics'
import { User } from '@app/core/services/musics-top/auth'

import { changeData, changeMyMusicsData, changeMyMusicsStatus, changeStatus, MusicsStatus } from '@app/core/slices/musicsSlice'

export function Home() {
  const dispatch = useDispatch();

  const user = useSelector<RootState>(state => state.user.data) as User | null;
  const token = useSelector<RootState>(state => state.user.token) as string | null;

  useEffect(() => {
    getMusics();
  }, [])

  useEffect(() => {
    getMyMusics();
  }, [user])

  const getMusics = async (page: number = 1) => {
    const reqMusics = await musicsApi.getAll(page, {
      order: 'count_views,desc',
      filters: 'status:=:approved',
    });

    if (axios.isAxiosError(reqMusics)) {
      dispatch(changeStatus('error'));
      return;
    }

    if (reqMusics) {
      dispatch(changeData(reqMusics));
      dispatch(changeStatus('success'));
    }
  }

  const getMyMusics = async (page: number = 1) => {
    if (user) {
      const reqMusics = await musicsApi.getAll(page, {
        order: 'id,desc',
        filters: `user_id:=:${user.id}`,
      });
  
      if (axios.isAxiosError(reqMusics)) {
        dispatch(changeMyMusicsStatus('error'));
        return;
      }
  
      if (reqMusics) {
        dispatch(changeMyMusicsData(reqMusics));
        dispatch(changeMyMusicsStatus('success'));
      }
    }
  }

  return (
    <div className="py-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex-1 flex flex-col gap-5">
          <HomeArtist />
        </div>

        <div className="flex-[2] flex flex-col gap-5">
          <HomeFormMusic 
            onAfterSuccessSubmit={getMyMusics} 
          />
          <HomeRanking 
            onGo={(page: number) => {
              dispatch(changeStatus('loading'));
              getMusics(page);
            }}
          />
          { (token && user) &&
            <HomeMyMusics 
              onGo={(page: number) => {
                dispatch(changeMyMusicsStatus('loading'));
                getMyMusics(page);
              }}
            />
          }
        </div>
      </div>
    </div>
  );
}
