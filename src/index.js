// Common
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const I18NContext = createContext()

export const QuickProvider = ({ locale, children }) => {

    const [lang, setLang] = useState({})

    if (locale === undefined) {
        throw new Error('QuickProvider need receive a "locale" prop.')
    }

    const getJSON = async () => {
        const lang = await import(`../../../public/locales/${locale}/common.json`)
        setLang(lang.default)
    }

    useEffect(() => {
        getJSON()
        return () => {}
    }, [locale])
    

    const t = useCallback(( key ) => lang[key], [lang])

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