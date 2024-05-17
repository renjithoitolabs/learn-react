import React from "react";

const Footer = () => {

  // L E A R N ===================
  // const cache = {
  //   name: "Code Malayalam"
  // }
  
  // const getJson = (url) => {
  
  //   if(cache) {
  //     return Promise.reject(cache)
  //   }
    
  //   return fetch(url)
  //   .then((data) => {
  //     return data.json()
  //   })
  // }
  
  // getJson('https://jsonplaceholder.typicode.com/todos/1')
  // .then((data) => {
  //   console.log("Request 1-----", data)
  // })
  // .catch((err) => {
  //   console.log("Error 1-----", err)
  // })
  // L E A R N ===================
  
    return (
        <footer className="pt-5 my-5 text-body-secondary border-top">
          Created by the Bootstrap team &middot; &copy; 2024
        </footer>
    );
}

export default Footer;