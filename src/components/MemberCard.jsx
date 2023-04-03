export default function MemberCard(props){

    //badges and deps may not be the best approach but dealine 
    
    const retDeps = () =>{
        let deps = [];
        let splittedDeps = props.deps.split(" ");
        for(let dep in splittedDeps)
            deps.push(<div className="badge badge-outline">{splittedDeps[dep]}</div>)
    
        return deps
    }
   

    return(
    <div className="lg:mr-[1.5vw] lg:ml-[1.5vw] mb-[2vw] mt-[2vw] card w-96 bg-base-300 shadow-xl scale-100 hover:scale-105 hover:drop-shadow-[0px_0px_35px_rgba(0,0,0,0.25)] transition-all">
        <figure><img src={props.src} alt={props.name}/></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl">
                {props.name}
                <div className={`${props.badgeType} badge empty:invisible`}>{props.status}</div>
            </h2>
            <p className="text-l">{props.text}</p>
            <div className="card-actions justify-start">
                
            </div>
            <div className="card-actions justify-end">
                {retDeps()}
            </div>
        </div>
    </div>
    )
}
