import Head from 'next/head'
import CommonLayout from "../layouts/CommonLayout";
import {Box, Container} from "@mui/material"

const Index = () => {
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Box p={12}>
            <div>
                title
            </div>
        </Box>

    </>
  )
}

Index.layout = CommonLayout

export default Index
