import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../contexts/themeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function ButtonTheme() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            {
                theme === themes.light ? <FontAwesomeIcon className='btn' title='Dark Theme' icon={faMoon} 
                onClick={() => {setTheme(theme === themes.light ? themes.dark : themes.light) }}/> 

                : <FontAwesomeIcon  className='btn' title='Light Theme' icon={faSun} 
                onClick={() => {setTheme(theme === themes.light ? themes.dark : themes.light) }}/>
            
            }
        </>
    )
}

export default ButtonTheme


