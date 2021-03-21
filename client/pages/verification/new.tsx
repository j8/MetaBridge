import Head from "next/head";
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'

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






export default function NewVerification() {


  return (
    <Layout>
      <Head>
        <title>NFT-NIR</title>
      </Head>
      <Wrapper>
        <h1>Mint A New Authentic Item</h1>

        <InputWrapper>
          <p>Title</p>
          <input type="text" name="title" />
        </InputWrapper>

        <InputWrapper>
          <p>Image</p>
          <input type="file" />
        </InputWrapper>

        <InputWrapper>
          <p>Data</p>
          <textarea rows={12} />
        </InputWrapper>

        <button>Mint</button>



      </Wrapper>

    </Layout>
  );
}