// Common
import { createContext, useCallback, useContext, useMemo } from "react";

const I18NContext = createContext()

export const QuickProvider = ({ locale, children }) => {

    if (locale === undefined) {
        throw new Error('I18NProvider need receive a "locale" prop.')
    }

    const lang = useMemo(() => require(`../../public/locales/${locale}.json`), [locale])

    const t = useCallback(( key ) => lang[key], [locale])

    return (
        <I18NContext.Provider value={{ t }}>
            { children }
        </I18NContext.Provider>
    )
}

export const useQuick = () => {
    const context = useContext(I18NContext)

    if (context === undefined) {
        throw new Error('useI18N must be used within a I18NProvider.')
    }

    return context
}