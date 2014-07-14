<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'christhomasphoto');

/** MySQL database username */
define('DB_USER', 'eplewis');

/** MySQL database password */
define('DB_PASSWORD', 'm1saT0rt!');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's2pJ&(+OC ZLq9!jrR+R2?Z]s+|A8M^#P^@!U>Y4`E@+zzGU#>InCqL/,ioM$6fC');
define('SECURE_AUTH_KEY',  'YJq+b*,3{H)^-!W7n=qm!<-Pl(u(VN?uYp+&qzx$qSV1mL:%]GyLEfA|oaqb=5@-');
define('LOGGED_IN_KEY',    '=D?S(^5`fLgM=-<[PW[ihEl{-z!M0<=m{<)LE-w@|U<z70e12eGA=_UU+ah1c+A@');
define('NONCE_KEY',        'r;CtUqUA|?@6rM`|~iukCJ0X@K.XNz-}h>j@ ,{0((+?z,+C?_ZHKM.#g<T_3Q?>');
define('AUTH_SALT',        '?Vi7Xl,o8n@>@rjM4E8MZHB Gr<,N7VEHSCcd8786JgUzo*yv?O8TK)jz9a{4DMJ');
define('SECURE_AUTH_SALT', '_1z+C|pp+PWqM=7?#oY!PN5`EFCC64cR~:=FK:qxt~%;RV_#^{{C7L2Gu>fW[wqE');
define('LOGGED_IN_SALT',   't)D(Z3u9f@FO|opc-ITo2@sOrb)d@4OAbt/O RzuBb]OL/AZR&sVSx,NF*y--mSe');
define('NONCE_SALT',       '-YySef u~!pA1oSES:l>4h*:g$Jwwrx|:kUOg*:/_-]loIxyKoJO[G@G+Am`K]rN');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
