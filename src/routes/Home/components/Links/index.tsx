import Button from '@/components/Button'
import { Plus } from 'lucide-react'
import NoLinks from '../NoLinks'

const Links = () => {
  return (
    <div className="md:w-[600px]">
      <h1 className="text-2xl font-bold text-zinc-700">
        Personalize seus Links
      </h1>
      <p className="text-gray-500">
        Adicione/edite/remova links abaixo e compartilhe todos os seus perfis
        com o mundo!
      </p>
      <Button alt className="w-full mt-6 py-[.7rem]">
        <Plus strokeWidth={'3px'} size={19} />
        <span>Adicionar novo link</span>
      </Button>
      <NoLinks />
    </div>
  )
}

export default Links
