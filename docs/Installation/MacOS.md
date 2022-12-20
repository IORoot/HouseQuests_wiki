---
sidebar_label: '🖥 MacOS'
---

# 🖥 MacOS

<iframe width="100%" height="600px" src="https://www.youtube.com/embed/a_IRqJRs6uM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



This is the technical documentation for installing HouseQuests onto your Apple Mac (Intel or M1/M2) based machine.

1. To get started, you need to download the correct version. Head over to the [downloads](/downloads) page and click on either the M1 MacOS download button or the Intel MacOS button depending on your machine and architecture.

:::info
If you don't know which chip your machine has, you can go to the far top left Apple menu > About This Mac. Under 'chip' it will say what you are running.
:::

2. Once you have downloaded the file, it will be a `.dmg` file. Something like `HouseQuests-0.1.17-arm64.dmg`. Double-click to open it.

3. This will pop open a small modal window to allow you to drag the HouseQuests app into your Applications folder. Click and drag it in. You can now close that window.

4. When you install from a `.dmg`, it mounts a virtual drive in your finder locations. In the left sidebar of the finder, you'll see `HouseQuests-0.1.17-arm64.dmg` being listed. hover over it and click the `⏏ Eject` button to unmount it.

5. Now you can open your Applications folder and double-click the HouseQuests app.


:::caution

If you get the error "HouseQuests.app is damaged and can't be opened. You should move it to the trash", read on:

Currently, we do not have an Apple certificate (Which costs money to Apple). This means that the HouseQuests application will be automatically quarantined by MacOS v11 (Big Sur+) on any M1/M2-based machines. This is a move by Apple to force developers to purchase their certificates.

All you need to do is remove HouseQuests from the Quarantine. To do so, open the `terminal` app (applications folder > Utilities) and copy/paste the following into the command line:

```
xattr -d com.apple.quarantine /Applications/HouseQuests.app
```

Then press `⏎ enter`.
:::


You should now have the macOS version of HouseQuests running on your machine.

## 🏗 Architecture

HouseQuests is built using Electron, among other things. This makes it very reliable and versatile with multiple operating systems, including macOS, Windows and Linux. 