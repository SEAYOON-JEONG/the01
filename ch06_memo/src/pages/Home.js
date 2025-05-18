import {useEffect} from 'react';
import supabase from '../config/supabaseClient'
const Home=()=>{

useEffect(() => {
  const fetchSmoothies = async () => {
  const { data, error } = await supabase
  .from('smoothies')
  .select()
  console.log(data);

  }

  fetchSmoothies()

}, [])



 return(
  <div className="page Home">
    Hello Smoothies
  </div>
 )
}

export default Home;