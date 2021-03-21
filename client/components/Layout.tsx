import {FC} from 'react'
import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.div`
  padding: 1rem 2rem;
`

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Layout:FC = ({children}) => {
  return (
    <Wrapper>
      <Header />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      
    </Wrapper>
  )
}

export default Layout