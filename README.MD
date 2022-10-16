# QuickI18N

Translations fast and easy for React and NextJS projects.

## Installation

Install with yarn or npm

```bash 
npm i quicki18n-react
yarn add quicki18n-react
```

## Usage

Create your translation files with this structure.

```bash 
|-- public
    |-- locales
        |-- en
        |   |-- common.json
        |-- es
        |   |-- common.json
```

Go to the root of your application and do this:

```jsx 
import { QuickProvider } from 'quicki18n-react'

const MyApp = () => (
    <QuickProvider locale='en'>
        { component }
    </QuickProvider>
)
```
Go to the component you need to insert a translation of and do this:

```jsx 
import { useQuick } from 'quicki18n-react'

const Component = () => {

    const { t } = useQuick()
  
    return (
        <h1>{t('translation_key')}</h1>
    )
}
```

## 
Made with ❤️ by [Chris](https://github.com/Chris-specs) 