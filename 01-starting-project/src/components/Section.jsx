
//the below commented part is one way of getting props
// export default function Section({title, id, children}) {
//     return (
//         <section id={id}>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }

//but below here we use the spread operator(...) and send the remaining props like id, this is called forwarded props/proxy props

export default function Section({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}