async function fetchData(){
    const data= await fetch("data.json")
    const jon= await data.json();
    return jon
}

export {fetchData}