import { createGlobalStyle } from 'styled-components'

export type Palette = typeof theme.palette

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
	html{
		font-size: 16px;
		font-weight: 400;
		font-family: 'Lato', sans-serif;
	}
  h1{
    font-size: 28px;
    line-height: 32px;
  }
  h2{
    font-size: 22px;
    line-height: 24px;
  }
  h3{
    font-size: 18px;
    line-height: 20px;
  }
  h4{
    font-size: 16px;
    line-height: 18px;
  }
  h5{
    font-size: 12;
    line-height: 16px;
  }
  p{
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
  }
	p, span {
		letter-spacing: .75px
	}
`

export const theme = {
  palette: {
    primaryBlue: {
      minus2: '#3F81D1',
      minus1: '#005ED1',
      zero: '#003C84',
      plus1: '#004191',
    },
    primaryGreen: {
      minus2: '#B7E845',
      minus1: '#A8F000',
      zero: '#A0E200',
      plus1: '#72A300',
    },
    success: {
      minus2: '#E5FFED',
      minus1: '#12B23F',
      zero: '#0D822E',
      plus1: '#084D1B',
    },
    critical: {
      minus2: '#FFE6E5',
      minus1: '#CC1D1A',
      zero: '#851311',
      plus1: '#4D0B0A',
    },
    warning: {
      minus2: '#FFE5CC',
      minus1: '#FF881A',
      zero: '#CF6400',
      plus1: '#994A00',
    },
    gray: {
      minus3: '#F1F2F4',
      minus2: '#DDE0E4',
      minus1: '#C6CCD2',
      zero: '#ADB5BD',
    },
    black: {
      minus4: '#262626',
      minus3: '#212121',
      minus2: '#1F1F1F',
      minus1: '#1C1C1C',
      zero: '#161616',
    },
    text: {
      white: '#FFFFFF',
      gray: '#979696',
      grayPlusOne: '#4A4A4A',
      black: '#161616',
    },
  },
}