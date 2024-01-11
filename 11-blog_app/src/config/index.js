/* eslint-disable no-undef */
const config = {
  appWriteUrl: String(process.env.APPWRITE_URL),
  appWriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(process.env.APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(process.env.APPWRITE_BUCKET_ID),
};

export default config;
