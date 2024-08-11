import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

    const url = "https://polymer-backend.onrender.com";
    const[image, setImage] = useState(false);
    const[data, setData] = useState({
        name : "",
        description : "",
        price :"",
        category : "Zebra Crossing"
    })

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setImage(file)
        }
    }

    const changeHandle = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}));
    }
    // useEffect(()=>{
    //     console.log(data);
    // }, [data]);

    const onSumbitHandler = async (event)=>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("price", Number(data.price));
        formData.append("image", image );


        const response = await axios.post(`${url}/food/add` , formData);
        if(response.data.success){
            setData({
                name : "",
                description : "",
                price :"",
                category : "Zebra Crossing"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className="add">
        <form  onSubmit={onSumbitHandler}  className="flex-col">
            <div className="add-img-upload  flex-col">
                <p>Upload Our Service image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
                </label>
                <input type='file' id='image' onChange={handleImageChange}   hidden required />
            </div>
            <div className="add-product-name flex-col" >
                <p>Service name</p>
                <input type='text'  onChange={changeHandle} value={data.name}  name='name'   placeholder='type here'  required/>
            </div>
            <div className="add-product-description  flex-col">
                <p>Service description</p>
                <textarea name='description'  onChange={changeHandle}  value={data.description}      rows='6' placeholder='write content here' required />
            </div>
            <div className="add-category-price">
                <div className="add-category   flex-col"> 
                    <p>Service category</p>
                    <select  onChange={changeHandle}   name="category" id="category">
                       <option value="Zebra Crossing">Zebra Crossing</option>
                       <option value="Injection Grouting">Injection Grouting</option>
                       <option value="coving">coving</option>
                       <option value="Resurfacing">Resurfacing</option>
                       <option value="Epoxy & Epoxy Flooring">Epoxy & Epoxy Flooring</option>
                       <option value="PU & PU Wall Coatings">PU & PU Wall Coatings</option>
                       <option value="Waterproofing">Waterproofing</option>
                       {/* <option value="Fride Rice">Fride Rice</option> */}
                       {/* <option value="Mutton">Mutton</option>
                       <option value="Pratha">Pratha</option>
                       <option value="Pasta">Pasta</option> */}
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input type="Number" onChange={changeHandle} value={data.price} name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add











// import React, { useEffect, useState } from 'react';
// import './Add.css';
// import { toast } from 'react-toastify';

// const Add = () => {
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad"
//   });

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem('formData'));
//     if (savedData) {
//       setData(savedData);
//     }
//   }, []);

//   const changeHandle = (event) => {
//     const { name, value } = event.target;
//     setData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();

//     localStorage.setItem('formData', JSON.stringify(data));

//     setData({
//       name: "",
//       description: "",
//       price: "",
//       category: "Salad"
//     });

//     toast.success("Data saved to local storage successfully!");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <label>
//           Name:
//           <input type="text" name="name" value={data.name} onChange={changeHandle} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={data.description} onChange={changeHandle} />
//         </label>
//         <label>
//           Price:
//           <input type="text" name="price" value={data.price} onChange={changeHandle} />
//         </label>
//         <label>
//           Category:
//           <select name="category" value={data.category} onChange={changeHandle}>
//             <option value="Salad">Salad</option>
//             <option value="Main Course">Main Course</option>
//             <option value="Dessert">Dessert</option>
//             <option value="Beverage">Beverage</option>
//           </select>
//         </label>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Add;
