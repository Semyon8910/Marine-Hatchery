import { SyntheticEvent, useEffect, useState } from "react";
import "./HeaderLayout.css";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

function HeaderLayout(): JSX.Element {
    const [value, setValue] = useState("HET");
    const handleChange = (event: SyntheticEvent, newValue:String) => {
        setValue(newValue as string);
    }
    // useEffect(() => {
    //     const myJWT = localStorage.getItem("jwt") || ".";
    // },[]);
    return (
        <div className="HeaderLayout">
			<h1>Marine Hatchery</h1>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                <Tab label="HET" value="HET" component={Link} to="/het" />
                <Tab label="TET" value="TET" component={Link} to="/tet" />
                <Tab label="YUD" value="YUD" component={Link} to="/yud" />
                <Tab label="YA" value="YA" component={Link} to="/ya" />
            </Tabs>
            
        </div>
    );
}

export default HeaderLayout;
