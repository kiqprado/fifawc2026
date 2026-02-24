import Link from 'next/link'

import groups from '@/data/groups.json'
import { CardGroup } from '../components/card-group'

export default function GroupsPage() {
  return(
    <div
      className='relative h-svh flex'
    >
      <Link href={'/'}>Volte</Link>
      <div
        className='flex flex-wrap gap-12 justify-center
          px-12 py-4'
      >
        {groups.map(group => (
          <CardGroup
            key={group.id}
            group={group}
          />
        ))}
      </div>
    </div>
  )
}