
import Hero from "./components/Hero";

import {Box} from "@mui/material";

const App = () => {

    return (
        <div>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '100vw' }}>
                <Hero></Hero>

            </Box>
        </div>
    );
};

export default App;
