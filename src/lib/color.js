export function rgbToHsl(intRed, intGreen, intBlue) {
  const r = intRed / 255
  const g = intGreen / 255
  const b = intBlue / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = (max + min) / 2
  let s = h
  const l = h

  if (max === min) {
    // Achromatic
    h = 0
    s = 0
  } else {
    const diff = max - min
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)

    if (max === r) {
      h = (g - b) / diff + (g < b ? 6 : 0)
    } else if (max === g) {
      h = (b - r) / diff + 2
    } else if (max === b) {
      h = (r - g) / diff + 4
    }

    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

export function hueToRGB(p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

export function hslToRgb(hue, saturation, lightness) {
  const h = hue / 360
  const s = saturation / 100
  const l = lightness / 100
  let r
  let g
  let b

  if (s == 0) {
    r = l
    g = l
    b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hueToRGB(p, q, h + 1 / 3)
    g = hueToRGB(p, q, h)
    b = hueToRGB(p, q, h - 1 / 3)
  }

  return [r * 255, g * 255, b * 255]
}

function intToHex(int) {
  const hex = int.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}
export function rgbToHex(r, g, b) {
  return `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`
}

export function hslToHex(h, s, l) {
  const rgb = hslToRgb(h, s, l)
  return rgbToHex(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]))
}

export function hexToRgb(hex) {
  const startIndex = hex.indexOf('#') + 1
  const length = hex.length > 4 ? 2 : 1

  const rgb = [
    hex.substr(startIndex, length),
    hex.substr(startIndex + length, length),
    hex.substr(startIndex + length * 2, length),
  ]

  if (length === 1) {
    rgb[0] = `${rgb[0]}${rgb[0]}`
    rgb[1] = `${rgb[1]}${rgb[1]}`
    rgb[2] = `${rgb[2]}${rgb[2]}`
  }

  rgb[0] = parseInt(rgb[0], 16)
  rgb[1] = parseInt(rgb[1], 16)
  rgb[2] = parseInt(rgb[2], 16)

  return rgb
}

export function hexToHsl(hex) {
  const rgb = hexToRgb(hex)

  return rgbToHsl(rgb[0], rgb[1], rgb[2])
}

export const shade = (hex, p = 0) => {
  const hsl = hexToHsl(hex)
  return hslToHex(hsl[0], hsl[1], hsl[2] + p)
}
