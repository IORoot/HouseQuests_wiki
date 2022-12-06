---
sidebar_label: '🗺 The Map'
sidebar_position: 1
---

# 🗺 Using the Map

## ⌨️ Map Keyboard / Mouse Controls

### ↔️ Moving

Move the map around by simply click-and-hold the left 🖱 mouse button and move the mouse.

### 🔍 Zooming

You can use the mouse scroll wheel ⚙️ to zoom in or out. Alternatively, there are ➕ and ➖ icons in the top left corner which can also zoom in or out.

### ⬚ Zoom Box

Another way to zoom in is to click and hold the `⇧ shift` button on your keyboard. Then click the left mouse button to start creating a bounding box (from the top-left corner). Drag the mouse to the size of the box you wish to zoom in to. 

### 🔄 Rotate

By pressing `⇧ shift` and `⌥ option` together. You can then click-and-drag the mouse to rotate the map completely.

### 🖥 Refresh screen

You can refresh the screen by pressing `⌘ command + R`

### 🚪 Quit program

You can close HouseQuests with the keyboard `⌘ command + Q` or in the apple main menu at the top of the screen.

## 📍 Markers

Once you have loaded some markers through the site searches drawer, you'll see all of the markers plotted onto the map. They will be displayed in three different colours:

| Marker | Source |
| --- | --- |
| Purple Icon | Zoopla Markers |
| Red Icon | OnTheMarket Markers |
| Blue Icon | Rightmove Markers |
| Red Alternate Icon | Currently Selected Marker |

Click on any marker with the mouse to select it. The right side-drawer should open with the property details. 

> Note that you must click directly on the coloured icon exactly. Even is the icon has transparent center, if you click on the transparent part it will not register as clicking the icon.

## 🎨 Note on Colour Palette

One of the noticable things when using the app is that we do not use Google-Maps. This is intentional since that can be very costly to use their mapping services. Therefore, we opted to go with the OpenStreetMap service (which is open source) to provide the base map tiles. However, since the base images are generated and provided by OpenStreetMap, you cannot change the map tone and palette of colours without building your own map server. Subjectively, google maps looks a little nicer, but it's not worth googles' rates.

# Map Credit

The main map is built using [OpenLayers](https://openlayers.org/) and [OpenStreetMap tiles](https://www.openstreetmap.org/)