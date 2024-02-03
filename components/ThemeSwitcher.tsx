'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Switch } from '@/components/ui/switch'
const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(false)
  useEffect(() => {
    const userTheme = localStorage.getItem('theme')
    if(userTheme && userTheme === 'dark') {
      setIsChecked(true)
    }
  }, [])
  useEffect(() => {
    if(isChecked === false) {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')

    }
  }, [isChecked])
  return (
    <div className='flex items-center gap-2'>
      <SunIcon className=''/>
      <Switch name='theme-switcher' id='theme-switcher' className='data-[state=unchecked]:bg-red-300 dark:bg-red-300' checked={isChecked} onCheckedChange={setIsChecked}/>
      <MoonIcon /> 
    </div>
  )
}

export default ThemeSwitcher