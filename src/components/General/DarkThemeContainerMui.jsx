import { ThemeProvider, createTheme } from '@mui/material/styles';

const DarkThemeContainerMUI =({children})=>{

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    )
}

export default DarkThemeContainerMUI;