import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { api } from "@/services/api";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
type MovieType ={
 id:number;
 title:string;
 genre:string;
 plot:string;
}


export default function Movies(){
    const [movies,setMovies]=useState<MovieType[]>([]);
    const [loading,setLoading]=useState(true)
    const [selectedMovie,setSelectedMovie]=useState<MovieType | null>(null)

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const res = await api.get("/movies")
                setMovies(res.data.data)
            } catch (error) {
                console.error("Gagal Fetch Data Movies")
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    return(
        <div className="p-4">

        <h1 className="text-5xl mb-4 font-bold">Movies</h1>

        {loading ? (
            <p className="text-center">Loading.....</p>
        ) :(
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 ">
        {movies.map((movie)=>(
            <Dialog key={movie.id}>
                <DialogTrigger asChild>
                <Card onClick={()=>setSelectedMovie(movie)} className="cursor-pointer hover:shadow-md transition">
                <CardHeader>
                    <CardTitle>{movie.title}</CardTitle>
                    <CardDescription className="truncate">{movie.genre}</CardDescription>
                    </CardHeader>    
                    </Card>                
                    </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedMovie?.title}</DialogTitle>
                        <DialogDescription>
                            {selectedMovie?.genre}
                            <br></br>
                            {selectedMovie?.plot}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            ))}
            </ul> 
        )}
            
        </div>
    )
}


