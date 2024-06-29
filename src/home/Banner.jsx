import React from 'react';
import productData from '../products.json';
import { useState } from 'react';

const title = (
    <h2>Search Your One From <span>Thousand</span> Of Product</h2>
)

const desc = "We have the largest collection of the products available"

const bannerList = [
  {
  iconName: "icofont-users-alt-4",
  text: "1.5 Million Customers",
  },
  {
  iconName: "icofont-notification",
  text: "More then 2000 Marchent",
  },
  {
  iconName: "icofont-globe",
  text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);
  // console.log(productData)

  // Search functionality
  const handleSearch = e => {
    const SearchTerm = e.target.value;
    setSearchInput(SearchTerm);

    // Filtering product based on search
    const filtered = productData.filter((product) => product.name.toLowerCase().includes(SearchTerm.toLowerCase()));

    setfilteredProducts(filtered);
  }
  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <input type="text" name='search' id='search' placeholder='Search Your Products' value={searchInput} onChange={handleSearch} />
          </form>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner