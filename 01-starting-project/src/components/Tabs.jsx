

export default function Tabs({buttons, children, ButtonsContainer}) {
    // const ButtonsContainer = buttonsContainer; if we are to not put the name with first letter capital the we need to assign it to a const
    // beacuse when it starts with small letter react thinks its an inbuilt html tag
    // if we want to set an default value to contatiner so that it need not be sent for every ussage
    //we can do it like this below after this return statement.
    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}

// like this:
// export default function Tabs({buttons, children, ButtonsContainer = 'menu'}) {
    // or if its a custum component then
// export default function Tabs({buttons, children, ButtonsContainer = Section}) { 
    // but remember that the custom component needs to be imported.