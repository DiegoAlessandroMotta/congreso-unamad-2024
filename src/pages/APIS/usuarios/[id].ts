import type { APIRoute } from "astro";
import { projectsSection } from "@public/ponentesData";



export const GET:APIRoute = async({params})=>{

    const valores = projectsSection.projects.find(b => b.id === Number(params.id));

    if(valores){
        return new Response(JSON.stringify(valores),{
            headers:{
                'Content-Type':"application/json"
            }
        })
    }else{
        return new Response(JSON.stringify({error:"Elemento no econtrado"}),{
            status:404,
            headers:{
                'Content-Type':"application/json"
            }
        });
    }
}