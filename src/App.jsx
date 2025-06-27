
import './App.css'
import PlanCard from './Components/Cards/PlanCard'
import VideoCard from './Components/Cards/VideoCard'

import Header from './Components/Header'
import Selling_banner from './Components/Selling_banner'
import Shopify_footer from './Components/Shopify Footer/Shopify_footer'
import Step_img_with_text from './Components/Step Image With Text/Step_img_with_text'

import VideoText from './Components/VideoWithtext/VideoText'


function App() {
 

  return (
    <>
    <Header/>
    <VideoText/>
    <PlanCard/>
    <VideoCard
    sub_heading="Direct and wholesale"
    main_sec_heading="Find your forever customers"
    video_card_heading1="Reach the right customers for less"
    video_card_desc1="Cut acquisition costs as much as 50% with Shopify Audiences and keep them coming back with integrated marketing tools and insightful analytics."
   video_src1="../src/assets/card-video-1.webm"
   video_card_heading2="Unlock new growth with B2B"
   video_card_desc2="Create custom experiences for wholesale buyers with flexible pricing, discounts, and payment terms."
   video_src2="../src/assets/card-video-2.webm"
/>
<VideoCard
    sub_heading="Desktop and mobile"
    main_sec_heading="Take care of business"
    video_card_heading1="Manage everything in one place"
    video_card_desc1="From back office to front of store, you’re always in control with the fully centralized Shopify Admin."
   video_src1="../src/assets/card-video-1.webm"
   video_card_heading2="Run your store from anywhere"
   video_card_desc2="Do it all right from your pocket with the full-featured Shopify mobile app."
   video_src2="../src/assets/card-video-2.webm"
/>
<Step_img_with_text section_heading="Start selling in no time"/>
<Selling_banner/>
<Shopify_footer/>

    </>
  )
}

export default App
