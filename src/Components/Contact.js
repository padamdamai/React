import React from 'react'
export default function (props) {
  let badgeText;
  if(props.opensport === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card-collection">
    <div className="card">
   {badgeText  && <div className='card-badge'>{badgeText}</div>}
      <img src={props.img} alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{props.name} </h5>
        <p className="card-text">{props.content}</p>
        <button  type='button'><a href="#" className="btn btn-primary">Go somewhere</a></button>
      </div>
    </div> 
    </div>
  )
}

// export default function ({img,name,content}) {
//   return <section>
//   <div className="card">
//     <div className='card-badge'>Sold Out</div>
//       <img src={img} alt="Card image" />  
//         <h5 className="card-title">{name} </h5>
//         <p className="card-text">{content}</p>
//         <button  type='button'><a href="#" className="btn btn-primary">Go somewhere</a></button>
//     </div>  

    
//   </section>
// }
