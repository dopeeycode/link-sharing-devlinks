import Header from '@/components/Header'
import { useState } from 'react'

const Home = () => {
  const [contentPage, setContentPage] = useState<'links' | 'profile'>('links')

  return (
    <>
      <Header contentPage={contentPage} setContentPage={setContentPage} />
      <h1>Ola mundo</h1>
      {contentPage === 'links' ? <h1>Links</h1> : <h2>Profile</h2>}
    </>
  )
}

export default Home
