import React from "react";

const AppLayout = () => (WrapperComponent) =>{
    console.log("gfdg",WrapperComponent);
    return (props) => {
        return(
        <>
        <div>Header</div>
        <WrapperComponent {...props} />
        <div>Footer</div>
        </>
        )
    }
}

export default AppLayout;