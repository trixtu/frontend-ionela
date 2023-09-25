import React, { useEffect, useState } from 'react'
import { Input } from '@chakra-ui/react'
import { SearchIcon } from 'lucide-react'
import axios from 'axios'
import ProductBox from './product-box'
import NewProducts from '../new-products'
import SearchResult from './searchResult'

function Search() {
  const [phrase, setPhrase] = useState('')
  const [products, setProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (phrase.length > 0) {
      axios
        .get('/api/products?phrase=' + encodeURIComponent(phrase))
        .then((response) => {
          setProducts(response.data)
        })
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [phrase])

  return (
    <>
      <div className="relative">
        <div className="relative flex items-center bg-[#fafafa]  ">
          <Input
            className="m-0 bg-[#fafafa]  focus:ring-none focus:border-gray-300 "
            onChange={(e) => setPhrase(e.target.value)}
            value={phrase}
          />
          <span className="px-2 border-gray-300 border-r border-b border-t p-[6px] text-gray-600 ">
            <button className="flex items-center gap-1 justify-center">
              <span>
                <SearchIcon size={15} />
              </span>
              Caută
            </button>
          </span>
        </div>

        <SearchResult
          products={products}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  )
}

export default Search
