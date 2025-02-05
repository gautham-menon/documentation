---
title : WebEngage
sidebar_label : WebEngage
---

Yellow.ai integration with WebEngage allows you to seamlessly send WhatsApp campaigns to your customers. Any business user who has a WebEngage account can simply login to their WebEngage account, choose Yellow.ai as their WSP (WhatsApp Service Provider). Provide the API key to setup the configuration, upload the audience list and initiate the whatsapp campaign. 
Yellow.ai uses its notification engine service to run the whatsapp campaign based on the events received from WebEngage. The notification delivery status report is sent to WebEngage by invoking their static REST endpoint.

In this article, you will learn how to integrate WebEngage on yellow cloud platform. 


**Detailed workflow**

![](https://i.imgur.com/WwPMRiq.png)

:::note
While using a bot of app.yellow.ai, navigate to the Data explorer section in the Growth Module, which will redirect you to the cloud.yellow.ai UI. 
After that, you can move to the Integrations section and search for WebEngage to get the instructions.
:::


## 1. Use case

Following are the use-cases which are currently accommodated in the Integration:

1. **Take actions with WebEngage nodes**: You can send the delivery status report of the notification sent by using the Delivery Report Action Nodes. There are two action nodes, one for India Region and the other for US Region. The selection of action nodes is conditional(based on the country code received from WebEngage’s end. If the country code is IN, the Delivery Report India Region action node needs to be used, else the US Region action node needs to be used).

![](https://i.imgur.com/mQMa9Rf.png)

2. **Receive events**: On sending the WhatsApp notification using yellow.ai’s notification engine service, an event is received stating the details of the delivery report.

![](https://i.imgur.com/pjv3C2I.png)


## 2. Configuration

Configuring the integration with WebEngage is straightforward. Follow the steps below to integrate WebEngage:

1. From the switcher, click on the **Integrations**. 

![](https://i.imgur.com/HeM0vYn.jpg)

2. Search for **WebEngage**.

![](https://i.imgur.com/atOZEPJ.png)

3. Provide the **API key** from the description. Click **Connect** to see the list of instructions provided in the description card and then click **Update** to enable the integration.

![](https://i.imgur.com/jIyp5pO.jpg)












