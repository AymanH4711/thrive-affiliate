/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '2rem',
			},
			screens: {
				'2xl': '1280px',
			},
		},
		extend: {
			colors: {
				primary: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981',
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
					DEFAULT: '#10B981',
				},
				secondary: {
					500: '#14B8A6',
					600: '#0D9488',
					DEFAULT: '#14B8A6',
				},
				gray: {
					50: '#F9FAFB',
					100: '#F3F4F6',
					200: '#E5E7EB',
					300: '#D1D5DB',
					400: '#9CA3AF',
					500: '#6B7280',
					600: '#4B5563',
					700: '#374151',
					800: '#1F2937',
					900: '#111827',
				},
				success: '#10B981',
				warning: '#F59E0B',
				error: '#EF4444',
				info: '#3B82F6',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			borderRadius: {
				sm: '0.25rem',
				DEFAULT: '0.5rem',
				md: '0.75rem',
				lg: '1rem',
				xl: '1.5rem',
				'2xl': '2rem',
			},
			boxShadow: {
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
				'green-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, #A7F3D0 0%, #10B981 100%)',
				'card-gradient': 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
				'button-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
				'footer-gradient': 'linear-gradient(180deg, #064E3B 0%, #065F46 100%)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}