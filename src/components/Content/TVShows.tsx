import useSWR from 'swr'
import { TvIcon } from 'lucide-react'
import { MediaGrid } from '../Media/MediaGrid'
import { actions } from 'astro:actions'
import { swrDefaultOptions } from '@/utils'

export function TVShows() {
  const { data: trendingTvShows } = useSWR(
    'tv',
    () => actions.trending({ type: 'tv' }),
    swrDefaultOptions
  )

  return (
    <MediaGrid
      media='tv'
      title='TV Shows'
      results={(trendingTvShows?.data?.results as any) ?? []}
      icon={<TvIcon width='18' height='18' stroke='#000' />}
    />
  )
}