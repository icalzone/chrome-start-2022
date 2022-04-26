'use strict';

window.addEventListener('load', () => document.body.dataset.ready = true);

const $ = {
  body: document.body,
  header: {
    parent: document.querySelector('header>div'),
    a: document.querySelector('header>a'),
    template: document.querySelector('header>template')
  },
  time: document.getElementById('time'),
  date: document.getElementById('date')
};

const cookie = {
  get: name => {
    try {
      return document.cookie.split(name + '=')[1].split(';').shift();
    }
    catch (e) {}
  },
  set: (name, value) => document.cookie = `${name}=${value}`
};

const bing = {
  url: (lc = 'en-US') => {
    const base = 'http://www.bing.com';
    return fetch(base + '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=' + lc)
      .then(r => r.json())
      .then(r => base + r.images[0].url);
  },
  insert: url => {
    $.body.style['background-image'] = `url('${url}')`;
  }
};

const start = () => chrome.storage.local.get({
  'custom-bg': false,
  'custom-image': ''
}, prefs => {
  if (prefs['custom-bg'] && prefs['custom-image']) {
    bing.insert(prefs['custom-image']);
  }
  else {
    bing.insert(localStorage.getItem('image') || chrome.runtime.getURL('data/override/default.jpg'));
    bing.url('en-US').then(u => {
      if (u !== cookie.get('url')) {
        const req = new XMLHttpRequest();
        req.open('GET', u);
        req.responseType = 'blob';
        req.onload = () => {
          const fileReader = new FileReader();
          fileReader.onload = ({target}) => {
            const dataURL = target.result;
            localStorage.setItem('image', dataURL);
            bing.insert(dataURL);
            cookie.set('url', u);
          };
          fileReader.readAsDataURL(req.response);
        };
        req.send();
      }
    });
  }
});
start();
chrome.storage.onChanged.addListener(ps => {
  if (ps['custom-bg'] || ps['custom-image']) {
    start();
  }
});

function update() {
  const td = s => ('00' + s).substr(-2);

  const now = new Date();
  $.time.textContent = `${now.getHours()}:${td(now.getMinutes())}:${td(now.getSeconds())}`;
  $.date.textContent =
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()] +
    ', ' +
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()] +
    ' ' +
    td(now.getDate());
}
update();
{
  let id;
  const one = () => {
    window.clearTimeout(id);
    id = window.setTimeout(one, 1000);
    update();
  };
  one();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.clearTimeout(id);
    }
    else {
      one();
    }
  });
}

var rq = new RandomQuote();
rq.setQuote();

// Fixes
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (a && a.href && (
    a.href.startsWith('chrome://') ||
    a.href.startsWith('about:')
  )) {
    e.preventDefault();
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, ([tab]) => chrome.tabs.update(tab.id, {
      url: a.href
    }));
  }
});



// const bookmarks = {
//   id: typeof InstallTrigger === 'undefined' ? '1' : 'toolbar_____',
//   favicon: (url, img) => {
//     if (bookmarks.remote) {
//       img.src = 'http://www.google.com/s2/favicons?domain_url=' + url;
//     }
//     else {
//       img.src = 'web.svg';
//     }
//   },
//   add: e => {
//     const {title, url, id} = e;
//     const node = document.importNode($.header.template.content, true);
//     const a = node.querySelector('a');
//     a.href = url;
//     a.dataset.id = id;
//     node.querySelector('span').title = node.querySelector('span').textContent = title;
//     bookmarks.favicon(url, node.querySelector('img'));
//     $.header.parent.appendChild(node);
//     return node;
//   },
//   bar: id => new Promise(resolve => {
//     chrome.bookmarks.getSubTree(id || bookmarks.id, ([e]) => resolve(e.children));
//   }),
//   build: () => {
//     chrome.storage.local.get({
//       favicon: true
//     }, prefs => {
//       bookmarks.remote = prefs.favicon;
//       [...$.header.parent.querySelectorAll('a')]
//         .filter(a => a.dataset.id !== 'apps' && a.dataset.id !== 'sidebar')
//         .forEach(a => a.remove());
//       bookmarks.bar().then(entries => entries
//         // filter folders
//         .filter(e => !e.children)
//         .filter(e => e.url.indexOf('://') !== -1)
//         .forEach(e => {
//           bookmarks.add(e);
//         }));
//     });
//   },
//   insert: ({id, title, url}) => new Promise(resolve => {
//     chrome.bookmarks.create({
//       parentId: id || bookmarks.id,
//       title,
//       url
//     }, resolve);
//   }),
//   remove: id => new Promise(resolve => {
//     chrome.bookmarks.remove(id, resolve);
//   })
// };

/*
var topSites = {
  list: () => {
    return new Promise(resolve => {
      chrome.topSites.get(resolve);
    });
  },
  add: ({title, url}) => {
    const template = document.querySelector('details template');
    const parent = document.querySelector('details');

    let node = document.importNode(template.content, true);
    node.href = url;
    node.querySelector('span').textContent = title;
    node.querySelector('img').src = 'chrome://favicon/' + url;
    parent.appendChild(node);
    return node;
  }
};
*/

/*
topSites.list().then(entries => {
  entries.forEach(topSites.add);
});
*/
// bookmarks.build();



// Drag & Drop
// $.header.parent.addEventListener('dragover', e => {
//   if ([...e.dataTransfer.types].indexOf('text/uri-list') !== -1) {
//     e.preventDefault();
//   }
// });
// $.header.parent.addEventListener('drop', e => {
//   e.preventDefault();

//   const url = e.dataTransfer.getData('text/uri-list');
//   if (url) {
//     const title = prompt('Bookmark Title', url);
//     bookmarks.insert({
//       title,
//       url
//     }).then(bookmarks.build);
//   }
// });

// Context Menu
// let contextmenu;
// document.addEventListener('contextmenu', e => {
//   contextmenu = e.target;
// });
// chrome.runtime.onMessage.addListener(({method}) => {
//   if (method === 'remove-link') {
//     const a = contextmenu && contextmenu.closest('a');
//     if (a && a.dataset.id) {
//       bookmarks.remove(a.dataset.id).then(bookmarks.build);
//     }
//   }
// });


