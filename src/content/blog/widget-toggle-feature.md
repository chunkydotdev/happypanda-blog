---
title: 'Introducing: Your Button, Your Rules – The New Widget Toggle Feature'
description: 'HappyPanda just got more flexible! Learn how our latest feature lets you hide the default widget toggle and use your own custom buttons, links, or icons to open the feedback box. Perfect for seamless design and ultimate customization.'
pubDate: '2025-01-28'
heroImage: '../images/widget-toggle-hero.png'
---

## Introducing: Your Button, Your Rules – The New Widget Toggle Feature

What’s better than a sleek feedback widget on your site? A widget that’s fully under your control. That’s right, HappyPanda just leveled up with a new feature that lets you hide our default widget toggle and use your very own custom button (or link, or image) to open the feedback box. It’s the flexibility you’ve been asking for—all wrapped in one simple JavaScript function.

### The Inspiration Behind This Feature

Imagine this: you’ve poured your heart and soul into crafting a stunning website. Every pixel is perfect. But then, a default toggle button appears—it’s functional, sure, but does it vibe with your design? Probably not. We’ve heard your feedback, and we totally get it. You want more control over how and where the widget fits in your site’s aesthetic.

That’s why we’re introducing **`HappyPandaWidget.open()`**: a small but mighty function that lets you take charge of how users access the feedback box. No more one-size-fits-all toggle—this feature bends to your will.

### What’s in It for You?

In short: absolute control. Here’s what you can do with this feature:

- **Hide the Default Toggle:** If it doesn’t fit your style, you can hide it directly through the HappyPanda admin dashboard.
- **Add Custom Triggers:** Use your own button, link, or image to open the feedback box.
- **Seamlessly Blend with Your Design:** Match the trigger to your brand’s look and feel.
- **Enjoy Smart Behavior Updates:** With the latest improvements, your widget is smarter and smoother than ever. Custom trigger elements marked with `data-happypanda-trigger` will:
  - Prevent the widget from closing when clicked.
  - Allow intuitive behavior like closing the widget when clicking outside of it, pressing Escape, or calling the `close()` method explicitly.

### How to Set It Up

Getting started is a breeze. Here’s how:

1. **Hide the Default Toggle:**
   Log into your HappyPanda admin dashboard, go to your widget’s settings, and toggle the option to hide the default button. Save your changes—done!

2. **Create Your Own Button:**
   Add an element to your site—it could be a button, a link, or even an image:
   ```html
   <button id="openFeedback" data-happypanda-trigger>Give Feedback</button>
   ```

3. **Trigger the Widget:**
   Use JavaScript to link your custom button to the feedback box:
   ```javascript
   document.getElementById('openFeedback').addEventListener('click', () => {
       HappyPandaWidget.open();
   });
   ```

And that’s it! You now have a fully customized way to collect user feedback.

### What’s New in the Widget’s Behavior?

We’ve introduced some nifty updates to make the widget even smarter and more user-friendly:

- **Click Outside Behavior:** The widget now properly detects clicks inside and outside itself, ensuring it only closes when appropriate.
- **Trigger Attribute:** Elements marked with `data-happypanda-trigger` prevent the widget from closing when clicked, perfect for your custom open buttons.

### Why This Feature is a Game-Changer

Your website isn’t just a platform; it’s a reflection of your brand. Every design choice matters, and now you don’t have to compromise on aesthetics to get great feedback. With this new feature, the widget becomes an invisible ally—ready to work behind the scenes while keeping your design spotless.

### A Few Ideas to Spark Your Creativity

Looking for inspiration? Here are some cool ways you can use this feature:

- **Floating Icon:** Add a custom floating button that perfectly matches your theme.
- **Context-Specific Feedback:** Place a “Give Feedback” link inside your app’s help menu or footer.
- **Seasonal Themes:** Update your feedback trigger to match holidays or special events.

### Ready to Try It Out?

We’re excited to see what you’ll create with this new flexibility. If you’re not already using HappyPanda, now’s the perfect time to join the family. [Sign up today](#) and experience how easy (and stylish) feedback collection can be.

Need help setting it up? Our team is just a message away. Have fun experimenting, and don’t forget to share your creative implementations with us—we love seeing what you come up with!

Happy customizing,  
The HappyPanda Team

