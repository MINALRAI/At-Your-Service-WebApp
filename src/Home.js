import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
  return (
    <div className='home'>
        <img className='home__image'
        src="https://i.pinimg.com/564x/ac/bf/54/acbf54ecbccec89a1da8507378e2303d.jpg" 
        alt=""/>

        {/*Product id, title, price, rating, image */}
        <div className='home__row'>
        <Product 
          id= "12321341"
          title ="Patanjali Saundarya Aloe Vera Gel 60 mL pure aloe extracts with herbal richness"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        />
          <Product 
          id= "12321342"
          title ="Frito Lay Classic Mix, Variety Pack (30 Pack)
          Brand: Frito Lay"
          price = {750}
          rating = {5}
          image = "https://m.media-amazon.com/images/I/71Q+FO4KkDL._SL1200_.jpg"
        />
         {/* <Product 
          id= "12321341"
          title ="Patanjali Aloe Vera Gel"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        /> */}
        </div>
        <div className='home__row'>
        <Product 
          id= "13321341"
          title ="Patanjali Aloe Vera Gel"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        />
          <Product 
          id= "13321342"
          title ="Patanjali Aloe Vera Gel"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        />
        <Product 
          id= "13321343"
          title ="Patanjali Aloe Vera Gel"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        />
        </div>
        <div className='home__row'>
        <Product 
          id= "14321341"
          title ="Patanjali Aloe Vera Gel"
          price = {65}
          rating = {4}
          image = "https://www.netmeds.com/images/product-v1/600x600/413298/patanjali_saundarya_aloevera_gel_60_ml_0.jpg"
        />
        </div>
        
        {/*product  */}
    
    </div>
  )
}

export default Home
