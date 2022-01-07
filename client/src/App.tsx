import React from 'react'
import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import theme from './theme'
import { InterestCalculator } from './components/InterestCalculator'

const defaultTheme = extendTheme(theme)

function App() {
    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <Container pt={6}>
                    <InterestCalculator />
                </Container>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
