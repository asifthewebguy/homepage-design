module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            // roboto
            sans: ["Roboto", "sans-serif"],
        },
        fontSize: {
            //  base, lg, xl, 2xl, 3xl, 5xl,
            'base': '1rem', // 16px
            'lg': '1.125rem', // 18px
            'xl': '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '5xl': '2.25rem', // 40px
        },
        screens: {
            // sm, md, lg, xl
            'sm': { 'max': '640px' }, // 640px
            'md': { 'min': '641px', 'max': '768px' }, // 768px
            'lg': { 'min': '769px', 'max': '1024px' }, // 1024px
            'xl': { 'min': '1025px' }, // 1025px
        },
        extend: {},
    },
    plugins: [],
}