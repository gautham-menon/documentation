---
title: Chat Working hours
sidebar_label : Working hours
---

By enabling **Working Hours** in the Inbox settings, you can set the available number of hours your customer support team ([groups](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups)) will be functional. It refers to the time duration your agents would be available to take live chats and solve customer queries.
In this section, you can specify unique working hours for each day of the week or/and set different working hours for each of your groups.

In this article, you will learn:
1. [Use case](#usecase)
2. [Steps to set working hours for your agent groups](#steps) 


## <a name="usecase"></a> 1. Use case

When your team's working hours are set to 9 AM - 5 PM and a customer is requesting a resolution of a query at 6 PM, the customer cannot connect to any agent nor the ticket will be created/ queued. 
To avoid such a situation, you can display an automated message to the customer which explains the situation why live agents cannot converse with them, for a better user experience.

**Away message**

This customizable automated message is called **Away message** which will be displayed when a customer is trying to reach out to a live agent outside their working hours.

> No agents are available right now. Our working hours are from 10 AM to 7 PM; Monday to Saturday, except for National and Public Holidays*


[**Open chat**](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats)

You can still capture the incoming tickets outside working hours by enabling [Offline Chats](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat) which will record all the tickets and auto-assign them to agents who appear online. 


## <a name="steps"></a> 2. Set working hours

Follow the below steps to set working hours: 

1. Open **Inbox** > **Settings**. Search for **Working hours**.

![](https://i.imgur.com/dnpU61d.png)


2. Enable the working hours toggle.

![](https://i.imgur.com/5j84kt3.png)

3. You can configure working hours for the available groups. If you do not have any group, you can set default working hours. 

> Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups) to learn how to add groups.  

4. Click the edit icon. You can Add/Edit the **Away message** and **Working hours**.

![](https://i.imgur.com/CTf3cDI.png)


5. Click **Set working hours**. Working hours can be configured for each day. It can have varied start and end times.  

![](https://i.imgur.com/OJTluPJ.png)

6. **Set away message** for each of your groups.  

![](https://i.imgur.com/LkvdV9T.png)


7. Click **Save**. Once configured, all the groups working hours would be displayed here.

![](https://i.imgur.com/Jl1zLMh.jpg)


8. You must select the **timezone** of your workforce. This applies to all the groups/agents in this account. Even when a customer messages from a different timezone, their time would be converted into the timezone that is set, and only then a ticket is created if it falls within the specified business hours.


![](https://i.imgur.com/EMpAajZ.png)





:::note
- If group-specific working hours are not configured, the **default configuration** will be used.
- You can set only **one timezone** for all your groups.
- Ensure you’ve entered proper timings as this is the base criteria for a ticket to be assigned to a live agent.
- Working hours only affect the logic of **ticket assignment** in the Inbox. Report metrics such as Average handling time, First response time would not be affected by the working hours as they are dependent on how long a ticket is assigned to an agent.   
Example: You have set business hours as 9 AM - 5 PM on Mon - Fri. If a ticket is assigned to an agent on Friday, 4.45 pm, and the ticket was only resolved by the agent at 9.15 am on Monday. Then the handling time for that particular ticket would be 3870 mins and not 30 mins.
:::