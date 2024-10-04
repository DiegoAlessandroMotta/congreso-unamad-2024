import { projectsSection } from "@public/ponentesData";

export async function GET(){
    return new Response(JSON.stringify(projectsSection.projects),{
        headers:{
            'Content-Type':"application/json"
        }
    });
}