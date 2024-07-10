import { createTheme } from "@mui/material/styles"

const AppTheme = createTheme({
    components: {
        MuiButton:{
            styleOverrides:{
                root: {
                    backgroundColor: 'black',
                    color: 'white'
                }
            }
        }
    }
})


export default AppTheme