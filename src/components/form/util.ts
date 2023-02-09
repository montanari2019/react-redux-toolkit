import { baseURLFetch } from "../../assets/service"

export async function GetEmpresas(token:string) {
    const options = {
        method: "GET",
        // body: JSON.stringify(forms),
        headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        },
    }

    const request = await fetch(`${baseURLFetch}usuario/me/empresa`, options)
        .then((res) => res.json())
        .then((res) =>{
            
            return res
        })
        .catch((err) => {console.log(err)})

        return request

}