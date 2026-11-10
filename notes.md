# Notes

## jQuery

Nuttig voor:

- DOM updaten  `$('.mijn-btn').text('qqq').addClass('hoi').show();`
  - `document.querySelector()` maakt selecteren in ieder geval makkelijker.
  - updaten is native nog steeds niet veel voor. Maar Angular, React, Vue, Svelte doen dit allemaal eleganter, leesbaarder, testbaarder en meer performant dan jQuery.
- AJAX  `$.getJSON()`  `$.get()`, `XMLHttpRequest` was irritante API
  - `fetch()` is prima moderne API
- browserabstractie  `$('#btn').click(function() { });` ipv `addEventListener`/`attachEvent` onzin
  - browsers hanteren inmiddels gewoon dezelfde standaarden

```html
<button id="btn"></button>
```
```ts
var btn = document.getElementById('btn');
if (btn.addEventListener) { // modern IE, Firefox, Chrome
	btn.addEventListener('click', function() {

	});
} 
else { // IE 6,7,8
	btn.attachEvent('onclick', function() { });
}
```

Wordt jQuery nog gebruikt? Jep. Gigantisch veel.

- websites  <== jQuery
  - wordpress <== jQuery-based plugins
- webapplicaties <== enterprise software development, veeeel minder jQuery

## Positioneertechnieken:

- absolute/relative/sticky - `position: sticky`
  - houdt geen rekening met andere elementen
- grid
- flexbox
- tabel
- margin
  - how to center a div
- `<center>`
  - please, no.
- ouderwets: `float: left;` `float: right;`
  - enkel nuttig voor "bij een artikel een afbeelding naast een stuk tekst en de tekst die daarna onder afbeelding doorloopt"

## is Tailwind niet gewoon fancy inline styles?

```html
<div style="background: #75c3f2; margin-left: 3px; padding-top: 10.1556px; hover:... @media"></div>

<div class="grid-cols-[120px,repeat(40,40px)] ml-1 pt-3 py-3 px-3 hover:bg-slate-300 lg:rounded xs:..."></div>
```

- makkelijker
- korter
- leesbaarder
- zowaar ook functioneler
  - `.truncate` staat bijv. voor meerdere CSS-properties
  - responsiveness met media query-dingen: `lg:bg-slate-300`, `dark:bg-red-500`
  - pseudo-classes als `hover`, ook mooi extraatje met `group-hover:`
  - je conformeert nog steeds aan design system: niet elke arbitraire pixelwaarde is kiesbaar
    - [de `3` in `m-3` is instelbaar](https://tailwindcss.com/docs/theme#theme-variable-namespaces)
  - makkelijker rekening houden met kleurenblinden? `bg-slate-300` `hover:bg-slate-600`

Even ter nuance: Tailwind (en andere utility libraries) zijn verder niet heilig ofzo. Maar het is verfrissend om niet weer continu te moeten dealen met dezelfde problemen van de afgelopen vijftien jaar. Dat alleen maakt me er al enthousiast over.

## Coole links

- [Eric Meyer's reset.css](https://meyerweb.com/eric/tools/css/reset/)
- [Tailwind drama met AI](https://github.com/tailwindlabs/tailwindcss.com/pull/2388)
- [Bad UI battles](https://www.reddit.com/r/badUIbattles/about/)
- [Ladybird](https://ladybird.org/), nieuwe onafhankelijke browser!
- [Responsive design van A List Apart](https://alistapart.com/article/responsive-web-design/)