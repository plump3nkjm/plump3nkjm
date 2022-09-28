import {PageWithLayoutType} from "../layouts/pageWithLayout";
import {ReactElement} from "react";
import "../styles/global.scss"

type AppLayoutProps = {
  Component: PageWithLayoutType,
  pageProps: any
}
const MyApp = ({Component, pageProps}: AppLayoutProps) => {
  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
      <Layout>
        <>
          <Component {...pageProps} />
        </>
      </Layout>

  )
}

export default MyApp
