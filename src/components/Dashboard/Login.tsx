import { Grid, Paper } from "@mui/material";
import { useState } from "react";

export const Login = () => {
    return (
        <Grid
            container
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid
                container
                width={"500px"}
                height={"700px"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Paper
                elevation={2}
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "flex",
                        justifyContent: "flex",
                    }}                
                >

                </Paper>
            </Grid>
        </Grid>
    )
};