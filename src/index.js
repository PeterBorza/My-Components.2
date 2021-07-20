import React from "react";
import ReactDOM from "react-dom";
import { LinkData } from "./context/LinkContext";
import { ImageContextProvider } from "./context/ImageContext";
import { ButtonData } from "./context/ButtonContext";
import { DigitData } from "./context/digit-context";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <DigitData>
            <ButtonData>
                <ImageContextProvider>
                    <LinkData>
                        <App />
                    </LinkData>
                </ImageContextProvider>
            </ButtonData>
        </DigitData>
    </React.StrictMode>,
    document.getElementById("root")
);
