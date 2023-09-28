"use client"

export function ThemeSwitcher() {

    return(
        <input type="checkbox" className="toggle"  onClick={() => 
            document.getElementsByTagName("html")[0].dataset.theme==="light" ? 
            document.getElementsByTagName("html")[0].dataset.theme = 'dark' : 
            document.getElementsByTagName("html")[0].dataset.theme = 'light'
        }/>
    )
}
