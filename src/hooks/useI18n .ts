import { messages, Locales } from 'mock/mockMessages'

export { messages } from 'mock/mockMessages'

export const useI18n = (key: Locales) => {
    return messages[key]
}