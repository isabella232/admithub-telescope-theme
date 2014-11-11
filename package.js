Package.describe({
  name: "admithub:admithub-telescope-theme",
  summary: "AdmitHub theme for Telescope",
  version: "0.0.0",
  git: "https://github.com/AdmitHub/admithub-telescope-theme.git"
});

Package.onUse(function (api) {

  api.use([
      'underscore',
      'iron:router',
      'telescope-lib',
      'telescope-base',
      'telescope-daily',
      'telescope-newsletter',
      'telescope-notifications',
      'telescope-rss',
      'telescope-search',
      'telescope-tags',
      'telescope-theme-base',
      'standard-app-packages',
      'stylus'
  ]);

  api.addFiles('lib/admithub.js', ['client', 'server']);

  api.addFiles('lib/client/css/screen.styl', 'client');
  api.addFiles('lib/client/views/error_item.html', 'client');
  api.addFiles('lib/client/views/error_item.js', 'client');
  api.addFiles('lib/client/views/header_cta.html', 'client');
  api.addFiles('lib/client/views/header_cta.js', 'client');
  api.addFiles('lib/client/views/header.html', 'client');
  api.addFiles('lib/client/views/header.js', 'client');
  api.addFiles('lib/client/views/layout.html', 'client');
  api.addFiles('lib/client/views/layout.js', 'client');
  api.addFiles('lib/client/views/nav.html', 'client');
  api.addFiles('lib/client/views/nav_notifications.html', 'client');
  api.addFiles('lib/client/views/nav_notifications.js', 'client');
  api.addFiles('lib/client/views/newsletter_banner.html', 'client');
  api.addFiles('lib/client/views/newsletter_banner.js', 'client');
  api.addFiles('lib/client/views/notification_item.html', 'client');
  api.addFiles('lib/client/views/notification_item.js', 'client');
  api.addFiles('lib/client/views/notification_new_comment.html', 'client');
  api.addFiles('lib/client/views/notification_new_reply.html', 'client');
  api.addFiles('lib/client/views/post_admin.html', 'client');
  api.addFiles('lib/client/views/post_categories.html', 'client');
  api.addFiles('lib/client/views/post_comments_link.html', 'client');
  api.addFiles('lib/client/views/post_content.html', 'client');
  api.addFiles('lib/client/views/post_content.js', 'client');
  api.addFiles('lib/client/views/post_discuss.html', 'client');
  api.addFiles('lib/client/views/post_info.html', 'client');
  api.addFiles('lib/client/views/post_item.html', 'client');
  api.addFiles('lib/client/views/post_item.js', 'client');
  api.addFiles('lib/client/views/post_page.html', 'client');
  api.addFiles('lib/client/views/post_page.js', 'client');
  api.addFiles('lib/client/views/post_upvote.html', 'client');
  api.addFiles('lib/client/views/post_upvote.js', 'client');
  api.addFiles('lib/client/views/posts_list.html', 'client');
  api.addFiles('lib/client/views/posts_list.js', 'client');
  api.addFiles('lib/client/views/posts_load_more.html', 'client');
  api.addFiles('lib/client/views/comment_form.html', 'client');
  api.addFiles('lib/client/views/comment_item.html', 'client');
  api.addFiles('lib/client/views/search.html', 'client');
  api.addFiles('lib/client/views/search.js', 'client');
  api.addFiles('lib/client/views/touts.html', 'client');
  api.addFiles('lib/client/views/touts.js', 'client');
  api.addFiles('lib/client/views/typekit.html', 'client');

  api.addFiles('public/icons/admithub.eot', 'client');
  api.addFiles('public/icons/admithub.svg', 'client');
  api.addFiles('public/icons/admithub.ttf', 'client');
  api.addFiles('public/icons/admithub.woff', 'client');

  api.addFiles('public/img/st-anselm-crest.png', 'client');
  
  // Make sure this is added *after* screen.styl above.
  api.addFiles('lib/client/css/asset_path_overrides.styl', 'client');

  api.export([
       'templates',
       'themeSettings',
       'primaryNav',
       'secondaryNav',
  ]);
});
