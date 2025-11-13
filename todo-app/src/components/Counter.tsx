type CounterProps={text:number}
type CounterProfileProps={text:string}

function Counter({text}:CounterProfileProps) {
    return <p>Nilai Counter: {text}</p>
}

export function CounterProfile({text}:CounterProps) {
    return <>
    <p>Nilai Counter : {text}</p>
    <hr/>
    </>
}


export default Counter