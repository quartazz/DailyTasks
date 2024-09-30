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
					backgroundColor: '#141824',
					color: '#AAAAAA',
					width: '12rem',
					borderRadius: '18px',
					display: 'flex',
					padding: '0.65rem',
					textTransform: 'none',
				},
			},
		},
	},
})

interface MyButtonProps {
	name: string
	icon?: React.ReactNode
}

const MyButton: React.FC<MyButtonProps> = ({ name, icon }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Button draggable='false' color='primary'>
					<div className='flex justify-left items-center w-full'>
						<div
							className='flex justify-center items-center'
							style={{ width: '20%' }}
						>
							{icon && (
								<img src={icon} style={{ width: '16px', height: '16px' }} />
							)}
						</div>
						<div
							className='flex justify-left items-center'
							style={{ width: '80%' }}
						>
							{name}
						</div>
					</div>
				</Button>
			</ThemeProvider>
		</>
	)
}

export default MyButton
