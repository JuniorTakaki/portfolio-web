interface ProfessionalCard{
    topic:string
}
export function ProfessionalCard({ topic }:ProfessionalCard){
return(
    <a href="#" className="hover:text-purple-300">{topic}</a>
    
);
}

