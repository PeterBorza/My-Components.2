import React from "react";
import ReactDOM from "react-dom";

import { LinkData, ButtonData, DigitData, ImageData } from "./context";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <DigitData>
            <ButtonData>
                <ImageData>
                    <LinkData>
                        <App />
                    </LinkData>
                </ImageData>
            </ButtonData>
        </DigitData>
    </React.StrictMode>,
    document.getElementById("root")
);
