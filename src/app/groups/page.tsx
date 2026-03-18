import Link from 'next/link'

import { CardGroup } from '../components/card-group'

export default function GroupsPage() {
  const groups = [1,2,3,4,5,6,7,8,9,10,11]
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
        className='m-auto'
      >
        {groups.map(group => (
          <CardGroup
            key={group}
          />
        ))}  
      </div>
    </div>
  )
}