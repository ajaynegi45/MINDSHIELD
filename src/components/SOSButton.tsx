import React from 'react';
import Link from "next/link";
import Style from "./SOSButton.module.css";

const SosButton = () => {
    return (
        <>
            <div className={Style.buttonContainer}>
                <Link href={"#"} >SOS Alert 🚨</Link>
            </div>
        </>
    );
};

export default SosButton;