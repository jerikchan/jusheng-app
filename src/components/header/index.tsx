import React, { ReactNode } from 'react'
import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'

interface IProps {
  leftNode?: ReactNode
}
export function Header(props: IProps) {
  const { t } = useTranslation()

  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full px-4 py-4 border bg-slate-50 bg-opacity-70 lg:px-12">
      <a href="/" className="text-xs lg:text-base">
        Vite React TS Tailwind Starter
      </a>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <Button size={'icon'} asChild className="rounded-full">
          <a href="https://github.com/Quilljou/vite-react-ts-tailwind-starter" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </Button>
      </div>
    </div>
  )
}
