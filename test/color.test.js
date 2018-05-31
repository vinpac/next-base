import { bound01, hslToHex, rgbToHsl, hslToRgb, hexToHsl, hexToRgb, rgbToHex } from './color'

const shade = (hex, p = 0) => {
  const hsl = hexToHsl(hex)
  return hslToHex(hsl[0], hsl[1], hsl[2] + p)
}

describe('QWEqwe', () => {
  it('should transform RGB to HSL', () => {
    console.log(shade('#354665', -8))
  })
})
