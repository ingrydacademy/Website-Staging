import { MetadataRoute } from 'next'
 

const WEBSITE_HOST_URL = process.env.SITE_URL || "https://ingrydacademy.com/about-us"; 

type changeFrequency = 
| "always"
| "hourly"
| "daily"
| "weekly"
| "monthly"
| "yearly"
| "never"


export default function sitemap(): MetadataRoute.Sitemap {
const changeFrequency = "daily" as changeFrequency; 

 const routes =  ["", "./about-us/", "./containers", "./cybersecurity", 
                    "./data-science", "./devops","./faq", "./find-jobs",
                     "./for-training", "./IT-solution-sales", "./java-and-spring-boot",
                      "./linux", "./nodejs", "./product-management", "./reactjs",
                       "./request-for-staffing", "./request-for-training", "./request-staffing", "./request-training", "./scholarships", "./terms-and-conditions"].map((route)=>({
                        url: `${WEBSITE_HOST_URL} ${route}`,
                               lastModified: new Date().toISOString(), 
                               changeFrequency, 
                       }))
                    
                       return [...routes]
                       
    
}