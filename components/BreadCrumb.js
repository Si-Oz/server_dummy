import { useEffect, useState } from 'react' 
import { useRouter } from 'next/router'
import Link from 'next/link'

function BreadCrumb() {
    const [breadcrumb, setBreadcrumb] = useState([])
    const {query, asPath } = useRouter()

    async function search(id){
        let data = await fetch(`https://ozhairandlouti.zendesk.com/api/v2/help_center/articles/${id}`)
            data = await data.json()
            return data
        }

    useEffect(() => {
        if (query.topic != null){
            let breadcrumb = breadcrumbItemFunction(query.topic, query.topic)
            setBreadcrumb(breadcrumb)
        } else{
            if(asPath.split('/')[2]){
                let id = asPath.split('/').filter(element => parseInt(element))
                search(id[0])
                .then((data) =>{
                    if(data.article){
                        const {title } = data.article
                        let breadcrumb = breadcrumbItemFunction('', title)
                        setBreadcrumb(breadcrumb)
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }
        }
    },[])


    
    const breadcrumbItemFunction = (url, label) => {
        let text = label 
        let gridItem = <div className='breadcrumb-item'>
            <Link href={url}>{text}</Link>
        </div>
        return gridItem
    }

    function loadHome(){
        location.assign("https://www.ozhairandbeauty.com/")
    }



    return (
        <div className='breadcrumb-container'>
            <Link href={"/"}>Customer Care &nbsp; &nbsp; &gt; &nbsp; &nbsp;  </Link>
            {breadcrumb}
        </div>
    )
}

export default BreadCrumb
