Package.describe({
  name: "admithub:admithub-telescope-theme",
  summary: "AdmitHub theme for Telescope",
  version: "0.0.0",
  git: "https://github.com/AdmitHub/admithub-telescope-theme.git"
});

Package.onUse(function (api) {

  api.use([
      'underscore',
      'alanning:roles',
      'aldeed:simple-schema',
      'aldeed:autoform',
      'bengott:avatar',
      'jparker:gravatar',
      'iron:router',
      'richsilv:pikaday@1.0.0',
      'telescope-lib',
      'telescope-base',
      'telescope-daily',
      'telescope-newsletter',
      'telescope-notifications',
      'telescope-rss',
      'telescope-search',
      'telescope-tags',
      'standard-app-packages',
      'stylus'
  ]);

  api.addFiles('lib/admithub.js', ['client', 'server']);
  api.addFiles('lib/_fields.js', ['client', 'server']);
  api.addFiles('lib/freeTrialBot.js', ['client', 'server']);
  api.addFiles("lib/smsvalidations.js", ['client', 'server']);

  api.addFiles('lib/server/methods.js', ['server']);
  api.addFiles('lib/server/publications.js', ['server']);

  api.addFiles('lib/client/partners.js', 'client');
  api.addFiles("lib/client/css/forum/contributors.import.styl", "client");
  api.addFiles('lib/client/css/screen.styl', 'client');
  api.addFiles('lib/client/views/contributors.html', 'client');
  api.addFiles('lib/client/views/contributors.js', 'client');
  api.addFiles('lib/client/views/error_item.html', 'client');
  api.addFiles('lib/client/views/error_item.js', 'client');
  api.addFiles('lib/client/views/free_trial_bot.html', 'client');
  api.addFiles('lib/client/views/free_trial_bot.js', 'client');
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
  api.addFiles('lib/client/views/post_edit.html', 'client');
  api.addFiles('lib/client/views/post_info.html', 'client');
  api.addFiles('lib/client/views/post_item.html', 'client');
  api.addFiles('lib/client/views/post_item.js', 'client');
  api.addFiles('lib/client/views/post_page.html', 'client');
  api.addFiles('lib/client/views/post_page.js', 'client');
  api.addFiles('lib/client/views/post_share.html', 'client');
  api.addFiles('lib/client/views/post_share.js', 'client');
  api.addFiles('lib/client/views/post_submit.html', 'client');
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

  api.addFiles('public/img/favicon.ico', 'client');
  api.addFiles('public/img/st-anselm-crest.png', 'client');
  api.addFiles('public/img/st-anselm-logo.png', 'client');
  api.addFiles('public/img/cooper-square-128.png', 'client');
  api.addFiles('public/img/owlAvatar.png', 'client');
  api.addFiles('public/img/owl-repeat.png', 'client');
  api.addFiles('public/img/owl-repeat@2x.png', 'client');
  api.addFiles('public/img/owl-repeat-light.png', 'client');
  api.addFiles('public/img/owl-repeat-light@2x.png', 'client');
  api.addFiles('public/img/OwlWeb-120x120.png', 'client');
  api.addFiles('public/img/forum-header-shadow.png', 'client');
  
  // Make sure this is added *after* screen.styl above.
  api.addFiles('lib/client/css/asset_path_overrides.styl', 'client');

  api.export([
       'templates',
       'themeSettings',
       'primaryNav',
       'secondaryNav',
       'FreeTrialBots',
       'FreeTrialBotSchema'
  ]);
});
