import Head from "next/head";
import {useState} from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useRouter } from 'next/router'


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






export default function Verification() {
  const router = useRouter()

  const [nftData, setNftData] = useState({
    image: '',
    value: 'TSL90PVgonybnWa/Bh/yLTT6LsW+goedjM46fx60bFw='
  })

  const [inputData, setInputData] = useState({
    value: ''
  })


  return (
    <Layout>
      <Head>
        <title>NFT-NIR</title>
      </Head>
      <Wrapper>
        <h1>Verify Authenticity</h1>

        <InputWrapper>
          <p>Data From NFT</p>
          <input type="text" disabled value={nftData.value}/>
        </InputWrapper>

        <InputWrapper>
          <p>Input Data</p>
          <input type="text" value={inputData.value} onChange={
            (e) => setInputData({value: e.target.value})
          }/>
        </InputWrapper>

        <button onClick={() => {
          router.push(`/verification/loading?nftData=${nftData.value}&inputData=${inputData.value}`, )
        }}>Verify</button>



      </Wrapper>

    </Layout>
  );
}