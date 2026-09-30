---
layout: default
title: Contact
permalink: /contact/
---

<section class="contact-page" aria-labelledby="contact-title">
  <div class="contact-header">
    <h1 id="contact-title">Get In Touch</h1>
    <p>
      I'd love to hear from you! Please fill out the form below and I'll get
      back to you as soon as possible.
    </p>
  </div>

  <div class="form-container">
    <form
      action="https://forminit.com/f/{{ site.forminit_ID }}"
      method="POST"
    >
      <div class="form-field">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="fi-sender-firstName"
          autocomplete="name"
          required
        />
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="fi-sender-email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="fi-text-message"
          rows="6"
          required
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>

    <p class="form-note">I look forward to hearing from you!</p>

  </div>
</section>
