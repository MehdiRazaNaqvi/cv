
import { useState } from "react";
import "../App.css"

import TextField from '@mui/material/TextField';
import main from "./imgg.svg"


const Home = () => {



    let [data, setdata] = useState({ name: "", city: "", des: "", age: "", lang: "", exp: "", skills: "" , cert : "" , edu : "" , ref : ""})

    return (

        <div className="grand" >
            

            <div className="input_div">

                
                
                 <img className="main_img" src={main} alt="" />


                <div className="pehla_dabba" >
                        
                    <TextField

                        id="standard-multiline-static"
                        label="Name"
                        multiline
                        size="medium"
                        placeholder='Enter your name'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, name: e.target.value })}
                    />
                    <TextField

                        id="standard-multiline-static"
                        label="City"
                        multiline
                        size="medium"
                        placeholder='Enter your city'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, city: e.target.value })}
                    />
                    <TextField

                        id="standard-multiline-static input"
                        label="Designation"
                        multiline
                        // size="medium"
                        placeholder='Enter design.'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, des: e.target.value })}
                    /> <TextField

                        id="standard-multiline-static input"
                        label="Age"
                        multiline
                        placeholder='Enter age'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, age: e.target.value })}
                    />


                    <TextField

                        id="standard-multiline-static input"
                        label="Language"
                        multiline
                        // size="medium"
                        placeholder='Enter language'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, lang: e.target.value })}
                    />



                </div>

                <div className="dosra_dabba">


                  
                        <TextField
                            id="standard-multiline-static input"
                            label="Experiance"
                            multiline
                            // size="medium"
                            placeholder='Enter experiance'
                            variant="standard"
                            onChange={(e) => setdata({ ...data, exp: e.target.value })}
                        />

                        <TextField
                            id="standard-multiline-static input"
                            label="Skills"
                            multiline
                            // size="medium"
                            placeholder='Enter skills'
                            variant="standard"
                            onChange={(e) => setdata({ ...data, skills: e.target.value })}
                        />

                        <TextField
                            id="standard-multiline-static input"
                            label="Certification"
                            multiline
                            // size="medium"
                            placeholder='Enter Certifications'
                            variant="standard"
                            onChange={(e) => setdata({ ...data, cert: e.target.value })}
                        />

                  
                
                        <TextField
                            id="standard-multiline-static input"
                            label="Education"
                            multiline
                            // size="medium"
                            placeholder='Enter education'
                            variant="standard"
                            onChange={(e) => setdata({ ...data, edu: e.target.value })}
                        />

                        <TextField
                            id="standard-multiline-static input"
                            label="Reference"
                            multiline
                            // size="medium"
                            placeholder='Enter reference'
                            variant="standard"
                            onChange={(e) => setdata({ ...data, ref: e.target.value })}
                        />



                    




                </div>




            </div>







            < div className="parent" >


                <div className="item item1">

                    <span className="pehla">
                        <h2>{data.name}</h2>
                    </span>

                    <span className="dosra" >
                        <h3>{data.city}</h3>
                    </span>

                    <span className="tesra">
                        <h3>{data.des}</h3>
                    </span>

                    <span className="chota" >
                        <h3> {data.age}</h3>
                    </span>

                    <span className="panch" >
                        <h3> {data.lang}</h3>
                    </span>

                </div>

                <div className="item item2"> </div>

                <div className="item item3"> <h1>Experiance </h1> {data.exp} </div>
                <div className="item item4"> <h1>Skills</h1>  {data.skills} </div>
                <div className="item item5"> <h1>Certifications</h1> {data.cert} </div>
                <div className="item item6"> <h1>Education</h1> {data.edu} </div>
                <div className="item item7"> <h1>References</h1> {data.ref} </div>

            </div >





        </div >


    )
}

// const mapDispatchToProps = (dispatch) => ({
//     pressed: () => dispatch(pressed(data.name, data.age, data.qual, data.experiance))
// })
export default Home


