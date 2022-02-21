import React from 'react'
import Firstpage from '../components/HomepageComponents/FirstPage/Firstpage'
import styled from 'styled-components'
import ThirdPage from '../components/HomepageComponents/thirdpage/ThirdPage'
import Fourthpage from '../components/HomepageComponents/fourthpage/Fourthpage'
// import FirstCard from '../components/HomepageComponents/fourthpageCardView/FirstCardView/FirstCard'
// import SecondCard from '../components/HomepageComponents/fourthpageCardView/SecondCardView/SecondCard'
// import ThirdCard from '../components/HomepageComponents/fourthpageCardView/ThirdCardView/ThirdCard'
const Home = () => {
  return (
    <Container>
      <Firstpage />
      <ThirdPage />
      <Fourthpage />
      {/* <FirstCard />
      <SecondCard/>
      <ThirdCard/> */}
    </Container>
  )
}


const Container = styled.div`

`
export default Home