<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\figueiredo_turismo\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'figueiredoturismo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yh@S[Cn4ql4#?BJW5o<]P7RP)Zq:W[(B`CM1$gP,J6(Oy_OtAZhPJUgYhXB9@B@9' );
define( 'SECURE_AUTH_KEY',  'GQ&(L ?j1^Ex;?lmS7KD]wfm4l##7sb3u|XDN)QM}Ddz-I|d.Rmvs%o&48a6hztC' );
define( 'LOGGED_IN_KEY',    '#b^j1@;4x)_dux0s1i/{R8<M(=;a)6e:uw]EDAnVZlmy`/9k3cy(h&[2~|8pMkbo' );
define( 'NONCE_KEY',        'n}k2;r*tn9FZ&F|M-{`knmA*G]Y>^]yX$8[fL-(==,WY_AXvZIlTyUDx{E_F}Dn+' );
define( 'AUTH_SALT',        'j$e-D/p_Hw@*+I;X{QRu?^R`5:nUlj06(UqOIXQ{&f~yfn ]|NPozV`saFLWG0-V' );
define( 'SECURE_AUTH_SALT', 'g)/sze1*pk:l%1/OM:CU,KHZ!NJP`K.brYQm2%}rut<Pu`TLFQK95l&$,T1b{OAz' );
define( 'LOGGED_IN_SALT',   '{$7mRc9AJiJ1-)wMC4*gHiGtIzci@5#NN-~~U1@b${,^?w3MQng#r,|`{!D ]bCE' );
define( 'NONCE_SALT',       'R]9F|<:BcT6Z7yr(h)yY-,b}-[tbEsf;PLKS9-?XH;cQx(P6?gzkYs?j=p[JB|Mu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'figtur_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
