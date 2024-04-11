import goldLogo from '../assets/goldLogo.png';
import Menu from './Menu';


const SideBar= () => {
  return (
    <div className='h-screen'>
      <div className='h-[15%] flex justify-center items-center'>
  <span className="block h-24 w-32">
  <img src={goldLogo} />
  </span>
      </div>
      <div className=''>
      
        <Menu/>
    
      </div>
    </div>
  )
}

export default SideBar