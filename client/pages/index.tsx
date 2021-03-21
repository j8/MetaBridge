import Head from "next/head";
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  text-align: center;
`

const DeviceWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #E7E7E7;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 4px;
  color: #8A8A8A;
  
  h3 {
    font-weight: 700;
  }

  svg {
    path {
      fill: #8A8A8A;
    }
  }
`

const ButtonWrapper = styled.div`
  padding: 1px 1rem;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;

  ${props => {
    switch (props.color) {
      case "purple":
        return `
          background: #C2B2FF;
          color: #634CBF;
        `;
      case "orange":
        return `
          background: #FFDDB2;
          color: #BF6B00;
        `
      default:
        return "#fff";
    }
  }}
`




export default function Home() {


  return (
    <Layout>
      <Head>
        <title>NFT-NIR</title>
      </Head>
      <Wrapper>
        <h1>New scan action</h1>
        <DeviceWrapper>
          <div className="Left">

          </div>
          <div className="Center">
            <h3>Connected to:</h3>
            <p>auth_device_01</p>
          </div>
          <div className="Right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </div>

        </DeviceWrapper>


        <Link href="/verification/new"><ButtonWrapper color="purple">
          <div className="Left"></div>
          <div className="Center">
            <h3>Add new authentic item</h3>
            <p>Scan your authentic item so others can match it !</p>
          </div>
        </ButtonWrapper></Link>

        <Link href="/verification"><ButtonWrapper color="orange">
          <div className="Left"></div>
          <div className="Center">
            <h3>Verify authenticity of an item</h3>
            <p>Scan your item to verify its authenticity</p>
          </div>
        </ButtonWrapper></Link>


      </Wrapper>

    </Layout>
  );
}