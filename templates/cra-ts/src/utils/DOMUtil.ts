// // innerHeight/widthを基準に1vh/vw単位の値を計算し,css propertyとしてセット
export const setProperty = () => {
    const vh = window.innerHeight / 100
    const vw = window.innerWidth / 100

    const root = document.documentElement

    root.style.setProperty('--vh', `${vh}px`)
    if (vh > vw) {
        root.style.setProperty('--vmax', `${vh}px`)
        root.style.setProperty('--vmin', `${vw}px`)
    } else {
        root.style.setProperty('--vmax', `${vw}px`)
        root.style.setProperty('--vmin', `${vh}px`)
    }
}
