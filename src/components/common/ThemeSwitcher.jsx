'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import sunPic from "@/assets/img/header/Sun.svg";
import MoonPic from "@/assets/img/header/moon.svg";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
		{theme ==='light'?<Image className='cursor-pointer' src={MoonPic} alt='light-mode' onClick={() => setTheme('dark')}/>:
		<Image className='cursor-pointer' src={sunPic} alt='light-mode' onClick={() => setTheme('light')}/>
			}
		</>
			
	);
};

export default ThemeSwitcher;