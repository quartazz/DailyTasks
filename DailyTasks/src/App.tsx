import React, { useEffect, useRef, useState } from 'react'

import Header from './components/header/Header'

function App() {
	const textDivRef = useRef<HTMLDivElement | null>(null)
	const [divWidth, setDivWidth] = useState<number>(0)

	useEffect(() => {
		if (textDivRef.current) {
			const textWidth = textDivRef.current.offsetWidth
			setDivWidth(textWidth)
		}
	}, [textDivRef.current?.offsetWidth])

	return (
		<>
			<Header />
			<div className='p-4 w-full flex justify-left select-none'>
				<div className='flex flex-col p-4 rounded-xl bg-[#141824] w-[24.9rem] h-[15rem] gap-2 relative'>
					<div className='flex flex-col w-full gap-2'>
						<div className='text-2xl text-white w-full font-bold'>
							<span ref={textDivRef}>Пофиксить уязвимость</span>
						</div>
						<div className='gap-2 flex flex-wrap'>
							<div className='rounded-md text-[10px] text-white uppercase bg-[#BE2D2D] w-[7rem] h-[1rem] flex items-center justify-center font-bold'>
								срочно
							</div>
							<div className='rounded-md text-[10px] text-white uppercase bg-[#FF7A58] w-[7rem] h-[1rem] flex items-center justify-center font-bold'>
								в процессе
							</div>
						</div>
					</div>
					<div
						className='p-[.05rem] bg-[#AAA] rounded-xl'
						style={{
							width: `${divWidth}px`,
						}}
					></div>
					{/* separator */}
					<div className='w-full flex flex-col'>
						<div className='h-[70%] text-white overflow-hidden text-clip'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Laboriosam labore enim perspiciatis iste, quia sit aut nihil,
							voluptatem quisquam aspernatur ea autem aliquid adipisci nemo?
							Excepturi, similique odit. Iste, quaerat?
						</div>
						<div className='w-full h-[30%] text-white flex justify-end items-center'>
							<span className='bg-[#0F111A] p-[.25rem]'>Взято: klaka_web</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
