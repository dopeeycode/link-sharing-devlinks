import Button from '@/components/Button'
import { Plus } from 'lucide-react'
import NoLinks from '../NoLinks'

const ProfileDetails = () => {
  return (
    <div className="md:w-[600px]">
      <h1 className="text-2xl font-bold text-zinc-700">Detalhes de Perfil</h1>
      <p className="text-gray-500">
        Adicione seus dados para criar um toque pessoal ao seu perfil.
      </p>
      <Button alt className="w-full mt-6 py-[.7rem]">
        <Plus strokeWidth={'3px'} size={19} />
        <span>Adicionar novo Link</span>
      </Button>
      <NoLinks />
    </div>
  )
}

export default ProfileDetails
