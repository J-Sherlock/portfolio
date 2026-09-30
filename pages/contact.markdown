---
layout: default
title: Contact
permalink: /contact/
---

## Get In Touch

I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.

<!-- Forminit Form Embed -->
<div class="form-container">
    <form action="https://forminit.com/f/{{ site.forminit_ID }}" method="POST">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="fi-sender-firstName" required>
        </div>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="fi-sender-email" required>
        </div>

        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="fi-text-message" rows="5" required></textarea>
        </div>

        <button type="submit">Send Message</button>
    </form>

    We look forward to hearing from you!

  <!-- Example: <iframe src="https://forminit.com/form/YOUR_FORM_ID" ...></iframe> -->
</div>
