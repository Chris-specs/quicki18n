// Common
import { createContext, useCallback, useContext, useMemo } from "react";

const I18NContext = createContext()

export const QuickProvider = ({ locale, children }) => {

    if (locale === undefined) {
        throw new Error('QuickProvider need receive a "locale" prop.')
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
        throw new Error('useQuick must be used within a QuickProvider.')
    }

    return context
}