import React from 'react'
import Firstpage from '../components/HomepageComponents/FirstPage/Firstpage'
import styled from 'styled-components'
import ThirdPage from '../components/HomepageComponents/thirdpage/ThirdPage'
import Fourthpage from '../components/HomepageComponents/fourthpage/Fourthpage'
const Home = () => {
  return (
    <Container>
      <Firstpage />
      <ThirdPage />
      <Fourthpage />
    </Container>
  )
}


const Container = styled.div`

`
export default Home