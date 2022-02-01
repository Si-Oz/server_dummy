import Link from 'next/link'
import { useRouter } from 'next/router'



const svg = {
    "Shipping": "https://img.icons8.com/pastel-glyph/64/000000/fast-shipping--v2.png",
    "Orders and Promotions": "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/50/000000/external-discount-ecommerce-kmg-design-detailed-outline-kmg-design.png",
    "General Enquiries": "https://img.icons8.com/pastel-glyph/64/000000/info--v1.png",
    "Returns": "https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-returns-logistics-itim2101-fill-itim2101.png",
    "Account Enquiries": "https://img.icons8.com/fluency-systems-filled/48/000000/guest-male.png"
}


const Card = ({heading, articles }) => {
    const router = useRouter()

    function moveToCategory(e){
        router.push(`/category/${e.target.value}`)    
    }

    let svgUrl;
    let svgURLs = Object.values(svg)
    let svgTitles = Object.keys(svg)
    for(let i = 0; i < svgTitles.length; i++){
        if (svgTitles[i] == heading){
             svgUrl = svgURLs[i]
        }
    }
    
        let articleTitles = []
        let articleData = [] 
        articles.forEach(element => {
            element.forEach(element =>{
                articleTitles.push(element.title)
                articleData.push(
                        <li key={element.id}>
                                <Link href={`1/article/${element.id}`}>{element.title}</Link>
                        </li>
                )
            } 
            )} 
        );
        articleTitles = articleTitles.toString()
       let articleList = articleData.slice(0,3)
    return (
        <div className="grid-item">
            <div className='grid-heading'>
            
            <legend>
            <img className="svg" src = {svgUrl} alt = "https://icons8.com/icon/pETkiIKt6qBf/account Account icon by Icons8"></img>
                  <button onClick={moveToCategory} value={heading} className = "card_heading">{heading} </button>
                        
            </legend>
            </div>
              <ul>
                  {articleList}
              </ul>
              <button className = "hidden_on_mobile" onClick={moveToCategory} value={heading}> View All</button>
        </div>
    )
}

export default Card
    