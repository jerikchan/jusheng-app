import { LANGUAGES } from './src/i18n/config'
import { type CmdOptions } from '@transmart/cli/lib/types'

/** @type {CmdOptions} */
export default {
  baseLocale: 'en',
  locales: LANGUAGES,
  localePath: 'src/i18n/locales',
  openAIApiKey: process.env.OPENAI_API_KEY,
  openAIApiUrl: process.env.OPENAI_API_URL,
  openAIApiModel: 'gpt-3.5-turbo',
}
