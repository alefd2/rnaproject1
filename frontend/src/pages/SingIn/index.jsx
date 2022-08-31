import { Box, Grid } from "@mui/material";

export const SingIn = () => {
    const theme = useTheme();
    return (

        <Grid container spacing={1}>
            <Grid item xs={8}>
                <Item>xs=08</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=04</Item>
            </Grid>
        </Grid>

    );
}