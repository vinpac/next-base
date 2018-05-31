import { shade, rgbToHsl, hexToRgb, parseSymbol } from 'Lib/color'
import expect from 'expect'

describe('QWEqwe', () => {
  it('should transform RGB to HSL', () => {
    expect(rgbToHsl(142, 24, 84)).toEqual([
      329.4915254237288,
      71.08433734939759,
      32.549019607843135,
    ])
  })

  it('should parse a symbol', () => {
    expect(parseSymbol('#354665')).toEqual({ type: 'hex', value: '#354665' })
    expect(parseSymbol('rgb(123,41,51)')).toEqual({ type: 'rgb', value: [123, 41, 51] })
    expect(parseSymbol('hsl(12, 41, 51)')).toEqual({ type: 'hsl', value: [12, 41, 51] })
  })

  it('should transform HEX to RGB', () => {
    expect(hexToRgb('#354665')).toEqual([53, 70, 101])
  })

  it('should shade a hex by -8%', () => {
    expect(shade('#354665', -8)).toEqual('#27334a')
  })

  it('should shade an hsl by 8%', () => {
    expect(shade('hsl(53, 70, 60)', 8)).toEqual('#e7d974')
  })

  it('should shade a rgb by 8%', () => {
    expect(shade('rgb(53, 70, 101)', 8)).toEqual('#435980')
  })
})
