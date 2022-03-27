# Donation-Collector
=========================
**-- Donation-Collector: a Bridge Web Service between donor and ngo.**

![](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.01.12%20AM.png)

-As a frequency donator, I’m able to post items I want to donate without finding closest GoodWill to drop off or waiting for an NGO to collect them by chance.
-As an NGO, I Am able to select our organization's target items and choose a day to pick up all of them in one area. I want to know where these items will be.

Problem#1 There is no web service to let donors post the items they want to donate.
Problem#2 There is no web service to let NGO know where their target donation items are available to pick up.
Problem#3 There is no Weight calculation service so that NGO could determine if they need to rent a truck to come and pick up everything they need in one specific area.

*Product logic and features*:

*User posts items to public donation space like marketplace
NGO will write their pick-up radius,  items preferences, and preference weight for each pickup in their profile.
Every time there is an update to the public marketplace, calculate the total weight of preferred items for each NGO in its pickup range. If the total weight achieves their preferred weight for each pickup, email and notify NGOs.
NGO can decide if they will schedule pickup after notification. We provide filtering features and weight calculation when they pick items. Checkout means pickup is scheduled successfully. In the checkout cart NGo can pick their pickup time. An email will be sent to USERs to notify them of the pickup time. The email will also provide contact for NGO so users can contact them if they are unavailable.*


**Demo ScreenShot**
=========================

![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.01.35%20AM.png)


![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.02.23%20AM.png)


![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.02.23%20AM.png)

![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.02.50%20AM.png)

![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.03.45%20AM.png)

![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.03.18%20AM.png)

![image](https://github.com/tarringlu/Donation-Collector/blob/main/Screen%20Shot%202022-03-27%20at%2012.04.06%20AM.png)
**Structure of this project**
=========================

UI Logic Design Sections:
https://drive.google.com/file/d/1kD38eemHjbXum0aph9czS4971r7DLX7K/view?usp=sharing

Database Schema Design Sections
https://drive.google.com/file/d/1GxO4Wc92LfujmEzEyHpY4KEUsmURFjIj/view?usp=sharing
