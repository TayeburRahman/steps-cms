export default function useAdmin(){ 
    const localAuth = localStorage?.getItem("auth");  
    const {user, token} = JSON.parse(localAuth); 

    if( user?.role === "admin" && token){
        return true; 
    } else{
        return false;
    }
}