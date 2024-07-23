import { createTheme } from "@mui/material/styles"

const AppTheme = createTheme({
    palette: {
        otherColor: {
            main: 'gray'
        }
    },
    components: {
        MuiButton:{
            styleOverrides:{
                root: {
                    backgroundColor: 'black',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'rgb(49, 49, 49)'
                    }
                }
            }
        },
        MuiFab:{
            styleOverrides:{
                root: {
                    textTransform: 'none',
                    padding:{sx: '0px', md:'0px 40px'},
                    border: '1px solid black',
                    // width: {sx: '100%', md:'0'},
                }
            }
        },
    }
})


export default AppTheme