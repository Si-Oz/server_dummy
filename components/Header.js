import  {useEffect, useState} from 'react';
import { useRouter} from 'next/router'


function Header() {
    const [headline,  setHeadline] = useState()
    const {query} = useRouter()
    let topic = query.topic
    // useEffect(() => {
    //     if(topic){
    //         setHeadline(topic)
    //     }
    // },[])

  return <div className='header header_mobile'>
      {/* <legend>{headline}</legend> */}
  </div>;
}

export default Header;
