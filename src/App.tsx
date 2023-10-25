import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SignupForm from './components/Form/SignupForm'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#333333'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <SignupForm />
        </ThemeProvider>
    )
}

export default App
