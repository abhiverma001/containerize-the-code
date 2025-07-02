# Use nginx to serve static files
FROM nginx:alpine

# Copy the built application files to nginx html directory
COPY dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]