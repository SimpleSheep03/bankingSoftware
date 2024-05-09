import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';
import React from 'react'

const Home = () => {

  const loggedIn = { firstName : 'Aldrian' , lastName : 'JSM' , email : 'sambhavsinha38@gmail.com' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn ?.firstName || 'Guest'} subtext="Access and manage your account and transactions efficiently"/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.25}></TotalBalanceBox>
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50} , {currentBalance: 500}]}/>

    </section>
  )
}

export default Home