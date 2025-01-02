import   logo from '../../public/img/logo.png'
import   html from '../../public/img/html.png'
import   css from '../../public/img/css.png'
import   bootstrap from '../../public/img/bootstrap.jpg'
import   scss from '../../public/img/scss.png'
import   jq from '../../public/img/jq.png'
import   react from '../../public/img/react.png'
import   js from '../../public/img/js.png'
import   firebase from '../../public/img/firebase.png'
import   strapi from '../../public/img/strapi.jpg'
import   sql from '../../public/img/sql.jpg'



export default function Skills() {
  return (
    <div className='container' id='skills'>
      <h1>My Skills</h1>

      <div className="row mt-5" style={{display:'',alignItems:"center"}}>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={html} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={css} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={react} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={js} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black '}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={bootstrap} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={scss} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={jq} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
       
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={firebase} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={strapi} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="card text-center" style={{border:'none'}}>
            <div className="img-skills mx-auto mb-5" style={{width:'150px' , textAlign:'center' , display:'flex' , justifyContent:'c'}}>
            <img src={sql} alt="" style={{width:'100%' , textAlign:'center' , backgroundColor:'black'}}/>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}
