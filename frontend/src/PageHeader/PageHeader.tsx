import React from 'react';

import {
    Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading
} from "@blueprintjs/core";

function PageHeader() {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Text Generation Test Page</NavbarHeading>
                <NavbarDivider/>
                <Button className={Classes.MINIMAL} icon="home" text="Home"/>
                <Button className={Classes.MINIMAL} icon="document" text="Files"/>
            </NavbarGroup>
        </Navbar>
    )
}

export default PageHeader;