---
sidebar_label: '⌨️ Administration'
---

# ⌨️ Administration

The administration tab is where you go to handle most of the more critical parts of the application. From file-handling, to authentication. Note that some of these settings are for subscribers only.

## ⏺ Saved Settings 
:::info
This is for ` Subscriptions only `.
:::
A very powerful feature that allows you to switch between different searches and results. Think of it as a "👾 Save Game" feature that you can go back to.

---

🌈 An Example

The situation: Let's say you were interested in buying property in Ealing, London, but you had a friend who was looking to rent property in Dulwich. It's a little tricky (but still do-able) to add those two locations into the property searches of Zoopla/Rightmove/OnTheMarket and plot them on their map. The really hard bit is separating the renting and buying aspects of the two areas. 

Solution: Using Saved Settings you can separate these two scenarios out. Create a new save called `Buy in Ealing` and proceed to add a search for properties in that area. Now, create a second save `Rent in Dulwich` and replace all of the searches for ones that are more appropriate for that area and renting.

Now, you can switch between the two saves by simply clicking on the name you wish to load.

---


### 🛟 Saving

Start off by clicking the `create new save` button. A pop-up modal window will prompt you for the name of the save. Type a meaningful name and click the `save` button.

You'll see a new entry to the save settings list that has now saved your settings! It will have a `load`, `overwrite` and `delete` button.

### ⌫ Overwrite

If you've changed your current setup from the last time you saved your settings, you'll probably want to re-save. Click the `Overwrite` button next to the name you wish to save over. A modal will pop up that will ask if you wish to overwrite the file or not. Click `Overwrite File` to do so. 
Your saved file will now have been updated.


### ❎ Delete

You can permanently remove the save by clicking the `Delete Button`.

:::danger
There is currently no undo. Please use with caution since you will remove the save permanently.
:::


### 🔹 What is saved and when.
When you save your settings, its a snapshot of all your settings in the current setup. That means your currently excluded properties, favourited ones, etc... will all be remembered. This means you can pick up where you left off. However, any new properties excluded or changed will **NOT BE SAVED** - Clicking the button will revert you back to that saved point. Remember to click the `overwrite` button to resave over your existing save.



## 🔁 Import / Export
:::info
This is for ` Subscriptions only `.
:::

Primarily used for backing up your settings and loading them back into the appliction. Can also be used for sending your search settings to friends. (Be aware your authorisation code will also be shared!)

### ➡️ Exporting
Click the `Export All Settings` button and you will be prompted with a normal 'Save location' window. The file is a typical `json` file that automatically adds the date to the filename for you.

### ⬅️ Importing

Clik the `Import All Settings` to be shown a modal window for uploading your exported `JSON` file. Click on the `Choose File` button and pick an appropriate file to load. The file will load and the application will refresh.

### 🧑‍💻 Advanced

Since the file is a simple `JSON` file, you can open it into your favourite text-editor or IDE and analyse the contents. Be careful with the formatting, but you can update, edit or change any of the settings manually if you wish.

## 🔐 Authentication Code

Please see the [Authentication Doc](/docs/Features/authentication)

## ⛔️ Danger Zone

Be careful with this section of the admin panel. If you have a subscription, make sure you've taken a file export (see above) to backup all your settings before doing any of these functions.

### ⚠️ Reset Favourites

If you wish to remove all of your favourite markers (Ones that you have re-coloured to highlight and remember them) then use this button. This will pop up a modal box to confirm you wish to do this action.
You can recover by importing an existing saved settings file.

### 🚫 Clear Searches

This button will clear any existing searches from the textboxes on the 'search' page. It will also remove any existing markers on the map. You can recover by either inputting the same searches from the source websites again, using a backup file, or loading one of the saved settings.