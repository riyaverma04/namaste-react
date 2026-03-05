import { useEffect , useState} from "react"

const useOfflineStatus = ()=>{
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
        return ()=>{
            window.removeEventListener("offline",()=>{
                setIsOnline(false);
            })
            window.removeEventListener("online",()=>{
                setIsOnline(true);
            })
        }
    },[])



   
    return isOnline 
}


export default useOfflineStatus;