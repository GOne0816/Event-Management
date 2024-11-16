import React from 'react'
import GridBackground  from '../../components/ui/GridBG'
import { Skeleton } from '@/components/ui/skeleton'

const Careers = () => {
  return (
    <div>
      <GridBackground para={"Join us in a Happening Journey"}/>

      {/* First Element */}
      <div className='px-80 py-20 flex gap-24'>
        <div className='py-8'>
            <h1 className='text-4xl font-bold'>WE'RE ON A MISSION OF</h1>
            <h2 className='py-2'>Making the world #Happening</h2>
            <p className='py-4'>In 2011, AllEvents started when we realized that events create a positive impact. Since then, we try that people never miss out on good events they would love to attend.</p>
            <p className='py-8'>“We grow when people working with us grow”</p>
        </div>
        <div>
        <Skeleton className="w-[30rem] min-h-80 max-sm:w-[120px] rounded-lg"/>
        </div>
      </div>

      {/* Second Element */}
      <div>
        <h1 className='text-4xl font-bold text-center'>We are eventful people who like...</h1>
        <div>
            
        </div>
      </div>
      <GridBackground para={"Looking for a Happening career?"} para2={"We are also looking for growth-oriented people! You are halfway into the team if you are the type who gives “x+y” when asked for “x”"}/>

    </div>
  )
}

export default Careers
