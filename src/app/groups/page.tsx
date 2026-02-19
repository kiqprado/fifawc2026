import Link from 'next/link'

import groups from '@/data/groups.json'
import { CardGroup } from '../components/card-group'

export default function GroupsPage() {
  return(
    <div>
      <Link href={'/'}> Volte </Link>
      <div>
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