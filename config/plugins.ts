module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {
            folder: 'prague-striking-academy',
            use_filename: true,
            unique_filename: false,
            overwrite: true,
          },
          delete: {},
        },
      },
    },
  });