# Performance Optimization - .htaccess Configuration

This file should be placed in your web root directory to enable Gzip compression and other performance optimizations.

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  # Compress HTML, CSS, JavaScript, Text, XML and fonts
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
  AddOutputFilterByType DEFLATE application/x-font
  AddOutputFilterByType DEFLATE application/x-font-opentype
  AddOutputFilterByType DEFLATE application/x-font-otf
  AddOutputFilterByType DEFLATE application/x-font-truetype
  AddOutputFilterByType DEFLATE application/x-font-ttf
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE font/opentype
  AddOutputFilterByType DEFLATE font/otf
  AddOutputFilterByType DEFLATE font/ttf
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE image/x-icon
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml

  # Remove browser bugs (only needed for really old browsers)
  BrowserMatch ^Mozilla/4 gzip-only-text/html
  BrowserMatch ^Mozilla/4\.0[678] no-gzip
  BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
  Header append Vary User-Agent
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # Video
  ExpiresByType video/webm "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  
  # Fonts
  ExpiresByType application/x-font-ttf "access plus 1 year"
  ExpiresByType font/opentype "access plus 1 year"
  ExpiresByType application/x-font-woff "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # Default
  ExpiresDefault "access plus 2 days"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  # Prevent clickjacking
  Header always set X-Frame-Options "SAMEORIGIN"
  
  # Prevent MIME type sniffing
  Header always set X-Content-Type-Options "nosniff"
  
  # Enable XSS protection
  Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Instructions

1. **Create .htaccess file**: Copy the content above to a file named `.htaccess` in your web root
2. **Upload to server**: Make sure it's in the same directory as `index.html`
3. **Verify**: Check that your server supports `.htaccess` files (Apache/LiteSpeed)

## Alternative: For Nginx

If your server uses Nginx instead of Apache, use this configuration in your server block:

```nginx
# Gzip Compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json image/svg+xml;

# Browser Caching
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|woff|woff2|ttf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```
