# Birthday invitation

A faithful, editable HTML/CSS/JavaScript reproduction of the invitation at
https://convitemaria5anos.netlify.app/.

## Preview

Open `index.html` directly in a browser. No installation or build is required.
To use a local server, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173/.

## Files and customization

- `index.html`: name, age, party date/time, map link, RSVP button phone numbers
  (`data-phone`, country code + area code + number, digits only), and image description.
- `styles.css`: colors, typography, responsive layout, and snow animations.
- `script.js`: animation controls and the WhatsApp confirmation message. Update
  the message's name, age, date, and time when customizing the HTML.
- `assets/maria-julia-festa.jpg`: the original invitation image.
- `assets/fonts/`: local font files and their SIL Open Font License texts.

The original image, event details, map destination, and WhatsApp recipients have
been preserved to match the reference. Replace them before using this invitation
for a different party.

The layout, fonts, image, and animations work offline. The map and WhatsApp links
require an internet connection. RSVP opens a prefilled WhatsApp conversation;
the guest must send the message to complete the confirmation. No confirmations
are stored by this static website.

The invitation respects the system's reduced-motion preference and also includes
a manual pause/resume button for animations.
