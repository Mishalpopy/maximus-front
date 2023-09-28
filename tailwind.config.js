/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '3rem',
      
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': {'max': '1300px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max': '1280px'},
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  theme: {
    fontSize: {
      'base': ['1rem', {
        lineHeight: '1.05rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      'baseBtnWht': ['17px', {
        lineHeight: '2em',
        fontWeight: '600',
      }],
      'baseBtn': ['17px', {
        lineHeight: '2em',
        fontWeight: '600',
      }],

      'proHeading': ['16px', {
        lineHeight: '20px',
        fontWeight: '700',
      }],
      'proCate': ['16px', {
        lineHeight: '1.411765em',
        transition: 'color .3s ease-out',
        fontWeight: '400',
        textColor: '#000',

      }],
      'proBrand': ['16px', {
        lineHeight: '24px',
        transition: 'color .3s ease-out',
        fontWeight: '600',
        textColor: '#000',

      }],
      'proPrice': ['14px', {
        lineHeight: '1.411765em',
        transition: 'color .3s ease-out',
        fontWeight: '900',
        textColor: '#242424',

      }],
      'lg': ['1rem', {
        lineHeight: '3.875rem',
   
        fontWeight: '500',
      }],
      '1xl': ['1.063rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0.02em',
        textColor: '#ffffff',
        textTransform: 'lowercase',
        fontWeight: '700',
      }],
      'sm': ['1.375rem', {
        lineHeight: '1.5rem',       
        fontWeight: '600',
      }],
      'sm-xs': ['3.875rem', {
        lineHeight: '1.05em',
        fontWeight: '400',
        fontStyle: 'normal',
      }],
      'sm-desc': ['1.313rem', {
        lineHeight: '1em',        
        fontWeight: '400',
      }],
      'largeHeading': ['126px', {
        lineHeight: '0.987013em',
        fontWeight: '400',
        fontStyle: 'normal',
      }],
      'tabHeading': ['14px', {
        lineHeight: '17px',
        fontWeight: '800',
       
      }],
      'filterProduct': ['17px', {
        lineHeight: '1.16667em',
        fontWeight: '600',
       
      }],
      'filterProductSub': ['14px', {
        lineHeight: '1.16667em',
        fontWeight: '400',
       
      }],
      'productDesHead': ['53px', {
        lineHeight: '.987013em',
        fontWeight: '400',
       
      }],
      'productDesRate': ['34px', {
        lineHeight: '1.1428571em',
        fontWeight: '700',
        textColor : '#ed1a38'
       
      }],
      'productDes': ['17px', {
        lineHeight: '24px',
        fontWeight: '400',
   
       
      }],
      'DescriptionTab': ['17px', {
        lineHeight: '1.1764706em',
        fontWeight: '700',
      }],
      'DescriptionPara': ['17px', {
        lineHeight: '1.411765em',
        fontWeight: '300',
        
      }],
      'relatedHeading': ['17px', {
        lineHeight: '1.1764706em',
        fontWeight: '700',
        
      }],
      'relatedHeading': ['17px', {
        lineHeight: '1.1764706em',
        fontWeight: '700',
        
      }],
      'relatedDesc': ['16px', {
        lineHeight: '1.2857143em',
        fontWeight: '400',
        
      }],
      'relatedRate': ['14px', {
        lineHeight: '1.2857143em',
        fontWeight: '900',
        textColor: '#242424',
        
      }],
      'bannerHeading': ['58px', {
        lineHeight: '1.2857143em',
        fontWeight: '400',
        textColor: '#121212',
        
      }],
      'bannerDesc': ['21px', {
        lineHeight: '1.2857143em',
        fontWeight: '400',
        textColor: '#000000',
        
      }],
      'showingPro': ['16px', {
        lineHeight: '1.2857143em',
        fontWeight: '600',
        textTransform: 'uppercase',
        textColor: '#000000',
        
      }],
      'Sort': ['12px', {
        lineHeight: '1.16667em',
        fontWeight: '900',
        textTransform: 'uppercase',
        textColor: '#000000',
        
        
      }],
      'Pricing': ['18px', {
        lineHeight: '1.16667em',
        fontWeight: '700',
        textTransform: 'uppercase',
        textColor: '#000000',
        
        
      }],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}


