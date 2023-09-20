import NoLinkSvg from '@/assets/NoLinksSvg.svg'

const NoLinks = () => {
  return (
    <div className="flex m-4 items-center justify-center flex-col">
      <img src={NoLinkSvg} alt="svg no link" className="w-32 h-30" />

      <h2 className="text-zinc-700 m-4 text-2xl font-bold">Vamos começar</h2>

      <p className="max-w-[255px] text-center text-gray-500">
        Use o botão &quot;Adicionar novo link&quot; para começar. Depois de ter
        mais de um link, você poderá reordená-los e editá-los. Estamos aqui para
        ajudá-lo a compartilhar seus perfis com todos!
      </p>
    </div>
  )
}

export default NoLinks
