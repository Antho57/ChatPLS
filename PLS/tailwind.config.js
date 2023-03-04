/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            screens: {
                'xl-desktop': '1440px',
                'desktop': '1024px',
                'tablet': '768px',
                'phone': '640px',
            },
            fontFamily: {
                'hanson': ['Hanson', 'sans-serif'],
            },
        },
    }
}
