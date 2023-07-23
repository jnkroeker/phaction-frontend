import { useState } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Center } from "../components/Center"
import { Login } from "../components/Auth/login"
import { Register } from "../components/Auth/register"
import { GlobalStyle, theme } from "@/shared/theme"
import { store as appStore } from "@/store"

function MyApp({ Component, pageProps }: any) {
  const [currentForm, setCurrentForm] = useState('login')
  const {store, props } = appStore.useWrappedStore(pageProps);

  const toggleForm = (formName: string) => {
    setCurrentForm(formName)
  }

  return (
    <>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme}/>
          <Head>
            <title>Empowering the Quantified Self Community</title>
          </Head>

          <Header />
          <main className="main">
            <Center>
              <Component {...pageProps} />
            </Center>
          </main>
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp