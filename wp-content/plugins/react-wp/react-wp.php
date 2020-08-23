<?php
/**
 * @package Embedding React In Wordpress
 * @author  <^>James <jamesdinnes@gmail.com><^>
 *
 * @wordpress-plugin
 * Plugin Name:       Embedding React In Wordpress
 * Description:       Example plugin for embedding a React application in WordPress
 * Version:           0.1.0
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

# folders and files
define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ) . '/widget' );
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' );
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );

# files that are required to embed the react app
require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcode.php' );