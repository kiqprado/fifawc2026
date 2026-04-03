import { CardGroup, type Group } from '../components/card-group'
import Groups from '@/data/groups.json'

import { ButtonHome } from '../elements/button-home'

export default function GroupsPage() {
  return (
    <div
      className='h-svh flex
        overflow-x-hidden'
    >
      <ButtonHome
        href={'/'}
      >
        Voltar
      </ButtonHome>

      <div
        className='m-auto flex gap-6
          flex-wrap justify-center
          py-12'
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