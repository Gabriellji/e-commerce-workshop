let spacer = 8;
export const theme = {
  colors: {
    primary: '#33A0FF',
    secondary: '#33A0FF40',
    light: '#FFFFFF',
    dark: '#000000',
    dark2: '#0000007A',
    grey: '#F0F0F0',
    red: '#FF0000',
    shadow: 'rgba(0, 0, 0, 0.5)',
  },
  fonts: {
    url:
      'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap',
    name: 'Lato',
    fallback: 'sans-serif',
    sizes: { XS: '12px', S: '18px', M: '24px', L: '30px', XL: '48px' },
  },
  spacer: '.5rem',
  spacer2: '.5rem',
  spacer_light: '.5rem',
  spacernumber: 8,
  sizes: {
    navbar: `${6 * spacer}px`,
    buttons: {
      S: `30px`,
      M: `${6 * spacer}px`,
      L: `${9 * spacer}px`,
      XL: `${12 * spacer}px`,
    },
    modals: {
      mobile: { height: '100vh', width: '100vw' },
      login: { height: '600px', width: '450px' },
      cart: { height: '500px', width: '350px' },
      navbar: { height: '300px', width: '75vw' },
    },
    navigation_height: {
      mobile: { height: '60px', width: '100%' },
      desctop: { height: '100px', width: '100%' },
    },
  },
  viewport: { mobile: '450px', tablet: '768px' },
  opacity: { sixty: '0.6', eigthy: '0.8' },
  transition: '0.25s',
  scale: 'scale(1.1)',
};
