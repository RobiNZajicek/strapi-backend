module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          secure: true
        },
        actionOptions: {
          upload: {
            folder: env('CLOUDINARY_FOLDER', 'prague-striking-academy'),
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            resource_type: 'auto'
          },
          delete: {
            resource_type: 'image'
          }
        }
      }
    }
  });