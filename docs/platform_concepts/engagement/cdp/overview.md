---
sidebar_label: User 360 overview
title: User 360 Overview
---



User 360 is a Customer Data Platform that helps you manage your customer base.  You can segment your customers based on some shared characteristics for personalised targeting and get insights into their cross-channel engagement behavior.

The following are some key features of User 360 - 

* Collect user data from bot conversations and client’s external tech stack
* Unify user profiles and maintain context across channels
* Segment users into meaningful audiences
* Activate user data and segments in various modules of yellow.ai to drive personalisation

:::note
User360 is enabled by default for bots created after June 1, 2022.
To enable it for your bot, write to sarthak@yellow.ai.
:::





## 1. Access User 360


You can see User 360 in the Engage module.  You can view your user details, modify their details, define user properties, create  user segments and do more.

To access User 360, log on to https://cloud.yellow.ai and navigate to **Engage** > **User 360**.

:::note
This is enabled only for https://cloud.yellow.ai
:::

The following are the key actions that you can perform on user 360.

### 1.1 Add users

The platform provides different ways to add your users. You can add each user manually or leverage advanced features  to quickly create your user base and maintain it real-time.  
* Import users directly [from a CSV](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv) 
* Use our [REST APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api) to add or modify users real-time.

  * Use [Bot Builder to create and update users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table)


### 1.2 Enrich your user data

It is important to collect data that is specific to your users. While there are some predefined properties, called [System Properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#system-user-properties), you can also create and send [Custom properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#custom-user-properties) and [Events](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data#user-events).

 
User properties store data about who your users are, events tell you when users take important actions on your product.


### 1.3 Create segments to power personalisation

 

By combining the user data with Properties and Events, you can [create highly focussed segments](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment). These segments update automatically as and when users match the criteria that you set.


You can group your users based on certain characteristics such as who they are and what they do. 

## 2. Data tracking

We store three types of data about your users:

1. System user properties (a default set of data that we capture about your users).
2. Custom user properties (data you send us about your users).
3. Events (data that records specific activities of users).


The following sections explain various datatypes supported and how you can make the most of them.


### 2.1 User property data types

  
| **Data Type** | **Description** |
|---------------|-----------------|
| string | Stores String data |
| number | Stores positive or negative integer, or a decimal number |
| time | Stores time in hh:mm:ss format |
| date | Stores date in YYYY-MM-DD format |
| datetime | Stores date and time in YYYY-MM-DD hh:mm:ss format |
| list | Stores an array of String values |
| boolean | Stores true or false |
| phone | Stores phone numbers with country code and validates the format by checking country code and number of digits |
| url | Stores URL and validates the format for the same |
| email | Stores email and validates the format for the same |

### 2.2 System user properties

The following properties are enabled by default. You can see these in User 360.
  

| **Property Name** | **Data Type** | **Description** |
|-------------------|---------------|------------------------|
| userId | string | Unique identifier for a user NOTE: This can be passed |
| firstName | string | The first name of the user |
| lastName | string | Last name of the user |
| gender | string | Gender of the user |
| country | string | Identifies based on the location of the user’s IP address |
| city | string | Identifies based on the location of the user’s IP address |
| ip | string | Fetches from the user’s browser |
| latitude | number | Identifies from the location of the user’s IP address |
| longitude | number | Identifies from the location of the user’s IP address |
| language | string | Preferred language of the user |
| timezone | string | Identifies based on the location of user's IP address |
| email | email | Email address of the user |
| phone | phone | Phone number of the user with country code |
| lastChannel | string | Recent channel (set up on yellow.ai) where the user had an active session <br/>You can update this property to cover touch-points/channels outside yellow.ai. |
| dob | date | Date of birth of the user. |
| lastSession | dateTime | timestamp of the last time the user had an active session on one of the channels set up on yellow.ai NOTE: You can update this property to cover touch-points/channels outside yellow.ai |
| emailOptin | boolean | Subscription status of the user to emails. The value is `true` if a user has subscribed to your emails, else it is `false` |
| smsOptin | boolean | Subscription status of the user to SMS. The value is `true` if a user has subscribed to your SMS, else it is `false` |
| whatsAppOptin | boolean | WhatsApp subscription status of the user. This is `true` if a user has subscribed to your WhatsApp messages, else it is `false`. |
| createdAt | dateTime | Timestamp of when the user record was created |
| updatedAt | dateTime | Timestamp of when the user record was recently updated |
| tags | list | List of groups associated to the user. You can add tags to users manually. |

  

### 2.3 Custom user properties

Custom properties store additional information specific to your users. For example, you might want to store details such as the number of times they have visited your pricing page, what their department is, and which is their preferred product.

These properties are ideal for helping you answer questions like:

-  **How many/how much?**:  
   - Example: Show users who are paying over $10 per month.
-  **What’s the name?** 
   - Example: Show the list of all users whose job title is ‘Marketer’.
-  **Is it true or false?** e.g. which users have visited my pricing page? (pricingPageVisit = true) and which users haven’t? (pricingPageVisit = false)
-  **What date?** e.g. which users’ subscriptions are due to end on September 1st?


Custom User Properties can be [created from UI, in Users Module](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#manage-user-properties).


:::info
Currently, you cannot modify or delete a custom property once created.
:::


## 3. User events

You can [send events](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_events) to yellow.ai, to record user activities or capture an important conversion events.  It also captures the details such as the first and last time a user does something including the total number of times. For example, you can see the first time users clicked on a particular page, or when they most recently purchased an item.

You can see events in User 360, and filter them to answer questions like:
- Are users visiting the same product page quite often in recent times?
- Did they use the export feature a number of times? or
- Did they downgrade their plan?


### 3.1 Export your user data

 If you want to update your user base or use it outside Yellow.ai,  you to export user data easily and use it wherever required. To know more, see [Export users' data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data).



## 4. Unify profiles & maintain context across channels

 To achieve true personalisation, you might want to recognise your users on every channel they appear on. To achieve this:

-   Decide what your  [user identifier](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id/)  will be
-   Start  [identifying users](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data#2-what-are-identified-users)  on every channel
-  [Capture as much conversational data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data)  you can
-   Utilise the above data, captured on one channel, to  [deliver personalised engagement](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder)  on another channel

![](https://i.imgur.com/aWczHLm.png)