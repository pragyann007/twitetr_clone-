import LeftSideBar from './LeftSideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'
const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto mt-2'>
      <LeftSideBar />
      <Feed/>
      <RightSideBar />
      
      
    </div>
  )
}

export default Home