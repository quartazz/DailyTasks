import { Button, ThemeProvider, createTheme, alpha } from '@mui/material'
import list from '/src/img/list.svg';

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

					backgroundColor: '#141824',
					color: '#AAAAAA',
					width: '24rem',
					borderRadius: '18px',
					display: 'flex',
					padding: '0.65rem'
				},
			},
		},
	},
})

function App() {
	return (
		<>
			<div className='p-8'>
				<div className="justify-between flex">
					<ThemeProvider theme={theme}>
						<div className="gap-3 flex">
							<Button
							draggable='false'
							color='primary'
							className='items-center'
							style={{ textTransform: 'none' }}
							>
							Открыть списком
							</Button>

							<Button
							draggable='false'
							color='primary'
							className='items-center'
							style={{ textTransform: 'none' }}
							>
							Новая задача
							</Button>
						</div>

						<div className="">
						<Button
							draggable='false'
							color='primary'
							className='items-center'
							style={{ textTransform: 'none' }}
							>
							Профиль
							</Button>
						</div>
					</ThemeProvider>


				</div>
			</div>
		</>
	)
}

export default App
