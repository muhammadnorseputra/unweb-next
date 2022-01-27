import { SunIcon, MoonIcon, QrcodeIcon, MenuAlt1Icon } from '@heroicons/react/solid'

// Switch Darkmode
function IconMoon() {
    return (
        <MoonIcon className="h-6 w-5 fill-slate-600" />
    )
}

function IconSun() {
    return (
        <SunIcon className="w-5 h-6 text-yellow-200"/>
    )
}

function IconQr() {
    return (
        <QrcodeIcon className="h-6 w-6 ml-3" />
    )
}

function IconMenu() {
    return (
         <MenuAlt1Icon className="h-5 w-5" />
    )
}

export { IconMoon, IconSun, IconQr, IconMenu } 