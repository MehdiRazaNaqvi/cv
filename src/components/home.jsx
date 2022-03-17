
import { useState } from "react";
import "../App.css"

import TextField from '@mui/material/TextField';

import main from "./imgg.svg"

import Switch from '@mui/material/Switch';

import ComboBox from "./mui"


import Autocomplete from '@mui/material/Autocomplete';

import mainb from "./cvb.svg"



const Home = () => {






    let [darkmode, setmode] = useState(false);
    let [data, setdata] = useState({ name: "", city: "", des: "", age: "", lang: "", exp: "", skills: "", cert: "", edu: "", ref: "", img: "" })


 



    const countries = [

        { code: 'AI', label: 'Anguilla', phone: '1-264' },

        { code: 'AO', label: 'Angola', phone: '244' },

        { code: 'Pk', label: "Pakistan", phone: '92' },


    ];


    return (

        <div className={darkmode ? "grand darkmode" : "grand"} >

            <div className="togle" >
                <Switch className="switch"  color="default" size="small" onChange={() => setmode(!darkmode)} />
            </div>

         


            <div className={darkmode ? "input_div darkmode" : "input_div"} >


                <img className="main_img" src={darkmode ? mainb : main} />




                <div className="pehla_dabba" >



                    <TextField
                        
                        id="standard-multiline-static"
                        label="Name"
                        multiline
                        size="small"
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

                        id="standard-multiline-static"
                        label="Designation"
                        multiline
                        // size="medium"
                        placeholder='Enter design.'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, des: e.target.value })}
                    /> <TextField

                        id="standard-multiline-static"
                        label="Age"
                        multiline
                        placeholder='Enter age'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, age: e.target.value })}
                    />


                    <TextField

                        id="standard-multiline-static"
                        label="Language"
                        multiline
                        // size="medium"
                        placeholder='Enter language'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, lang: e.target.value })}
                    />

                    <ComboBox onClick={() => console.log("kjbkj")} />




                </div>




                <div className="dosra_dabba">



                    <TextField
                        id="standard-multiline-static"
                        label="Experiance"
                        multiline
                        // size="medium"
                        placeholder='Enter experiance'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, exp: e.target.value })}
                    />

                    <TextField
                        id="standard-multiline-static"
                        label="Skills"
                        multiline
                        // size="medium"
                        placeholder='Enter skills'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, skills: e.target.value })}
                    />

                    <TextField
                        id="standard-multiline-static"
                        label="Certification"
                        multiline
                        // size="medium"
                        placeholder='Enter Certifications'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, cert: e.target.value })}
                    />



                    <TextField
                        id="standard-multiline-static"
                        label="Education"
                        multiline
                        // size="medium"
                        placeholder='Enter education'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, edu: e.target.value })}
                    />

                    <TextField
                        id="standard-multiline-static"
                        label="Reference"
                        multiline
                        // size="medium"
                        placeholder='Enter reference'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, ref: e.target.value })}
                    />


                    <TextField

                        id="standard-multiline-static"
                        label="Photo"
                        multiline
                        value=""
                        placeholder='Enter img address'
                        variant="standard"
                        onChange={(e) => setdata({ ...data, img: e.target.value })}
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

                <div className="item item2">
                    <img className="choti_img" src={data.img} /> </div>

                <div className="item item3"> <h1>Experiance </h1> {data.exp} </div>
                <div className="item item4"> <h1>Skills</h1>  {data.skills} </div>
                <div className="item item5"> <h1>Certifications</h1> {data.cert} </div>
                <div className="item item6"> <h1>Education</h1> {data.edu} </div>
                <div className="item item7"> <h1>References</h1> {data.ref} </div>

            </div >





        </div >


    )
}


export default Home


