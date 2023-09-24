import React from 'react'
import SBSt from '@/styles/SearchSt.module.css'
import Image from 'next/image'
import { Input, Tooltip } from '@chakra-ui/react'
import { SearchIcon } from 'lucide-react'

function Search() {
  return (
    <div className="relative flex items-center bg-[#fafafa]  ">
      <Input className="m-0 bg-[#fafafa]  focus:ring-none focus:border-gray-300 " />
      <span className="px-2 border-gray-300 border-r border-b border-t p-[6px] text-gray-600 ">
        <button className="flex items-center gap-1 justify-center">
          <span>
            <SearchIcon size={15} />
          </span>
          Caută
        </button>
      </span>
    </div>
  )
}

export default Search
