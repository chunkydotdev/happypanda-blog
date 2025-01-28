---
title: 'Introducing: Your Button, Your Rules – The New Widget Toggle Feature'
description: 'HappyPanda just got more flexible! Learn how our latest feature lets you hide the default widget toggle and use your own custom buttons, links, or icons to open the feedback box. Perfect for seamless design and ultimate customization.'
pubDate: '2025-01-28'
---

## Introducing: Your Button, Your Rules – The New Widget Toggle Feature

What’s better than having a sleek feedback widget on your site? Having total control over how it opens. That’s right, HappyPanda just got even more flexible—we’ve introduced the option for you to hide our widget toggle and use your own custom buttons (or icons, or whatever you fancy) to open the feedback box. If this doesn’t scream customization, I don’t know what does.

### The Story Behind This Feature

Picture this: You’ve spent hours (days?) making your website look absolutely stunning. Everything is *just so*. But then, a little toggle button pops up, looking all widget-y. Functional? Yes. Stylish? Questionable. Now, don’t get me wrong, we love our widget toggle. It’s neat, helpful, and lets users know they can leave feedback. But we’ve heard your requests, and some of you wanted more—more control, more options, more ways to make the widget blend seamlessly into your designs.

So, we rolled up our sleeves and added a feature that’s as versatile as your imagination. Enter: **`HappyPandaWidget.open()`**.

### What Does This Mean for You?

In simple terms: The power is now in your hands (and your code).

Instead of relying on our built-in toggle button to open the feedback widget, you can now:

- Hide the default toggle entirely.
- Use your own button, link, or even an image to trigger the feedback box.
- Match the trigger perfectly with your site’s design, style, or quirky personality.

All it takes is one JavaScript function. Just call `HappyPandaWidget.open()` when your custom trigger is clicked, and ta-da! The feedback box appears, ready to collect insights.

### How to Use It

Here’s how easy it is to get started:

1. **Hide the Default Toggle:**
   In your widget configuration, simply set `hideToggle: true` when initializing:
   ```javascript
   HappyPandaWidget.init({
       projectId: 'YOUR_PROJECT_ID',
       hideToggle: true
   });
   ```

2. **Create Your Custom Button:**
   Add a button (or link, or whatever you’d like) to your site:
   ```html
   <button id="openFeedback">Give Feedback</button>
   ```

3. **Call the Magic Function:**
   Use JavaScript to trigger the widget when your custom button is clicked:
   ```javascript
   document.getElementById('openFeedback').addEventListener('click', () => {
       HappyPandaWidget.open();
   });
   ```

And just like that, your feedback widget is completely under your command.

### Why This Feature Matters

Here’s the thing: Design matters. Your website isn’t just a collection of pages; it’s an experience. We get it. You’ve worked hard to craft an interface that represents your brand, your style, your vibe. The last thing you need is a toggle button that feels out of place. This feature ensures that the HappyPanda widget doesn’t just work for you—it works *with* you.

### A Few Ideas to Get You Started

Need inspiration? Here are a few creative ways to use this new feature:

- **A Floating Feedback Icon:** Design your own floating icon or button that matches your site’s theme.
- **Contextual Triggers:** Add a “Leave Feedback” link directly within your app’s help menu or footer.
- **Seasonal Flair:** Use festive designs (think holiday icons!) to make your feedback button more engaging.

### Ready to Customize?

If you’ve been waiting for the chance to tailor every corner of your site, this feature is for you. It’s small, it’s simple, and it gives you the freedom to make the widget feel *yours*.

As always, we’re here to help if you need a hand implementing this. Have fun customizing, and let us know what cool ideas you come up with. We’re always amazed by how creative our users are.

Ready to give it a try? If you’re not already using HappyPanda, [sign up today](/register) and see how easy it is to collect and act on feedback, all while keeping your site’s design flawless.

Happy coding (and feedback collecting)!

Cheers,  
The HappyPanda Team

