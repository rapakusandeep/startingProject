
function clickHandle() {
    console.log('hello');
}


//how to use children props
export default function TabButton({ children, onTouch, isTouched }) {
    return ( <li><button className={isTouched ? 'active': undefined} onClick={onTouch}>{children}</button></li> );
}
//we call the above child prop like this: <TabButton>Component</tabButton>


// when using attribute props we write same thing like above but when calling this we call it like:
// <TabButton label="Component"></tabButton>