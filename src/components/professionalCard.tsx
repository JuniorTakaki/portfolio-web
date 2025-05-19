interface ProfessionalCard{
    topic:string
}
export function ProfessionalCard({ topic }:ProfessionalCard){
return(
    <a href="#" className="hover:text-purple-300 transition-colors duration-200 transition-transform duration-300 hover:scale-105">{topic}</a>
    
);
}

