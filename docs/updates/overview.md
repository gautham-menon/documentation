---
title: Our latest product updates
sidebar_label: Latest updates
featured: true
---

For you, our Product & Development team is working hard to consistently improve the product.  
Here are a list of product updates we made in the month of **October** to provide you with the best user experience. 

----
## 1. **Studio** 

#### 1.1 Download API logs 

> Type - Enhancement


When there is an API issue, it is difficult to understand if our API calls are failing or if the client API is failing. To resolve this issue, we are storing all the API requests and responses to help establish the issues. Click [here](/cookbooks/studio/downloadapilogs.md) to learn more. 


#### 1.2 Bulk testing of utterances on cloud

> Type - New feature


To test utterances, the studio QA team had to check each utterance in the bot one by one. This is very time-consuming. To tackle this we have introduced a feature where users can bulk upload the utterances and test which journey/intent they are triggering. Click [here](/cookbooks/studio/regressiontest.md) to learn more. 




-----

## 2. **Marketplace**

  
  
#### 2.1 Added new marketplace components 

The following marketplace templates were are released on the platform:


  > Type - New feature



##### 1. ITSM Automation
This template allows bot users to create a ticket, check ticket status, and connect with an agent. Click [here](https://cloud.yellow.ai/marketplace/df8632122f795dda899df38ff1dddb16) to use the template. 

##### 2. Session based authentication using OTP
This template is used to authenticate the user using OTP and keep them authenticated until a certain period of inactivity. Click [here](https://cloud.yellow.ai/marketplace/d48194ebfbf15dc51f5b9e5deba41c56) to use the template. 
 

##### 3. IT service desk
This template allows users to raise ticket and contact support for laptop/system related issues, login issues, etc. Click [here](https://cloud.yellow.ai/marketplace/bad34a3a53f8a828ba6c073e87e21bfc) to use the template.

##### 4. FAQ automation using document cognition
This template is designed to demonstrate the document cognition feature supported by Yellow.ai. Click [here](https://cloud.yellow.ai/marketplace/3f67de2d7976a3c1a0c729cbec24c26d) to use the template.

##### 5. New course registration(send an email notification)
This template sends reminders to users on their email, when the user signs up for a course. Click [here](https://cloud.yellow.ai/marketplace/c98e5d23fec2cc535978fa98153bbc1a) to use the template.


-----

## 3. **Integrations**

#### 3.1 Improvised logging

> Type - Enhancement

Going forward there will be improved logging in general for our service which will help to deep dive further and analyze the root cause of issues.

#### 3.2 Added new integrations 

> Type - New feature


The following 5 integrations are now available on our platform: 

##### 1. Salesforce live chat 

You can now disable/enable receiving queue updates and estimated wait time updates from the integration card UI.
	
##### 2. PayU payment gateway

You can now generate payment links that support UPI as payment mode and also are now allowed to pass the UDF5 body as a field for supporting Payments. 

##### 3. Billdesk Integration
Billdesk Payment Gateway allows you to create UPI Intent for WA Pay, view the payment status, and Send UPI notifications with the yellow.ai platform. Click [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/billdesk) to know more. 

##### 4. Nice In-Contact Integration
Nice In-contact allows you to seamlessly connect your Nice In-contact with the yellow.ai platform. This connector will enable it to connect end users to live agents. 

##### 5. Instamojo Payment Integration 
Instamojo Payment Gateway allows users to connect their business and generate payment links, view payment status, and create refunds with the yellow.ai platform. Click [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/instamojo) to know more. 


-----
## 4. **Insights**


#### 4.1 **Bot & Agent metrics** was added to enhance data points on the insights dashboard

> Type - Enhancement

To further enrich our out-of-the-box analytics present on the Overview page of Insights, we have added some new and enhanced data points on the dashboard. The 4 enhancements are:
- Messages bifurcation
- Sessions bifurcation
- Deflection rate
- User feedback


##### 1. Messages bifurcation

Messages metrics under **User Traffic** is now further bifurcated into:  


| Bot & User | Agent & User |
| -------- | -------- |
| Messages exchanged between bot and user     | Messages exchanged between agent and user     |




<img src="https://i.imgur.com/VLO6RYO.jpg" alt="drawing" width="70%"/>



##### 2. Sessions bifurcation

Sessions metrics is now divided further into:  

| Bot  | Bot & Agent |
| -------- | -------- |
|Sessions handled by bot only|Sessions handled by both bot and agent|
    

<img src="https://i.imgur.com/OyItmMT.jpg" alt="drawing" width="70%"/>


##### 3. Deflection rate

This is the percentage of sessions handled solely by the bot without transferring to a live agent. It is a measure of chats resolved by self-serve. 

<img src="https://i.imgur.com/xQ2SifJ.jpg" alt="drawing" width="70%"/>


:::note
**Human takeover** rate is now replaced with Deflection rate now because it is a better indication of bot performance.
:::


##### 4. User Feedback

A new widget with an aggregate score of Bot CSAT and Agent CSAT on a scale of 1-5, along with percentage increase/decrease in the selected timeframe.
These new additions will help users better analyse bot and agent performance with much more granularity, and without manual calculations anymore.

<img src="https://i.imgur.com/CUhlum9.png" alt="drawing" width="70%"/>

-----

## 5. **Channel** 

#### 5.1 Single/Multi Product message support (Catalog support)  is now available on Cloud 

WhatsApp Product Message Support on Cloud Platform also known as the WhatsApp Catalog Support feature was available on app.ym and now has been made available to be used on Cloud Platform as well. There are two new Nodes that were introduced which will be required to send Product Messages on WhatsApp from the Business Catalogs.

1. **Single Product Message**: This allows you to send a single product on a WhatsApp message with information like an image, description of the product, price, discounted price, etc.
2. **Multi Product Message**: Multi-product message allows you to send an expandable Vertical Carousal message with a maximum of 30 Products for the user to go through and add to the cart or view each product individually as well.


This feature opens doors to all the Business to have basic to complex E-commerce use cases and sell products right on WhatsApp. This is not only limited to physical goods but can also be used to showcase digital goods like Insurance, loans, etc.

:::info
References: 
1. [Setting up of Catalog](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration/#2-catalog-setup)
2. [Linking a Catalog to WABA](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration/#22-link-catalog-to-a-waba)
3. [Using the SPM/MPM Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#8-whatsapp-product-message)
4. [Common FAQ’s](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration/#23-faqs)
:::


-----

## 6. **Voice**

#### 6.1 Wait music for APIs

Previously, without **Wait Music**, there was silence on the call while API was executed resulting in a sub-optimal conversational experience.

![](https://i.imgur.com/eCsR3Cy.jpg)


Currently, if the Wait Music is configured for high latency API calls, it allows Voice Bot developers to play music on the call while waiting for the API response. After the API call is completed, the wait music is stopped and the further steps (nodes) are executed. 




<img src="https://i.imgur.com/skrJN8c.jpg" alt="drawing" width="100%"/>



You can configure the wait music in the API node itself (works for voice bots only) where bot developers can upload a public URL or upload a file for the same. Supported formats for wait music files - .mp3 and .wav.

:::note
- This feature is an add-on hence nothing changes on the LIVE bots. Though, the team recommends implementing wait music if the latency of some APIs is high for a better user experience.
- Ensure that the **Wait Music Length** (duration) is greater than the timeout configured for the API for a better experience to avoid unseen race condition scenarios.
:::

#### 6.2 Revamped voice options

Voice options are fine-tunable parameters for voice channels like what is the STT engine to be used, the maximum recording duration, the length of DTMF input, the list of boost phrases, etc.
With the revamp, both the global and voice options are now classified under different buckets to provide a more intuitive and cleaner user experience in the studio. All the voice options are classified into 6 buckets:
1. Telephony
2. Recording
3. Speech-To-Text
4. Text-To-Speech
5. DTMF
6. Conversation


**Old vs. Revamped global level options** 

![](https://i.imgur.com/oJauXmc.jpg)

**Old vs. Revamped node level options** 


![](https://i.imgur.com/4M0FICP.png)

Along with a cleaner user experience, there are a few new voice options also introduced for configuration in UI viz. DTMF finish char, Acknowledgement Message (filler words), and TTS Array.

Complete details of all the voice options are documented under [Node-Level Options](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/#32-configure-node-for-a-voice-bot) and [Global-Level Options](https://docs.yellow.ai/docs/platform_concepts/studio/tools/#25-voice).

#### 6.3 Voice bot number association

:::note
Phone numbers are a limited resource and are leased from downstream providers at Monthly costs to Yellow.ai. Ensure that only the required count of the phone numbers is being added to the Bot.
:::

Previously, the process of associating a phone number to a Voice Bot was manual hence, the TAT also revolved around 1 - 2 days. To streamline this process and bring us one step closer to a self-serve platform, developers can now associate numbers to their bots directly on our Cloud portal. 

Currently, to find the new Phone number management screen, you can navigate to **Channels** > **Voice**  > **Interactive Voice Response**(IVR). On this screen the following actions are available to the users:
* View the Phone number/s currently associated with the Bot.
* Associate new Phone number/s to the Bot.
* Remove Phone number/s mapping from the Bot.

Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/Ivr) to learn more. 


![](https://i.imgur.com/TYv4idf.jpg)


-----

Other modules will be added soon!



