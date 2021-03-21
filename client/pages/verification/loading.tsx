import Head from "next/head";
import {useEffect} from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputWrapper = styled.div`
  text-align: left;
  display: inline-flex;
  flex-direction: column;
  margin: 1rem 0;
`






export default function VerificationLoading() {
  const router = useRouter()

  useEffect(() => {
    let results=''

    if(router.query.nftData === router.query.inputData) {
      results='VERIFIED'
    } else {
      results="UNVERIFIED"
    }

    setTimeout(() => {
      router.push(`/verification/results?nftData=${router.query.nftData}&inputData=${router.query.inputData}&result=${results}`)
    }, 1000)
    
  }, [])

  return (
    <Layout>
      <Head>
        <title>NFT-NIR</title>
      </Head>
      <Wrapper>
        <h1>Verifying...</h1>

        <p>Checking if it's as pretty as the original one....</p>

      </Wrapper>

    </Layout>
  );
}