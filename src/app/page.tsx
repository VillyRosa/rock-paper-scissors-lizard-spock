'use client'

import { useState } from 'react';
import RulesButton from '@/app/ui/rules-button';
import Header from '@/app/ui/header';
import Option from '@/app/ui/option';
import RulesAlert from '@/app/ui/rules-alert';

export default function Home() {
  const [viewRules, setViewRules] = useState(false);

  function handleToggleRules(): void {
    if (viewRules) {
      setViewRules(false);
    } else setViewRules(true);
  }

  return (
    <main className='w-screen h-screen flex flex-col justify-around items-center'>
      {
        viewRules && (
          <RulesAlert />
        )
      }
      <Header />
      <Option name='scissors' />
      <Option name='spock' />
      <Option name='paper' />
      <Option name='lizard' />
      <Option name='rock' />
      <RulesButton onClick={handleToggleRules} />
    </main>
  )
}