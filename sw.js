// TynTron Service Worker for Mobile Notification Panel & Background Events
const SW_VERSION = 'tyntron-sw-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle tap / click on notification in mobile notification panel
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const notifData = event.notification.data || {};
  const notifId = notifData.notifId || '';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If an existing app window is open, focus it and post a message to open the notification
      for (const client of clientList) {
        if ('focus' in client) {
          client.focus();
          client.postMessage({ type: 'OPEN_NOTIFICATION', notifId: notifId });
          return;
        }
      }
      // If no window is open, open a new window to the catalogue root (with deep-link query)
      const targetUrl = '/' + (notifId ? '?notifId=' + encodeURIComponent(notifId) : '');
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// Handle push notification events if push manager is connected
self.addEventListener('push', (event) => {
  if (!event.data) return;
  try {
    const data = event.data.json();
    const title = data.title || 'TynTron Notification 🔔';
    const options = {
      body: data.body || '',
      icon: data.icon || 'newlogo.png.jpeg',
      badge: 'newlogo.png.jpeg',
      tag: data.id || 'tyntron_broadcast_' + Date.now(),
      vibrate: [200, 100, 200],
      data: data
    };
    event.waitUntil(self.registration.showNotification(title, options));
  } catch (e) {
    const text = event.data.text();
    event.waitUntil(self.registration.showNotification('TynTron Notification 🔔', {
      body: text,
      icon: 'newlogo.png.jpeg',
      badge: 'newlogo.png.jpeg'
    }));
  }
});
