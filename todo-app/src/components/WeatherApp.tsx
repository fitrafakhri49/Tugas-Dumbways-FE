//custom hooks => debounce
import { useEffect,useState } from "react";
import { fetchWeather } from "../api/weather";
//custom hooks => debounce
function useDebounce<T>(value:T, delay:number){
    const [debounceValue,setDebounceValue]=useState(value)

    useEffect(()=>{
        const handler  = setTimeout(() => 
            setDebounceValue(value),delay);
            return ()=>clearTimeout(handler)
    }, [value,delay])
    return debounceValue
} 


//lifecycle component mounting,updating,unmounting

export function WeatherApp() {
    const [cityInput,setCityInput]=useState("")
    const [weatherData,setWeatherData]=useState<{city:string;temperature:number} | null>(null)
    const [loading,setLoading]=useState(false);
    const debounceCity=useDebounce(cityInput,1000)

    // console.log(debounceCity)

    useEffect(()=>{
        if(debounceCity){
            setLoading(true);
            fetchWeather(debounceCity).then((data)=>setWeatherData(data)).finally(()=>setLoading(false));
        }
    },[debounceCity]);


    const  handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
        setCityInput(e.target.value)
    }
    return (
        <>
    <h1>Weather App</h1>
    <input type="text" placeholder="Enter City" value={cityInput} onChange={handleOnChange} />
        {loading &&  <p>Loading...</p>}

        {weatherData&&!loading && (
            <>
            <h2>{weatherData.city}</h2>
            <h2>{weatherData.temperature}"c</h2>
            </>
        )}

</>
    )
}

//ngetik =>debounce/hold=>5 detik => teruskan value inputan => useEffect =>fetching data