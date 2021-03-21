import styled from 'styled-components'
import Link from 'next/link'
import {useEffect, useRef} from 'react'
import { useWeb3React } from "@web3-react/core";
import MetaMaskOnboarding from "@metamask/onboarding";
import {injected} from '../connectors'



const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
  } = useWeb3React();

  const onboarding = useRef(null);

  useEffect(() => {
    onboarding.current = new MetaMaskOnboarding
  }, [])


  return (
    <NavWrapper>
      <Link href="/" passHref><a><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
          fill="currentColor"
        />
      </svg></a></Link>

      {!account && <button onClick={() => {
        activate(injected, undefined, true)
      }}>Connect MetaMask</button>}

    </NavWrapper>
  )
}

export default Header