import twixly from './twixly-client';
import async from 'async';
import cache from './cache';

module.exports = function setData(cb) {
  async.parallel({
    nav_menu_items: function(callback) {
      twixly.items({item_type: 'nav-menu-item', include: 'page', sort: 'meta.position'}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      }); 
    },
    blog_post: function(callback) {
      twixly.items({item_type: 'blog-post'}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      }); 
    },
    blog_post_category: function(callback) {
      twixly.items({item_type: 'blog-post-category'}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      }); 
    },
    items: function(callback) {
      twixly.items({sort: 'meta.position'}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        }
      }); 
    },
    media: function(callback) {
      twixly.media({}, function(err, items) {
        if (err) {
          callback(err);
        } else {
          callback(null, items);
        } 
      });
    }
  },
  function(err, results) {
    if(err) return cb(err);
    
    var nav_menu_items = results.nav_menu_items;
    var blog_post = results.blog_post;
    var blog_post_category = results.blog_post_category;
    var items = results.items.data;
    var media = results.media.data;
    var item_dictionary = {};
    var media_dictionary = {};
    var pages = {};
    
    // Set pages
    for (var i = 0; i < nav_menu_items.data.length; i++) {
      var nav_menu_item = nav_menu_items.data[i];
      var page = nav_menu_items.included.find(function (item) {
        return item.id === nav_menu_item.relationships.page.data.id;
      });
      page.attributes.slug = nav_menu_item.attributes.slug;
      page.attributes.path = nav_menu_item.attributes.path;
      page.attributes.display_name = nav_menu_item.attributes.title;
      page.attributes.start_page = nav_menu_item.attributes.start_page;
      page.meta.position = nav_menu_item.meta.position;
      if (page.attributes.start_page) {
        pages['/'] = page;
      } else {
        pages['/' + page.attributes.slug] = page;  
      }
    }
    
    // Set item dictionary
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item_dictionary[item.id] = item;
    } 
    
    // Set media dictionary
    for (var i = 0; i < media.length; i++) {
      var mediaItem = media[i];
      media_dictionary[mediaItem.id] = mediaItem;
    }
    
    var data = {
      pages,
      blog_post,
      blog_post_category,
      item_dictionary,
      media_dictionary,
      version: Date.now()
    };
    
    cache.set('data', data);
    
    cb(null, data);
  });
};