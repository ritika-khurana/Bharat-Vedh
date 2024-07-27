import React from 'react'
import FeatureBox from './FeatureBox';


function Feature  ()  {
  return (
    <div id='features'>
        <div className='a-container'>
        <FeatureBox  title='Acute' price='$1.19/month' p='Experience personalized Ayurvedic care for sudden health issues with our Acute Condition Care Plan. When life throws unexpected health challenges your way, our expert Ayurvedic practitioners are here to provide swift guidance and natural remedies. With this subscription, you gain access to quick consultations, herbal remedies, and dietary recommendations to help you recover from acute conditions effectively and holistically.'/>
        <FeatureBox  title='Chronic' price='$1.79/month' p='Take control of your long-term health journey with our Chronic Condition Management Plan. Designed for individuals dealing with persistent health issues, this subscription offers ongoing support from our Ayurvedic experts. We will create a customized Ayurvedic treatment plan, recommend specific herbs, lifestyle modifications, and regular check-ins to manage your chronic condition naturally, promoting lasting well-being.'/>
            <FeatureBox  title='Full family' price='$2.39/month' p='Ensure your entire health of family and vitality with our comprehensive Full Family Ayurvedic Healthcare subscription.  holistic approach of Ayurveda to wellness is ideal for the whole family. Enjoy unlimited access to our team of Ayurvedic practitioners, preventive health advice, immunity-boosting remedies for every family member. Embrace the wisdom of Ayurveda for a healthier and happier family life.'/>
        </div>
      
    </div>
  )
}

export default Feature;