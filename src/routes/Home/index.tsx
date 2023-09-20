import Phone from '@/assets/Phone'
import Header from '@/components/Header'
import { useState } from 'react'
import Links from './components/Links'
import ProfileDetails from './components/ProfileDetails'

const Home = () => {
  const [contentPage, setContentPage] = useState<'links' | 'profile'>('links')

  return (
    <>
      <Header contentPage={contentPage} setContentPage={setContentPage} />
      <main className="min-h-[calc(100vh-106px)] grid lg:pt-[10vh] relative grid-cols-1">
        <div className="max-w-[1200px] h-screen flex mx-auto py-10">
          <section>
            <div className="hidden lg:flex ">
              <Phone />
            </div>
          </section>
          <section className="max-w-[750px] w-full flex flex-col p-10 mx-auto">
            {contentPage === 'links' ? <Links /> : <ProfileDetails />}
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
