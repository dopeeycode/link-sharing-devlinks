import { Link } from 'react-router-dom'

import Button from '../Button'

import DevLinksLogoSm from '@/assets/DevLinksLogoSm'
import {
  Link as LinkIcon,
  UserCircle as UserProfileIcon,
  Eye as EyeIcon,
} from 'lucide-react'

interface HeaderProps {
  contentPage: 'links' | 'profile'
  setContentPage: (page: 'links' | 'profile') => void
}

const Header = ({ setContentPage, contentPage }: HeaderProps) => {
  return (
    <header className="w-full">
      <div className="container flex justify-between items-center mx-auto px-2 lg:px-0 py-4">
        <div className="flex items-center gap-2">
          <DevLinksLogoSm />
          <span className="font-semibold tracking-wide hidden lg:block text-gray-600">
            Devlinks
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Button
            data-active={contentPage === 'links'}
            onClick={() => setContentPage('links')}
            className={`group hover:text-indigo-600 ${
              contentPage === 'links' && ' text-indigo-600'
            }`}
          >
            <LinkIcon strokeWidth={'3px'} size={19} />

            <span className="hidden md:block">Links</span>
          </Button>
          <Button
            data-active={contentPage === 'profile'}
            onClick={() => setContentPage('profile')}
            className={`hover:text-indigo-600 ${
              contentPage === 'profile' && ' text-indigo-600'
            }`}
          >
            <UserProfileIcon strokeWidth={'3px'} size={19} />

            <span className="hidden md:block">Profile Details</span>
          </Button>
        </nav>
        <>
          <Button
            className="border py-3 hover:bg-indigo-500 hover:bg-opacity-40 
            text-indigo-600 border-indigo-600 transition-colors duration-300"
            asChild
          >
            <Link to={'/preview'}>
              <EyeIcon
                className="block md:hidden"
                strokeWidth={'3px'}
                size={19}
              />
              <span className="hidden md:block">Preview</span>
            </Link>
          </Button>
        </>
      </div>
    </header>
  )
}

export default Header
