import Link from 'next/link'

import { CardGroup } from '../components/card-group'
import { Group } from '../components/card-group'
import Groups from '@/data/groups.json'

export default function GroupsPage() {
  return (
    <div
      className='h-svh w-full flex'
    >
      <Link
        href={'/'}
      >
        Voltar
      </Link>

      <div
        className='m-auto py-6 flex 
          flex-wrap gap-6 justify-center'
      >
        {Groups.map(Group => (
          <CardGroup
            key={Group.id}
            group={Group}
          />
        ))}  
      </div>
    </div>
  )
}