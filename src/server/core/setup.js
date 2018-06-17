import path from 'path'
import { setConfig } from 'next/config'

const config = require(path.resolve('next.config.js'))
setConfig(config)
