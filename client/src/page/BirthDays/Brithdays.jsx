import React from 'react'
import UpcomingBD from './UpcomingBD'
import AllBirthDays from './AllBirthDays'

const Brithdays = () => {
  return (
    <div>
        <div className="mb-4">
            <UpcomingBD />
        </div>
        <div className="mt-4">
            <AllBirthDays />
        </div>
    </div>
  )
}

export default Brithdays