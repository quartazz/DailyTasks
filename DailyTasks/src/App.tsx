import { Button, ThemeProvider, createTheme, alpha } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: alpha('#fff', 1),
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// width: '100%',
					// borderRadius: 0,
				},
			},
		},
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Button
					draggable='false'
					color='primary'
					style={{ textTransform: 'none' }}
				>
					Material UI
				</Button>
			</ThemeProvider>
			<button className='mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
				TailWind
			</button>
		</>
	)
}

export default App
